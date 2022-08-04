import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle, subs }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subs}</p>
      <br />
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default Title;
