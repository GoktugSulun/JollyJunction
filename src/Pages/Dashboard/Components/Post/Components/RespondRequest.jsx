import React from 'react';
import { Button } from '../../../../../Core/Components/Buttons/Button.style';
import { useDispatch } from 'react-redux';
import * as S from '../../../Style/Dashboard.style';

const RespondRequest = () => {
  const dispatch = useDispatch();

  const accept = () => {
    console.log('accept');
  };

  const reject = () => {
    console.log('reject');
  };

  return (
    <S.RespondRequest>
      <p className="text"> You&apos;ve got friendship request </p>
      <div className="buttons">
        <Button
          onClick={accept}
          fontSize="14px"
          padding="8px 15px"
        >
         Accept
        </Button>
        <Button
          onClick={reject}
          fontSize="14px"
          bgColor="#2d2d2d"
          padding="8px 15px"
        >
         Reject
        </Button>
      </div>
    </S.RespondRequest>
  );
};

export default RespondRequest;