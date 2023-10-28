import React from 'react';
import * as S from '../Style/PostModal.style';
import { useSelector } from 'react-redux';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CustomIconButton } from '../../Styles/Common.style';
import Loading from '../../../Core/Components/Loading/Loading';

const CommentsSectionBody = () => {
  const  { postData, comments, loading } = useSelector((state) => state.PostModal);

  const getDate = (created_at) => {
    const diff = moment.duration(moment().diff(created_at)).humanize();
    return `${diff} ago`;
  };

  const sortedComments = () => {
    const sortedArrays = [...comments];
    sortedArrays.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return sortedArrays;
  };

  return (
    <S.CommentsSectionBody>
      { loading?.createComments && <Loading /> }
      {
        loading?.getComments
          ? <div className="loading-container"> <Loading size={50} /> </div>
          : sortedComments().map((obj) => (
            <S.CommentContainer key={obj.id}>
              <Button
                bgColor="transparent"
                padding="0"
                disableRipple
                minWidth="0"
              >
                <img src={getUserImageURL(obj?.user?.img)} alt="user-commented" />
              </Button>
              <div className="comment-wrapper">
                <S.Comment>
                  <div className="header">
                    <div className="user">
                      <Link className="user__name"> {obj?.user?.name} {obj?.user?.surname} </Link> 
                      <span className="user__position"> {obj?.user?.position} </span>
                    </div>
                    <CustomIconButton fontSize={20}>
                      <FavoriteBorderIcon />
                    </CustomIconButton>
                  </div>
                  <p className="text"> {obj?.comment} </p>
                  <div className="footer">
                    <span className="date"> {getDate(obj?.created_at)} </span> 
                    <Button
                      bgColor="trasparent"
                      padding="0"
                      minWidth="inital"
                    >
                    0 likes
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