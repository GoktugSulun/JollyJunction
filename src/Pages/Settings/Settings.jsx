import React, { useEffect, useState } from 'react';
import * as S from './Style/Settings.style';
import TextInput from '../../Core/Inputs/TextInput';
import useMaterialForm from '../../Core/Hooks/useMaterialForm';
import * as yup from 'yup';
import { Button } from '../../Core/Components/Buttons/Button.style';
import { useDispatch, useSelector } from 'react-redux';
import { snackbar } from '../../Core/Utils/Snackbar';
import { NotifierTypes } from '../../Core/Constants/Enums';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Loading from '../../Core/Components/Loading/Loading';
import { AppConfigSagaActions } from '../../Core/Store/AppConfig.saga';
import SocialMediaEnums from '../Dashboard/Components/Enums/SocialMediaEnums';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, InputAdornment, Tooltip } from '@mui/material';
import { useWatch } from 'react-hook-form';

const schema = yup.object().shape({
  name: yup.string().required('Required!'),
  surname: yup.string().required('Required!'),
  email: yup.string().email('Invalid email format!').required('Required!'),
  password: yup.string().required('Required!'),
  country: yup.string(),
  city: yup.string(),
  location: yup.string(),
  school: yup.string(),
  position: yup.string(),
});

const defaultValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  country: '',
  city: '',
  location: '',
  school: '',
  position: '',
  company: '',
  social_medias: [
    { id: 1, name: 'LinkedIn', url: '', type: SocialMediaEnums.LINKEDIN },
    { id: 2, name: 'Instagram', url: '', type: SocialMediaEnums.INSTAGRAM },
    { id: 3, name: 'Twitter', url: '', type: SocialMediaEnums.TWITTER },
  ]
};

const importImage = async (name, type, callback) => {
  try {
    const response = await import(`../../server/files/${name}.${type}`);
    callback(response.default);
  } catch (error) {
    console.log(error, ' err');
  }
};

const Settings = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [file, setFile] = useState(null);
  const [isFileDeleted, setIsFileDeleted] = useState(false);
  const { init: { authorizedUser }, loading } = useSelector((state) => state.AppConfig);
  const { form, registerHandler } = useMaterialForm({ defaultValues, schema, mode: 'onChange' });

  const name = useWatch({ control: form.control, name: 'name' });

  const imageHandler = (e) => {
    const file = e.target.files?.[0];
    const blobURL = URL.createObjectURL(file);
    setImageURL(blobURL);
    setFile(file);
    URL.revokeObjectURL(file);
  };

  const saveHandler = async () => {
    const isValid = await form.trigger();
    if (!isValid) {
      dispatch(snackbar('Please fill all the required inputs', { variant: NotifierTypes.ERROR }));
      return;
    }
    const payload = { 
      id: authorizedUser.id, 
      data: {
        ...form.getValues(),
        is_file_deleted: authorizedUser.img.name && !file
      },
      file
    };
    console.log(payload, ' payload');
    dispatch(AppConfigSagaActions.editUser(payload));
  };

  const resetImage = () => {
    setImageURL('');
  };

  useEffect(() => {
    const { id, img, ...user } = authorizedUser;
    console.log('authorized değişti mi la');
    form.reset(user);
    if (img) {
      importImage(img.name, img.type, (url) => { setImageURL(url); });
    }
  }, [authorizedUser]);

  return (
    <S.Settings>
      <div className="content">
        <section>
          <h2 className="title"> Account </h2>
          <div className="container">
            <S.Image isUploading={loading?.editUser} >
              <div className="img-container">
                <div className="overlay">
                  <IconButton disabled={loading?.editUser} component="label" onChange={imageHandler} >
                    <AddAPhotoIcon />
                    <input type="file" />
                  </IconButton>
                </div>
                {
                  imageURL
                    ? <img className="img" src={imageURL} />
                    : <div className="img img__letter"> {name?.at(0) || '?'} </div>
                }
              </div>
              { imageURL && <Button disabled={loading?.editUser} onClick={resetImage} startIcon={<DeleteIcon />} className="delete-button"> Delete Image </Button> }
            </S.Image>
            <div className="group">
              <TextInput disabled={loading?.editUser} label="Name*" placeholder="Goktug" {...registerHandler('name')} />
              <TextInput disabled={loading?.editUser} label="Surname*" placeholder="Sulun" {...registerHandler('surname')} />
              <TextInput disabled={loading?.editUser} label="Email*" placeholder="goktug.sulun@hotmail.com" {...registerHandler('email')} />
              <TextInput 
                disabled={loading?.editUser} 
                label="Password*" 
                type={isVisible ? 'text' : 'password'} 
                placeholder="******" 
                {...registerHandler('password')} 
                endAdornment={<InputAdornment position="end"> 
                  <Tooltip title={isVisible ? 'Hide' : 'Show'}>
                    <IconButton onClick={() => setIsVisible((prev) => !prev)}> 
                      {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />} 
                    </IconButton> 
                  </Tooltip>
                </InputAdornment>}
              />
            </div>
          </div>
        </section>
        <section>
          <h2 className="title"> Personal </h2>
          <div className="group">
            <TextInput disabled={loading?.editUser} label="Country" placeholder="Türkiye" {...registerHandler('country')} />
            <TextInput disabled={loading?.editUser} label="City" placeholder="Istanbul" {...registerHandler('city')} />
            <TextInput disabled={loading?.editUser} label="Location" placeholder="Kucukcekmece" {...registerHandler('location')} />
            <TextInput disabled={loading?.editUser} label="School" placeholder="Bahcesehir University" {...registerHandler('school')} />
            <TextInput disabled={loading?.editUser} label="Company" placeholder="Trendyol" {...registerHandler('company')} />
            <TextInput disabled={loading?.editUser} label="Position" placeholder="Frontend Developer" {...registerHandler('position')} />
          </div>
        </section>
        <section>
          <h2 className="title"> Social Media </h2>
          <div className="group">
            <TextInput disabled={loading?.editUser} label="LinkedIn" placeholder="www.linkedin.com/in/username" {...registerHandler('social_medias[0].url')} />
            <TextInput disabled={loading?.editUser} label="Instagram" placeholder="www.instagram.com/username" {...registerHandler('social_medias[1].url')} />
            <TextInput disabled={loading?.editUser} label="Twitter" placeholder="https://twitter.com/username" {...registerHandler('social_medias[2].url')} />
          </div>
        </section>
        <div className="content__footer">
          <Button disabled={loading?.editUser} onClick={saveHandler} padding="5px 15px" minWidth="100px">
            { loading?.editUser ? <Loading size={25} color="#FFFFFF"/> : 'Save'}
          </Button>
        </div>
      </div>
    </S.Settings>
  );
};

export default Settings;