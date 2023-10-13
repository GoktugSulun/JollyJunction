import React from 'react';
import * as S from '../Style/Dashboard.style';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import AdvertisementURL from '../../../assets/Pngs/advertisement.jpg';

const Advertisement = () => {
   return (
      <S.Advertisement>
         <div className="header">
            <span className="header__title"> Sponsored </span>
            <Button
               bgColor="transparent"
               $color="#575757"
               fontSize="14px"
               padding="0"
            > 
               Create Ad 
            </Button>
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