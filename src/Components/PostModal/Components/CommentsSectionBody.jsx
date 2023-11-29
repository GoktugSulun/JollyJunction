import React, {  useState } from 'react';
import * as S from '../Style/PostModal.style';
import { useSelector } from 'react-redux';
import Loading from '../../../Core/Components/Loading/Loading';
import Comment from './Comment';

const CommentsSectionBody = () => {
  const  { comments, loading } = useSelector((state) => state.PostModal);
  const [commentLoadingState, setCommentLoadingState] = useState([]);

  return (
    <S.CommentsSectionBody>
      { loading?.createComments && <Loading /> }
      {
        comments.map((obj) => (
          <Comment 
            key={obj.id} 
            data={obj} 
            commentLoadingStates={[commentLoadingState, setCommentLoadingState]} 
          />
        ))
      }
      { loading?.getComments && <Loading /> }
    </S.CommentsSectionBody>
  );
};

export default CommentsSectionBody;