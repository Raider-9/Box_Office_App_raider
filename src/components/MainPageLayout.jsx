import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Film Finder"
        subs="&#9734; An Interactive Project By G.r.o.u.P 67 &#9734;"
        pubs="&#9755; Specially Customised For Uem End Sem Project Demonstration &#9754;"
        gitlinker="&#9854; Our codebase for this project on github &#9854;"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
