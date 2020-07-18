import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSpinner, faMobile, faMobileAlt, faMoneyCheck, faMoneyBillWave, faHandSparkles, faSatellite } from '@fortawesome/free-solid-svg-icons';
import CarouselCon from './CarouselCon'


const Home = () => {
    return(
        <div >
            <CarouselCon/>
            <h1 className="contain">
Download the Easypaisa App to experience ease
through innovative, simple & seamless payments</h1>
        <div className="container">
        <div className="row img">
        

        <img
          className="col-md-4 col-lg-4"
          src="/img/a1.png"
          alt="First slide"
        />
        
        
        <img
          className="col-md-4 col-lg-4"
          src="/img/a2.png"
          alt="First slide"
        />
        
        <img
          className="col-md-4 col-lg-4"
          src="/img/a3.png"
          alt="First slide"
        />
            
            </div>
        </div> 
        
            <h1 className="con">What makes us easy</h1>
            <div className="container">
                <div className="row pad">
                   
                    <div className=" sec">
                             <h2>You don't just easily pay, You get value right away</h2>
                            <p>Literally, discounts and cashbacks on every payment that you make... all year round</p>
                            <FontAwesomeIcon icon={faMoneyBillWave} size="3x" transform="down-9" />
                    </div>
                    <div className=" sec">
                        <h2>Any payment you want to make, few seconds is all it takes</h2>
                        <p>Experience wide range of payment features, experience on easy life</p>
                        <FontAwesomeIcon icon={faMoneyCheck} size="3x" />
                    </div>
                    <div className=" sec">
                        <h2>You don't just easily pay, You get value right away</h2>
                            <p>Literally, discounts and cashbacks on every payment that you make... all year round</p>
                            <FontAwesomeIcon icon={faMobileAlt} size="4x" transform="down-6" />
                    </div>
                    <div className=" sec">
                        <h2>Any payment you want to make, few seconds is all it takes</h2>
                        <p>Experience wide range of payment features, experience on easy life</p>
                        <FontAwesomeIcon icon={faMobile} size="4x" transform="up-3" />
                    </div>
                    
                </div>
            </div>
        <section className="container section">
            <h1><FontAwesomeIcon icon={faSatellite} size="md" fixedWidth  /> Promotions</h1>
            <div className="promm">
            <div className="prom1">
                <h3>Mobile load</h3>

            </div>
            
            <div className="prom2">
            <h3>Mobile bundle</h3>

            </div>
            
            <div className="prom3">
            <h3>Mobile transfer</h3>

            </div>
            </div>

        </section>


            </div>
    )
}

export default Home;