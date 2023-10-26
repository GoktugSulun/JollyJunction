import React from 'react';
import * as S from '../Style/PostModal.style';
import { useSelector } from 'react-redux';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CustomIconButton } from '../../Styles/Common.style';

const CommentsSectionBody = () => {
  const  { postData } = useSelector((state) => state.PostModal);

  const getDate = () => {
    const diff = moment.duration(moment().diff(postData?.created_at)).humanize();
    return `${diff} ago`;
  };

  return (
    <S.CommentsSectionBody>
      {
        [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map((obj) => (
          <S.CommentContainer key={obj.id}>
            <Button
              bgColor="transparent"
              padding="0"
              disableRipple
              minWidth="0"
            >
              <img src={getUserImageURL(postData?.user?.img)} alt="user-commented" />
            </Button>
            <div className="comment-wrapper">
              <S.Comment>
                <div className="header">
                  <div className="user">
                    <Link className="user__name"> {postData?.user?.name} {postData?.user?.surname} </Link> 
                    <span className="user__position"> {postData?.user?.position} </span>
                  </div>
                  <CustomIconButton fontSize={20}>
                    <FavoriteBorderIcon />
                  </CustomIconButton>
                </div>
                <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus ullam accusantium dicta dolorum totam voluptatibus, laborum, amet necessitatibus eligendi dolore ipsum reprehenderit eaque maiores sint numquam sequi rerum culpa, voluptates tempore illum fugiat vitae? Ipsa voluptates distinctio in ipsam. 
                </p>
                <div className="footer">
                  <span className="date"> {getDate()} </span> 
                  <Button
                    bgColor="trasparent"
                    padding="0"
                    minWidth="inital"
                  >
              2 likes
                  </Button>
                </div>
              </S.Comment>
            </div>
          </S.CommentContainer>
        ))
      }
      
    </S.CommentsSectionBody>
  );
};

export default CommentsSectionBody;