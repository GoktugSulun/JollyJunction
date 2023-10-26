import React from 'react';
import * as S from '../Style/PostModal.style';
import CommentsSectionHeader from './CommentsSectionHeader';
import { Divider } from '../../Divider/Divider.style';

const CommentsSection = () => {

  return (
    <S.CommentsSection>
      <CommentsSectionHeader />
      <Divider />
    </S.CommentsSection>
  );
};

export default CommentsSection;