import React from 'react';
import CardGrid from './card/cardGrid';
import Offer from './card/offer';
import CarouselComponent from './carousel';
import Footer from './footer';
import NavigationBar from './header';

/* const [currentProducts, setCurrentProducts] = useState(null);
const [pageCount, setPageCount] = useState(0);
const [productOffset, setProductOffset] = useState(0);
useEffect(() => {
  const endOffset = productOffset + 8;
  setCurrentProducts(Products.slice(productOffset, endOffset));
  setPageCount(Math.ceil(Products.length / 8));
}, [Products, productOffset]);
const handlePageClick = (event) => {
  const newOffset = (event.selected * 8) % Products.length;
  setProductOffset(newOffset);
}; */
function Home() {
  return (
    <div>
      <NavigationBar />

      <div className="row">
        <CarouselComponent />
      </div>
      <div className="row special-offer">
        <Offer />
        <CardGrid />
        {/*  <div className="pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        </div> */}
      </div>

      <div className="row footer-row">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
