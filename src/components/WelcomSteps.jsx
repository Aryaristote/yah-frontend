import React from 'react'
import { TypeAnimation } from 'react-type-animation'; 
import { FaCircle} from 'react-icons/fa';

export default function WelcomSteps(props) {

    return (
        <section className="steps" id="">
        <div class="container">
          <div className="steps-title">
            <h6 class="small-title">Three Steps to go: </h6>
            <TypeAnimation
              sequence={[
                'Download the Mobile Application.',
                1000,
                'Create an Account and Set Investments.',
                1000,
                'Get Your Financial Freedom.',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '3em', display: 'inline-block', color:  '#042c5c', fontWeight: 'bold' }}
              repeat={Infinity}
            />
          </div>
          <section id="education" class="education">
            <div class="container">
              <div class="education-horizontal-timeline">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="single-horizontal-timeline">
                      <div class="experience-time">
                        <h2>1 - Download the App</h2>
                        <h3>For iOS and Android.</h3>
                      </div> 
                      <div class="timeline-horizontal-border">
                        <FaCircle className="icon" aria-hidden="true" />
                        <span class="single-timeline-horizontal"></span>
                      </div>
                      <div class="timeline">
                        <div class="timeline-content">
                          <h5>Get the App</h5>
                          <p class="description">
                            Download our app, available on both iOS and Android platforms, to begin your investment journey today. Enjoy a seamless experience and stay updated on your investments.
                          </p>
                        </div> 
                      </div> 
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="single-horizontal-timeline">
                      <div class="experience-time">
                        <h2>2 - Select Your Project</h2>
                        <h3>The Right Investment.</h3>
                      </div> 
                      <div class="timeline-horizontal-border">
                        <FaCircle className="icon" aria-hidden="true" />
                        <span class="single-timeline-horizontal"></span>
                      </div>
                      <div class="timeline">
                        <div class="timeline-content">
                          <h5>Choose Project</h5>
                          <p class="description">
                            Select the investment project that suits your goals and vision. Your financial future is in your hands. Make informed decisions and plan for your dreams.
                          </p>
                        </div> 
                      </div> 
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="single-horizontal-timeline">
                      <div class="experience-time">
                        <h2>3 - Invest Your Money</h2>
                        <h3>Secure Your Future.</h3>
                      </div> 
                      <div class="timeline-horizontal-border">
                        <FaCircle className="icon" aria-hidden="true" />
                        <span class="single-timeline-horizontal spacial-horizontal-line
                        "></span>
                      </div>
                      <div class="timeline">
                        <div class="timeline-content">
                          <h5>Invest Now</h5>
                          <p class="description">
                            Invest your money in the chosen project and take the first step towards a secure financial future. Build wealth, create opportunities, and achieve your financial goals.
                          </p>
                        </div> 
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </section>
    );
}