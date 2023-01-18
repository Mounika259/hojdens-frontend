import React from 'react';

import { Button } from 'react-bootstrap';

function ShowMore() {
  return (
    <div className="row">
      <div className="text-center mt-4 mb-4">
        <Button className="btn-danger offer-btn" size="sm">
          {/* {showMore ? 'Show less' : 'Show More'} */} Show more
        </Button>
      </div>
    </div>
  );
}
export default ShowMore;
