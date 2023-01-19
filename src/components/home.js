import React from 'react';
import CardGrid from './cardGrid';
import Banner from './banner';
import CarouselComponent from './carousel';
import Footer from './footer';
import NavigationBar from './navbar';
import ShowMore from './showMore';

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
        {/*  <CardGrid data="vegetables" /> */}
        <CardGrid data="snacks" />
        <CardGrid data="meat" />
        <ShowMore />
      </div>
      <div className="row footer-row">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
