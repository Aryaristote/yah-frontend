import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'; 
import WelcomSteps from "../components/WelcomSteps";
import WelcomContact from "../components/WelcomContact";
import logo from '../assets/images/yah-invest-logo.jpeg';

function App() {

  return (
    <body className="App">
      <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="nav-bar w-nav" >
        <div class="logo-wrapper">
          <a href="/" class="brand w-nav-brand">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <b className="logo-txt">YAH Invest</b>
          </a>
        </div>
        {/* Navigation Bar's links  */}
        <div class="menu-button w-nav-button">
          <div class="icon w-icon-nav-menu"></div>
        </div>
      </div>
      
      <section class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div
              id="w-node-_8d3a3cf7-fb35-cf44-3705-149c1fd088ea-6ba5f5ef" class="left-hero-block" >
              <h1 class="hero-title">Invest now and watch your wealth growing</h1>
              <p class="hero-paragraph">
                Investing is like nurturing a growing tree. As you plant your financial seeds, you watch your investments flourish over time.
              </p>
              <div className="mob-download">
                <small className="mob-title">Download the mobile App and start your investment...</small>
                <div className="mob-bouttons">
                  <a href="https://www.kobinet.com.tr/" target="_blank" class="market-btn apple-btn" role="button">
                    <span class="market-button-subtitle">Download on the</span>
                    <span class="market-button-title">App Store</span>
                  </a>
                  <a href="https://www.kobinet.com.tr/" target="_blank" class="market-btn google-btn" role="button">
                    <span class="market-button-subtitle">Download on the</span>
                    <span class="market-button-title">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
            <img
              src="../assets.website-files.com/5dd4413d36613959e9a5f5ea/5dd7c261b9c85cb9f47e6f28_hero%20mockup.png"
              id="w-node-_3dfb01fc-a9c5-675d-3c58-a5679354a4bc-6ba5f5ef"
              sizes="(max-width: 479px) 67vw, (max-width: 767px) 62vw, (max-width: 991px) 28vw, 24vw"
              srcset="
                https://assets.website-files.com/5dd4413d36613959e9a5f5ea/5dd7c261b9c85cb9f47e6f28_hero%20mockup-p-500.png 500w,
                https://assets.website-files.com/5dd4413d36613959e9a5f5ea/5dd7c261b9c85cb9f47e6f28_hero%20mockup.png       800w
              "
              alt=""
              class="mockup-img"
            />
          </div>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <div class="features-grid">
            <div
              id="w-node-_16a6797c-87d9-2411-36bf-387d33076da0-6ba5f5ef" class="feature-img-wrapper">
              <img
                src="../assets.website-files.com/5dd4413d36613959e9a5f5ea/5dd6e282a03136d8e34a750c_iPhone%20floatinf.png"
                height="500"
                sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 211.890625px, 141.234375px"
                srcset="
                  https://assets.website-files.com/5dd4413d36613959e9a5f5ea/5dd6e282a03136d8e34a750c_iPhone%20floatinf-p-500.png 500w,
                  https://assets.website-files.com/5dd4413d36613959e9a5f5ea/5dd6e282a03136d8e34a750c_iPhone%20floatinf.png       800w
                "
                alt=""
                class="feature-img"
              />
            </div>
            <div
              id="w-node-a9fa997f-5f9b-d6ff-172e-7fe54697006a-6ba5f5ef"
              class="feature-img-wrapper"
            >
              <img
                src="../assets.website-files.com/5dd4413d36613959e9a5f5ea/5e20e3cb980f1a149f16c057_Feature%201.png"
                sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 112.140625px, 141.234375px"
                srcset="
                  https://assets.website-files.com/5dd4413d36613959e9a5f5ea/5e20e3cb980f1a149f16c057_Feature%201-p-500.png 500w,
                  https://assets.website-files.com/5dd4413d36613959e9a5f5ea/5e20e3cb980f1a149f16c057_Feature%201.png       749w
                "
                alt=""
                class="feature-img"
              />
            </div>
            <div
              id="w-node-_16a6797c-87d9-2411-36bf-387d33076da2-6ba5f5ef"
              class="feature-wrapper"
            >
              <h4 class="feature-title">Keep track of your finances</h4>
              <p class="feature-paragraph">
              Gain full control and visibility over your finances with our powerful mobile app. Our feature-rich platform allows you to effortlessly track your 
              investments, monitor their growth, and receive returns on your investments after a designated period of time. Whether you're a seasoned investor or just 
              starting your financial journey, our app provides the tools and insights you need to make informed decisions.
              </p>
            </div>
            <div
              id="w-node-_16a6797c-87d9-2411-36bf-387d33076da9-6ba5f5ef"
              class="feature-wrapper"
            >
              <h4 class="feature-title">Effortless with our user-friendly mobile apps.</h4>
              <p class="feature-paragraph">
                With our intuitive interface, you can easily manage your investment portfolio, set financial goals, and track your progress towards achieving them. 
                Our advanced analytics and reporting tools provide you with real-time updates on the performance of your investments, helping you make adjustments as 
                needed to maximize your returns. <br/><br/>
                Investing has never been this convenient. Our app offers seamless integration with various investment options, allowing you to diversify your portfolio and 
                optimize your earning potential. Whether you're interested in stocks, bonds, real estate, or other investment vehicles, our platform has you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to follow  */}
      <WelcomSteps />

      {/* Contact */}
      <WelcomContact />

      {/* Footer */}
      <footer id="footer-copyright" class="footer-copyright">
        <div class="container">
          <div class="hm-footer-copyright text-center">
            <p>
              &copy; copyright YAH Invest 2023
            </p>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
