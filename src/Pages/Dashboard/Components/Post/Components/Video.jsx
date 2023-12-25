import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardActions } from '../../../Store/Dashboard.slice';
import { useLocation } from 'react-router-dom';

const Video = ({ data, src, videoRef, isVideoIntersecting }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isMuted, videoData: { isLegal, currentTime, isPlaying } } = useSelector((state) => state.Dashboard);
  const { isOpen } = useSelector((state) => state.PostModal);
 
  useEffect(() => {
    if (!videoRef.current || isOpen) {
      return;
    }
    if (isVideoIntersecting) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      }
    } else {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }, [isVideoIntersecting, data.id]);

  //* After postModal data is closed, start/stop video on actual time
  // useEffect(() => {
  //   if (!videoRef.current || !isLegal || !isVideoIntersecting || isOpen) {
  //     console.log('yapma');
  //     return;
  //   }
  //   videoRef.current.currentTime = currentTime;
  //   if (isPlaying) {
  //     console.log(data.id, ' başlatıldı 2 => ', currentTime);
  //     videoRef.current.play();
  //   }
  //   // dispatch(DashboardActions.setVideoData({ isLegal: false }));
  // }, [isLegal, isVideoIntersecting]);

  return (
    <video 
      ref={videoRef}
      key={src} 
      className="file file__video" 
      controls={isVideoIntersecting}
      preload="metadata"
      loop
      muted={isMuted}
      // onClick={setManullyPlayPauseHandler}
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
  videoRef: PropTypes.object.isRequired,
  isVideoIntersecting: PropTypes.bool.isRequired
};

