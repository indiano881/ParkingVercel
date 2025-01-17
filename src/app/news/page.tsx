import React from 'react';
import Header from "../components/header";
import Banner from '../components/Hero';
import TitleSubtitle from '../components/TitleSubtitle';

const News = () => {
  return (
    <>
      <Header />
      <Banner page="news"/>
      <h2>news</h2>
      <TitleSubtitle
            title="Don´t miss"
            subtitle="We are expanding rapidly, subscribe to our newsletter."
            overtitle="News"
          />
    </>
  );
};

export default News;
