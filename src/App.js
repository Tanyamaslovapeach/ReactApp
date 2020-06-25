import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import TextBlock from './components/TextBlock';
import FooterBlock from './components/FooterBlock';
import ImageBlock from './components/ImageBlock';

const App = () => {
  return (
      <>
        <HeaderBlock 
          title="World Travel Guide"
          descr="Live Your Life"/>
        <TextBlock />
        <ImageBlock />
        <FooterBlock />
      </>
  );
}
export default App;
