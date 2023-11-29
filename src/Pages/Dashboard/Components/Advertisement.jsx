import React, { useEffect, useRef, useState } from 'react';
import * as S from '../Style/Dashboard.style';
import { useSelector } from 'react-redux';
import { getAdvertisementImageURL } from '../../../assets/Pngs/Pngs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import { IconButton } from '@mui/material';

const Advertisement = () => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);  
  const { advertisements } = useSelector((state) => state.AppConfig.init);
  const { img, title, description, url, url_path } = advertisements?.[index] || {};

  const navigate = () => {
    window.open(url_path, '_blank');
  };

  const changeImage = (idx) => {
    setIndex(idx);
  };

  const prevImage = () => {
    if (index === 0) {
      setIndex(advertisements.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  const nextImage = () => {
    if (index === advertisements.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }; 

  useEffect(() => {
    if (advertisements.length) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      } 
      intervalRef.current = setInterval(() => {
        nextImage();
      }, 3000);
    }
  }, [index, advertisements]); 

  return (
    <S.Advertisement>
      <div className="header">
        <span className="header__title"> Sponsored </span>
      </div>
      <div className="carousel">
        <div onClick={navigate} className="overlay"> </div>
        <IconButton onClick={prevImage} className="arrow arrow__back">
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={nextImage} className="arrow arrow__forward">
          <ArrowForwardIcon />
        </IconButton>
        <div className="dots">
          {advertisements.map((obj, idx) => (
            <S.DotIconButton key={obj.id} onClick={() => changeImage(idx)} $active={idx === index} >
              <CircleIcon />
            </S.DotIconButton>
          ))}
        </div>
        <img onClick={navigate} src={getAdvertisementImageURL(img)} alt="advertisement" />
      </div>
      <div className="sponsor">
        <span className="sponsor__name"> {title} </span>
        <a href={url_path} target="_blank" className="sponsor__url" rel="noreferrer"> {url} </a>
      </div>
      <p className="description"> { description } </p>
    </S.Advertisement>
  );
};

export default Advertisement;