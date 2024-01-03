import React from 'react';
import * as S from './Style/NotFound.style';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <S.NotFound>
      <SentimentVeryDissatisfiedIcon />
      <p className="info-message info-message__title"> Sorry, this page cannot be reached. </p>
      <p className="info-message"> The link you clicked may be broken or the page may have been removed.
        <Link to="/" replace > Back to JollyJunction </Link>
      </p>
    </S.NotFound>
  );
};

export default NotFound;