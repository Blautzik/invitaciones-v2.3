import React from 'react';
import Info from '@/components/15/Info';

import InfoSouci from '../15/InfoSouci';
import InfoVip from './InfoVip';
import InfoCeremonia from './InfoCeremonia';
import Infoplaya from './Infoplaya';
import { Caviar } from '@/utils/fonts';
import InfoVipNew from './InfoVipNew';

const InfoCondicional = ({ article }) => {
  if (article.form_id === "1QnzLLfyqDlbbehwIJa7qPbEtpm16iZaEt8pI28cgW8k") {
    return (
      <div id="info">
        <InfoSouci article={article} />
      </div>
    );
  } else if (article.form_id === "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") { 
    return (
      <div id="info">
        <InfoVip article={article} />
      </div>
    );
  } else if (article.form_id === "1trFNkU-_EGblyx3Z44wXHg_6ajmphpvmfjGRfgkgAJI") { 
    return (
      <div id="info">
        <InfoVipNew article={article} />
      </div>
    );
  }else if(article.form_id=="1ivEc4h8GKPPqzetPxNvi800X8i8gh4BEMau6D8RaqbM"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="1JzJoR1M0ndSxnqkk4WrgwPMB0E0bQtfY9jWg4bhS_nw"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="1uKF--Q_hR0UnN-gafWFjWUObtBqHbbgpSuNWwR-VAYM"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="1fkcSVt3orivOV1UMbUHCJcekpmWo6q5CowcPr0-MTNU"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="1UBuuvIEVZUPa-L05AZOJOk_OXhWNBhhZlDnf9Mwxy5s"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="1LmGPi9qG-JifeA9BoYJZ-MQqidqUWYFyia6G3Qmj54Y"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="1LmGPi9qG-JifeA9BoYJZ-MQqidqUWYFyia6G3Qmj54Y"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="15nHW3PDhBZEc6sbqoq72EErAr6t4gpp8miFTQigfGFM"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }else if(article.form_id=="1kKF8B-1gNtql6y8_1N2Q-i308_HjCgZddMOEVvUmmvY"){
    return (
      <div id="info" className={`${Caviar.className} h-1/12`}>
        <Infoplaya />
      </div>
    )
  }else {
    return (
      <div id="info">
        <Info article={article} />
      </div>
    );
  }
};

export default InfoCondicional;