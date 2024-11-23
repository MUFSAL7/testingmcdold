import React from 'react'
import imageOne from '../assets/cimage1.png'
import imageTwo from '../assets/cimage2.png'
import imageThree from '../assets/cimage3.png'
import imageFour from '../assets/cimage4.png'
import imageFive from '../assets/cimage5.png'
import imageSix from '../assets/cimage6.png'
import imageSeven from '../assets/cimage7.png'
import imageEight from '../assets/cimage8.png'
import imageNine from '../assets/cimage9.png'
import imageTen from '../assets/cimage10.png'
import Alert from 'react-bootstrap/Alert';


function Content() {
  return (
    <>
      <div className='container d-flex flex-column mt-5 cntr1-content'>
        <div className="row  mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '380px' }} src={imageOne} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column' id='title'>McCafé® x Doodles® <span className='ms-4'>holiday cups</span> </h3>

            </div>
            <div className='detailsOfPair-details' id='discription'>
              <p>Let the festivities begin with 3 new designs—pair
                 your <Alert.Link href="#">hot McCafé drink.</Alert.Link> Order it in the app and sip into the magical world of Doodles</p>

                 <span>©2024 Doodles, LLC. DOODLES ® is a registered trademark of Doodles, LLC. All rights reserved.</span>
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Order in the app</button>

            </div>
          </div>
        </div>



        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '350px' }} src={imageTwo} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column' id='title-2' style={{marginRight:'300px'}}>Omg 10 for 1?  </h3>

            </div>
            <div className='detailsOfPair-details' id='discription'>
              <p>10 Chicken McNuggets® for $1, that is. <b>Get ‘em only in the app</b>, once a week.* Just place a mobile order or provide the 4-digit deal code at the restaurant.</p>

                 <span>*Valid 1x/week thru 12/2/2024 at participating McDonald's. Excludes delivery. McDonald's app download and registration required. Must opt in to Rewards.</span>
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Use Deal in the App</button>

            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '350px' }} src={imageThree} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title me-4'>
            <h3 className='one  d-flex flex-column' id='title'>Give thanks to the . <span className='ms-4'>Meal Deal</span> </h3>

            </div>
            <div className='detailsOfPair-details mt-3 ' id='discription' style={{marginTop:'-1px'}}>
              <p style={{letterSpacing:'0.5'}}>A 4 pc. McNuggets®, small fries & drink a McChicken® or McDouble® starts at $5.* So yeah, shoutout to the Meal Deal.</p>

                 <span>*Valid 1x/week thru 12/2/2024 at participating McDonald's. Excludes delivery. McDonald's app download and registration required. Must opt in to Rewards.</span>
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Use Deal in the App</button>

            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '330px' }} src={imageFour} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column' id='title' >Meet the new Dulce de <span className='ms-3'>Leche Frappé</span> </h3>

            </div>
            <div className='detailsOfPair-details' id='discription'>
              <p>New flavor, new you? Try the Dulce de Leche Frappé    —it's sweet, decadent and ready to make your day.*</p>

                 <span>*At participating McDonald's for a limited time.</span>
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Order in the app</button>

            </div>
          </div>
        </div>
        
        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '330px' }} src={imageFive} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column ' id='title-five' style={{marginRight:'250px'}}>50 years of Ronald <span className='d-flex flex-row me-1 ms-3'>McDonald house</span><span className='ms-3'> Charities®</span></h3>

            </div>
            <div className='detailsOfPair-details' id='discription'>
              <p>McDonald’s is proud to be a Founding and Forever Partner of the Ronald McDonald House Charities, but it’s difficult to make a difference without your efforts. Thank you for impacting the lives of families when they need it most—in 2023, your donations helped raise over $200 million which provided over 2 million overnight stays.</p>

              <p>Continue leaving your mark with a gift to RMHC by selecting National RMHC Donation from the menu in the app or rounding up your order at the counter and Drive Thru.</p>

            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Donate Now</button>

            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '350px' }} src={imageSix} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column' id='title-five' style={{marginRight:'200px'}}>Free large Fries w/ $1 <span className='ms-4'>min. purchase</span> </h3>

            </div>
            <div className='detailsOfPair-details mt-4' id='discription' style={{marginTop:'-5px'}}>
              <p>Free large Fries to keep you company. Download the app and get 'em with your first purchase of $1+.* Every $1 you spend earns 100 points, redeemable for free food.</p>

                 <span style={{fontSize:'9px'}}>*Offer valid 1x thru the last day of month for first time app users at participating McDonald’s. May take up to 48 hours to appear in your deals. Must opt in to Rewards. Excludes tax.</span>
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Get Free Large Fries in the App</button>

            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '340px' }} src={imageSeven} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column' id='title'>‘More Black Designers’<span className='me-4 ms-4' >is the New Black</span> </h3>

            </div>
            <div className='detailsOfPair-details' id='discription'>
              <p>The 2024 McDonald’s Change of Fashion Program is focused on driving change when it comes to Black representation in fashion. The industry frequently pulls inspiration from Black culture, but doesn’t always embrace Black creatives. After all, only 7.3% of American fashion designers are Black.*</p>

              <p>So, we’re pairing five, rising Black designers with five fashion insiders for career-changing mentorships. The program will also provide access and resources, and give their brands a chance to shine.</p>

                 <span>*Per Zippia.com as of 2021.</span>
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Follow on Instagram @wearegolden</button>

            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '360px' }} src={imageEight} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column' id='title'>“McD’s Best Burgers <span className='me-1 ms-4'>Ever.” - Hamburglar</span> </h3>

            </div>
            <div className='detailsOfPair-details' id='discription'>
              <p>You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet. Ask the Hamburglar, he can’t keep his hands off of ‘em. Robble, robble.</p>

                 <span>Get one today in the app for pickup or McDelivery®.^</span>
                 <br />

                 <span className='' style={{fontSize:'9px'}}>*Comparison of McDonald’s classic burgers to prior burgers.
                 ^At participating McDonald’s. McDelivery prices may be higher than at restaurants. Delivery/other fees may apply.</span>

            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Order in the App</button>

            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '360px' }} src={imageNine} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column ' id='title-five' style={{marginRight:'250px'}}>New: Faster Faves, <span className='me-2 ms-4'>Only in the App</span> </h3>

            </div>
            <div className='detailsOfPair-details' id='discription'>
              <p>We now prep when you’re on the way if you choose Curbside, Front Counter—or dine in for Table Service. Just order ahead in the app to save time. Because waiting in line for faves? Not our thing either.*</p>

                 <span>*At participating McDonald’s.</span>
                 
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Order in the App</button>

            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5" id='content'>
          <div className='col-md-7' id='img'><img style={{ width: '100%', height: '350px' }} src={imageTen} alt="" /></div>
          <div className='col-md-5 detailsOfPair mt-3'>
            <div className='detailsOfPair-title '>
              <h3 className='one  d-flex flex-column' id='title-five' style={{marginRight:'280px'}}>Deals for Days <span className=''></span> </h3>

            </div>
            <div className='detailsOfPair-details mt-5 mb-5' id='discription'>
              <p>Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.</p>

                 <span>*Mobile Order & Pay at participating McDonald’s.</span>
            </div>
            <div className='more'>
            <button className='button btn btn-warning'>Get App Deals</button>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Content