import React from 'react';
import * as S from '../Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Loading from '../../../Core/Components/Loading/Loading';
import { PostModalSagaActions } from '../Store/PostModal.saga';
import { IconButton, Tooltip } from '@mui/material';
import CommentsSettings from './CommentsSettings';

const CommentsSectionBody = () => {
  const dispatch = useDispatch();
  const  { postData, comments, loading } = useSelector((state) => state.PostModal);
  const  { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const getDate = (created_at) => {
    const diff = moment.duration(moment().diff(created_at)).humanize();
    return `${diff} ago`;
  };

  const isLiked = (likes) => {
    return !!likes.find((user_id) => user_id === authorizedUser.id);
  };

  const likeCommentHandler = (id, likes) => {
    const payload = { id, like: !isLiked(likes) };
    dispatch(PostModalSagaActions.likeComment(payload));
  };

  return (
    <S.CommentsSectionBody>
      { loading?.createComments && <Loading /> }
      {
        loading?.getComments
          ? <div className="loading-container"> <Loading size={50} /> </div>
          : comments.map((obj) => (
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
                    <Tooltip title={isLiked(obj.likes) ? 'Unlike' : 'Like'}>
                      <IconButton onClick={() => likeCommentHandler(obj.id, obj.likes)} fontSize={20}>
                        {
                          isLiked(obj.likes)
                            ? <FavoriteIcon />
                            : <FavoriteBorderIcon />
                        }
                      </IconButton>
                    </Tooltip>
                  </div>
                  <p className="text"> {obj?.comment} </p>
                  <div className="footer">
                    <span className="date"> {getDate(obj?.created_at)} </span> 
                    <Button
                      disableRipple
                      bgColor="trasparent"
                      minWidth="inital"
                      padding="0"
                      className="likes"
                    >
                    0 likes
                    </Button>
                    { authorizedUser.id === obj.user_id && <CommentsSettings /> }
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