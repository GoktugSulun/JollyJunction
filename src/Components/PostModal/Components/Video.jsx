import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardActions } from '../../../Pages/Dashboard/Store/Dashboard.slice';
import { getFileURL } from '../../../Core/Utils/File';
import PropTypes from 'prop-types';

const Video = ({ videoRef }) => {
  const dispatch = useDispatch();
  const { isMuted, volume } = useSelector((state) => state.Dashboard);
  const { isOpen, postData, videoData } = useSelector((state) => state.PostModal); 

  const onVolumeChangeHandler = (e) => {
    if (!e.target.muted) {
      dispatch(DashboardActions.setVolume(e.target.volume));
    }
    dispatch(DashboardActions.setIsMuted(e.target.muted));
  }; 
 
  useEffect(() => {
    if (!videoRef.current || !isOpen) {
      return;
    }
    videoRef.current.currentTime = videoData.currentTime;
    if (videoData.isPlaying) {
      videoRef.current.volume = volume;
      videoRef.current.play();
    }
  }, [isOpen]);

  return (
    <video 
      ref={videoRef}
      // key={src} 
      className="file file__video" 
      controls
      preload="metadata"
      loop
      muted={isMuted}
      onVolumeChange={(e) => onVolumeChangeHandler(e)}
    >
      <source src={getFileURL(postData?.files?.[0]) + '#t=0.5'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;

Video.propTypes = {
  videoRef: PropTypes.object.isRequired
};


