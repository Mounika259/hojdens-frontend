import React from 'react';

function Footer() {
  return (
    <div className="card footer">
      <div className="row card-body footer-body">
        <div className="col-sm-4">
          <p className="footer-text">
            En livsmedelsbutik med en av Jönköpings billigaste och fräschaste
            frukt och grönt avdelning.{' '}
          </p>
        </div>
        <div className="col-sm-3 footer-link">
          <p>
            <a href="/kontakt">Contact us</a>
          </p>
          <p>
            <a href="#">Our guaranty</a>
          </p>
          <p>
            <a href="#">Our offers</a>
          </p>
        </div>
        <div className="col-sm-3 footer-link address">
          <p>
            <b>Address</b>
            <br />
            Oxhagsgatan 75, 561 50 Huskvarna
            <br />
            <a href="tel:+46-36-333-17-20" className="footer-telephone">
              <i className="bi bi-telephone-fill" />
            </a>{' '}
            036-333 17 20
          </p>
          <p>
            <a
              href="https://www.facebook.com/HojdensOxnehaga/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook" />
            </a>
            Follow us on facebook
          </p>
        </div>
      </div>
      <div className="card-footer footer-copyright text-center">
        ©Copyright Hojdens Öxnehaga
      </div>
    </div>
  );
}
export default Footer;
