import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardActions } from '../../../Store/Dashboard.slice';
import { useMediaQuery } from '@mui/material';

const Video = ({ data, src, videoRef, isVideoIntersecting, intersectionRatio }) => {
  const dispatch = useDispatch();
  const { isMuted, volume, videoData: { isLegal, currentTime, isPlaying } } = useSelector((state) => state.Dashboard);
  const { isOpen } = useSelector((state) => state.PostModal);
  const max600px = useMediaQuery('(max-width: 600px)'); //* screen width <= 600px

  const onVolumeChangeHandler = (e) => {
    if (!e.target.muted) {
      dispatch(DashboardActions.setVolume(e.target.volume));
    }
    dispatch(DashboardActions.setIsMuted(e.target.muted));
  }; 

  const playVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.volume = volume;
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (!videoRef.current.paused) {
      videoRef.current.pause();
    }
  };
 
  useEffect(() => {
    if (!videoRef.current || isOpen) {
      return;
    }

    if (isLegal && isVideoIntersecting) {
      videoRef.current.currentTime = currentTime;
      if (isPlaying) {
        videoRef.current.volume = volume;
        videoRef.current.play();
      }
      dispatch(DashboardActions.setVideoData({ isLegal: false }));
      return;
    }

    if (isVideoIntersecting) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isVideoIntersecting, data.id, isOpen, max600px]);

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
      onVolumeChange={(e) => onVolumeChangeHandler(e)}
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
  isVideoIntersecting: PropTypes.bool.isRequired,
  intersectionRatio: PropTypes.number.isRequired
};

