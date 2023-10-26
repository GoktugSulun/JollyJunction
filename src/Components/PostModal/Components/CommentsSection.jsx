import React from 'react';
import * as S from '../Style/PostModal.style';
import CommentsSectionHeader from './CommentsSectionHeader';
import CommentsSectionBody from './CommentsSectionBody';
import { Divider } from '../../Divider/Divider.style';
import CommentsSectionFooter from './CommentsSectionFooter';
import CreateComment from './CreateComment';

const CommentsSection = () => {

  return (
    <S.CommentsSection>
      <CommentsSectionHeader />
      <Divider margin="10px 0 0 0" height="0.1px" />
      <CommentsSectionBody />
      <Divider margin="0 0 10px 0" height="0.1px" />
      <CommentsSectionFooter />
      <Divider margin="0" height="0.1px"/>
      <CreateComment />
    </S.CommentsSection>
  );
};

export default CommentsSection;