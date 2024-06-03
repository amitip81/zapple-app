import React, { PureComponent } from 'react'
import Header from '../common/header';

class Index extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="app-detail-box pt-5">
                <div className="text-center" style={{ padding: '0px 20px' }}>
                  <div className="download-on-top pb-0"><img width={150} src="https://www.zapple.org/logo/zapple-logo-w.png" alt="zapple-logo" className="mb-2 pe-none" />
                    <h3>Scan the QR to continue</h3>
                    <p>Scan the QR to manage order, payments and order food online from zapple all from our mobile app.</p>
                  </div>
                  <div className="qrcode-img-desktop-section">
                    <img width={150} src="https://www.zapple.org/img/zapple-qr.png" className="pe-none" />
                    <p>Scan this code to visit the <br /> app directly from the your phone</p><a href="https://github.com/amitip81/zapple-app" className="know-more">Know More</a>
                  </div>
                  <div>
                    <h6 className="download-app pb-0 mt-3">Will soon available on</h6>
                    <div className="d-flex align-items-center justify-content-center store-btn" style={{ gap: '20px', cursor: 'pointer' }}>
                      <div className="appDwnldMain" style={{ marginTop: '1rem', marginBottom: '1rem' }}><a href="#!"><img src="https://www.zapple.org/img/google-play-store-logo.svg" className="pe-none" alt="Download Zapple App on Google Play" /></a><a href="#" className='px-1'><img src="https://www.zapple.org/img/app-store-logo.jpg" className="pe-none px-1" alt="Download Zapple App on Applestore" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Index