import React from 'react';
import * as S from '../Style/Dashboard.style';
import AdvertisementURL from '../../../assets/Pngs/advertisement-1.jpg';

const Advertisement = () => {
  return (
    <S.Advertisement>
      <div className="header">
        <span className="header__title"> Sponsored </span>
      </div>
      <img src={AdvertisementURL} alt="advertisement" />
      <div className="sponsor">
        <span className="sponsor__name"> İş Bankası </span>
        <a href="https://işbankası.com" className="sponsor__url"> işbankası.com </a>
      </div>
      <p className="description">
         Türkiye İş Bankası Kültür Yayınları, 1956 yılında Hasan Âli Yücel tarafından kuruldu. 
      </p>
    </S.Advertisement>
  );
};

export default Advertisement;