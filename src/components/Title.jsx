import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle, subs, pubs, gitlinker }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h4>{subs}</h4>
      <a href="https://github.com/Raider-9/Box_Office_App_raider">
        {gitlinker}
      </a>
      <h4>{pubs}</h4>
      <br />
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default Title;
