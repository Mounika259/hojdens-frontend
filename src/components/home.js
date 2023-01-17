import React from 'react';
import CardGrid from './card/cardGrid';
import Banner from './card/banner';
import CarouselComponent from './carousel';
import Footer from './footer';
import NavigationBar from './header';

function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="row">
        <CarouselComponent />
      </div>
      <div className="row special-offer">
        <CardGrid data="noCategory" />
        <Banner />
        <CardGrid data="vegetables" />
      </div>
      <div className="row footer-row">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
