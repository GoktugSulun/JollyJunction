import React, {  useState } from 'react';
import * as S from '../Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Core/Components/Loading/Loading';
import Comment from './Comment';
import { PostModalSagaActions } from '../Store/PostModal.saga';
import { CommentSkeleton } from '../../Skeletons';

const CommentsSectionBody = () => {
  const dispatch = useDispatch();
  const  { comments, loading, canBeMoreComment, page, limit, postData } = useSelector((state) => state.PostModal);
  const [commentLoadingState, setCommentLoadingState] = useState([]);

  const fetchMoreComment = () => {
    if (canBeMoreComment) {
      dispatch(PostModalSagaActions.getComments({ post_id: postData.id, page, limit }));
    }
  };

  return (
    <S.CommentsSectionBody>
      { loading?.createComment && <CommentSkeleton /> }
      {
        comments.map((obj, index) => (
          <Comment 
            key={obj.id} 
            data={obj} 
            commentLoadingStates={[commentLoadingState, setCommentLoadingState]} 
            {...(comments.length - 1 === index ? { fetchMoreComment, isLastElement: true } : {})}
          />
        ))
      }
      { loading?.getComments && <CommentSkeleton count={3} /> }
      { loading?.getComments && <Loading /> }
    </S.CommentsSectionBody>
  );
};

export default CommentsSectionBody;