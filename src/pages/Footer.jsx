import React from 'react'
import playstore from '../assets/playstore.png'
import appstore from '../assets/app_store.png'
import logo from '../assets/logo.jpg';




function Footer() {
  return (
    
    <>
        <div className="container mb-5 px-5 d-flex flex-wrap flex-row mt-5 " id='footer-container' style={{Width:'100%'}}>
          <div className="row   justify-content-between">
           <div className='col-md-6 d-flex'>
           <div className="about   " style={{paddingRight:'100px' , marginRight:'100px'}}>
              <h4 className='me-5' >AboutUs</h4>
             <div className='mt-3 ms-2 d-flex flex-column'>
                <span>AboutUs  </span>
                <span>Leadership Team</span>
                <span>Values In Action</span>
                <span>Franchising info</span>
                <span>Recalls & Alerts</span>
                <span>Real Estate</span>
                <span>Accessibility</span>
                <span>Investor Relations</span>
             </div>
            </div>

            <div className="services  " style={{paddingRight:'100px' , marginRight:'100px'}}>
              <h4 className='me-5'> Services</h4>
             <div className='mt-3 ms-3 d-flex flex-column'>
                <span>ServicesOverview</span>
                <span>Delivery Partners</span>
                <span>Wi-Fi</span>
                <span>PlayPlaces&Parties</span>
                <span>Mobile Order&Pay</span>
                <span>Trending Now</span>
                <span>McDonald’sMerchandise</span>
                <span>Family Fun Hub</span>
             </div>
            </div>
           </div>

            <div className='col-md-6 d-flex'>
            <div className="community  ms-4" style={{paddingRight:'100px' , marginRight:'100px'}}>
              <h4>Community</h4>
             <div className='d-flex flex-column '>
                <span>Overview</span>
                <span>Now Serving</span>
                <span>Hispanic Students</span>
                <span>McDonald’s Asian Pacific</span>
                <span>American</span>
                <span>Golden</span>
                <span>Charities®</span>
             </div>
            </div>

            <div className="contact-us  ms-5" style={{paddingRight:'70px' , marginRight:'150px'}}>
              <h4>ContactUs</h4>
              <div className='d-flex flex-column'>
                <span>Gift Card FAQs</span>
                <span>Donations</span>
                <span>Contact Us Overview</span>
                <span>Employment</span>
                <span>Customer Feedback</span>
              </div>
            </div>

                   

            </div>
          </div>

        </div>
        <div className='container d-flex flex-row gap-4 me-auto justify-content-between mt-3 mb-5' id='second-footer'>

           <div className='d-flex  gap-4' id='icon'>
              <p className='border border-rounded px-1 '   style={{borderRadius:'50%'}}><i class="fa-brands fa-facebook"></i></p>
              <p className='border border-rounded px-1 '   style={{borderRadius:'50%'}}><i class="fa-brands fa-x-twitter"></i></p>
              <p className='border border-rounded px-1 '   style={{borderRadius:'50%'}}><i class="fa-brands fa-youtube"></i></p>
              <p className='border border-rounded px-1 '   style={{borderRadius:'50%'}}><i class="fa-brands fa-instagram"></i></p>
              <p className='border border-rounded px-2 '   style={{borderRadius:'50%'}}><i class="fa-brands fa-tumblr"></i></p>
              <p className='border border-rounded px-1 '   style={{borderRadius:'50%'}}><i class="fa-brands fa-spotify"></i></p>
  
           </div>
           <div className='' >
            <img src={appstore} alt="" />
            <img src={playstore} alt="" />
           </div>
        </div> 
          {/* line */}
            <div className='container d-flex'><div className='w-100 border'></div></div>

            <div className='container d-flex flex-column text-align-center ' >
              <div className='d-flex flex-row ms-auto me-auto' id='thid-footer'>
                <span id='footer-third'>Privacy (Updated)</span>
                <span id='footer-third' className='me-3 ms-2'>California Privacy Notice</span>
                <span id='footer-third'>Consumer Health Data</span>
                <span id='footer-third'>Terms & Conditions</span>
                <div  id='footer-cpoyright'><img style={{width:'25px'}} src={logo} alt="" /></div>
                <span id='footer-cpoyright' className=' ms-5 me-5' style={{textAlign:'justify',lineBreak:'auto'}}>All rights reserved &#xA9; 2024 MyCompany.</span>
              </div>
              <div className='d-flex flex-row  me-auto ms-auto' id='fourth-footer'>

                <span id='footer-fourth' style={{}}>Accessibility</span>
                <span id='footer-fourth' className='px-auto ms-5 me-5' ><p>Do Not Sell or Share My Personal Information</p></span>
                <span id='footer-fourth' className='ms-3'>Cookie Settings</span>

              </div>
            </div>

    </>
  )
}

export default Footer