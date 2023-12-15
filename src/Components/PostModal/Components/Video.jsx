import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardActions } from '../../../Pages/Dashboard/Store/Dashboard.slice';
import { getFileURL } from '../../../Core/Utils/File';

const Video = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const { isMuted } = useSelector((state) => state.Dashboard);
  const { isOpen, postData, videoData } = useSelector((state) => state.PostModal); 
 
  useEffect(() => {
    if (!videoRef.current || !isOpen) {
      return;
    }
    videoRef.current.currentTime = videoData.currentTime;
    if (videoData.isPlaying) {
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
      onVolumeChange={(e) => dispatch(DashboardActions.setIsMuted(e.target.muted))}
    >
      <source src={getFileURL(postData?.files?.[0]) + '#t=0.5'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;


