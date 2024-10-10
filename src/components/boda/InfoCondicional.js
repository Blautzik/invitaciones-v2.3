import React from 'react';
import Info from '@/components/15/Info';

import InfoSouci from '../15/InfoSouci';
import InfoVip from './InfoVip';
import InfoCeremonia from './InfoCeremonia';

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
  }else if(article.form_id=="1ivEc4h8GKPPqzetPxNvi800X8i8gh4BEMau6D8RaqbM"){
    return (
      <div id="info">
        <InfoCeremonia article={article} />
      </div>
    )
  }
   else {
    return (
      <div id="info">
        <Info article={article} />
      </div>
    );
  }
};

export default InfoCondicional;