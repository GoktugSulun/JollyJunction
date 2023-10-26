import React from 'react';
import * as S from '../Style/PostModal.style';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import moment from 'moment';
import TextInput from '../../../Core/Inputs/TextInput';
import { Divider } from '../../Divider/Divider.style';

const CommentsSectionFooter = () => {
  const { postData } = useSelector((state) => state.PostModal);

  const getDate = () => {
    const diff = moment.duration(moment().diff(postData?.created_at)).humanize();
    return `${diff} ago`;
  };

  return (
    <S.CommentsSectionFooter>
      <div className="tools">
        <div className="tools__like-comment">
          <Tooltip title="Like" placement="top">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Comment" placement="top">
            <IconButton>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip title="Save" placement="top">
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="post-detail">
        <Button className="post-detail__likes">
          {postData?.likes?.length || 0} likes
        </Button>
        <span className="post-detail__date"> {getDate()} </span>
      </div>
    </S.CommentsSectionFooter>
  );
};

export default CommentsSectionFooter;