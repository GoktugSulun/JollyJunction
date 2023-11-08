import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../Core/Components/Buttons/Button.style';

const Cancel = () => {
  const dispatch = useDispatch();

  const cancel = () => {
    console.log('cancel friendship request');
  };

  return (
    <Button
      onClick={cancel}
      fontSize="14px"
      bgColor="#2d2d2d"
    >
      Cancel friendship request
    </Button>
  );
};

export default Cancel;