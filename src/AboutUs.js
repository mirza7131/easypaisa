import React from 'react';
import './AboutUs.css';



const AboutUs = () => {

    return(
        <div>
            
          <div className="image"> 
         
              <img src="/img/about.jpg" alt="imag"></img>
              <a name="top"></a>
          </div >
          
          <div className="about">
          
          <h1 onFocus>About Us</h1>
          
          <p>   Easypaisa, Pakistan’s first mobile banking platform launched in 2009, is the only GSMA mobile money certified service in the country. Initially launched as a money transfer service, Easypaisa empowers underserved masses by bringing convenience and freedom to their lives, and has today become the category name for money transfers, synonymous with convenience and reliability.</p>
    <p>     With the largest footprint in the country, constant innovation, an ever-growing range of ground-breaking digital solutions and the Easypaisa App, Easypaisa is turning into a complete lifestyle platform which enables people across Pakistan to truly adopt the digital way of life.</p>
    <p>     Easypaisa is part of Telenor Microfinance Bank and operates as a branchless banking service. Easypaisa is driven by the bank’s vision and mission of transforming the financial landscape of the country and providing instant access to convenient digital financial services.</p>
    <p> To read more about Telenor Microfinance Bank, please visit  www.telenorbank.pk</p>
    
    </div>
        </div>
    )
}


export default AboutUs;