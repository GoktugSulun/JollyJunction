import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useIntersectionObserver } from '../../../../../Hooks';
import { DashboardActions } from '../../../Store/Dashboard.slice';

const options = {
  threshold: 0.70
};

const Video = ({ data, src }) => {
  const dispatch = useDispatch();
  const { isMuted } = useSelector((state) => state.Dashboard);
  const { ref, isIntersecting } = useIntersectionObserver({ options });
 
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (isIntersecting) {
      if (ref.current.paused) {
        console.log(data.id, ' => OYNAT ', ref.current);
        ref.current.play();
      }
    } else {
      if (!ref.current.paused) {
        console.log(data.id, ' => DURDUR ', ref.current);
        ref.current.pause();
      }
    }
  }, [isIntersecting, ref.current]);

  return (
    <video 
      ref={ref}
      key={src} 
      className="file file__video" 
      controls={isIntersecting}
      preload="metadata"
      loop
      muted={isMuted}
      onVolumeChange={(e) => dispatch(DashboardActions.setIsMuted(e.target.muted))}
    >
      <source src={src + '#t=0.5'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;

Video.propTypes = {
  data: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
};