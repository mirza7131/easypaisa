import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
     Switch,
    Route,
    // useParams,
  } from "react-router-dom";
//   import Home from './Home';
 //  import AboutUs from './AboutUs';
//   import ContactUs from './ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faInstagram, faTwitch, faTwitter, faYoutubeSquare, faYoutube, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <Router>
            <ul>
                <h>About easpaisa</h>
                <li><Link href="/about-us">About Us</Link></li> 
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
            </ul>
            <ul>
                <h>Partner with easypaisa</h>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                
            </ul>
            <ul>
                <h>Any Quation</h>                
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                
            </ul>
            <div className="iconn">
                <ol>
            <li><FontAwesomeIcon icon={faFacebook}   size="3x" fixedWidth  /></li>
            <li><FontAwesomeIcon icon={faYoutube}  size="3x" fixedWidth  /></li>
            <li><FontAwesomeIcon icon={faTwitter}  size="3x" fixedWidth /></li>
            <li><FontAwesomeIcon icon={faLinkedinIn} size="3x" fixedWidth  /></li>
            <li><FontAwesomeIcon icon={faInstagram}  size="3x" fixedWidth /></li>
            </ol>
            </div>
           
            <Switch>
                                {/* <Route exact path="/">
                                    <Home />
                                </Route> */}
                                {/* <Route path="/about-us">
                                    <AboutUs />
                                </Route> */}
                                {/* <Route path="/contact-us">
                                    <ContactUs />
                                </Route> */}
                            </Switch>
            </Router>
            </div>
            </div>
            
           
        <div className="under" >
        <div className="cont">
         <p> Copyright® 2019 Easypaisa,<br></br>
          Plot 28-29, Mauve Area, G-10/1, Islamabad, Pakistan Phone: 042 111 003737 Email: Info@Telenorbank.pk  </p>
        </div>
        </div>
        </div>
    )
}


export default Footer;