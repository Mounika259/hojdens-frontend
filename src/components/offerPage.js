import React from 'react';
import Footer from './footer';
import NavigationBar from './navbar';

function OfferPage() {
  /*  const callAction = () => {
    window.location = 'tel:036-333 17 20';
  };
 */
  /* pdf uploader */
  return (
    <>
      <NavigationBar />
      <header className="offers-header text-center">
        Offers!
        <br /> Here are the exciting offers
      </header>

      <Footer />
    </>
  );
}
export default OfferPage;
