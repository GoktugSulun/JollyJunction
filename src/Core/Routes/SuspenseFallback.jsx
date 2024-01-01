import React from 'react';
import styled from '@emotion/styled';
import Loading from '../Components/Loading/Loading';
import PropTypes from 'prop-types';

const Fallback = styled.div`
   width: 100%;
   height: ${({ height }) => height};
   display: grid;
   place-items: center;
`;

const SuspenseFallback = ({ height }) => {
  return (
    <Fallback height={height}>
      <Loading size={100} />
    </Fallback>
  );
};

export default SuspenseFallback;

SuspenseFallback.propTypes = {
  height: PropTypes.string
};

SuspenseFallback.defaultProps = {
  height: '100vh'
};