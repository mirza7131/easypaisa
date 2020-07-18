import React from 'react'
import './AboutUs.css'
import bg from './img/bg.jpg'


const ContactUs = () => {

    return(
        <div>
            <div className="image"> 
         
         <img src={bg} alt="imag"></img>
         <a name="top"></a>
     </div >

           <div className="about">
         
           <h1>Call us</h1>
<p> Helpline 111-003-737 (with area code)
<br></br>
For Telenor users 3737
<br></br>
For merchants 345-545 (accessible from Telenor numbers)
</p>
<h1> Write to us</h1>

For general queries info@telenorbank.pk
<br></br>
For media related queries press.center@telenorbank.pk
<br></br>
For complaints complaints@telenorbank.pk

<h1> Office addresses </h1>
<h3> Head Office </h3>
<p> 19-C Main Khayaban-e-Nishat, Itehad Commercial Area, DHA, Phase 6, Karachi.</p>

<h3> Regional Office Islamabad </h3>
<p> Plot 28-29, Mauve Area, G-10/1, Islamabad.</p>

<h3> Regional Office Lahore </h3>
<p> 3rd Floor, Telenor Regional Headquarters, AAA Complex, 35-B, Sector XX, Phase-III, Main Khayaban-e-Iqbal, DHA, Lahore, Pakistan.
</p>
           </div>

        </div>
    )
}


export default ContactUs;