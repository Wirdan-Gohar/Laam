import React, { Component } from 'react'
// import css  from './newsletter.module.css';

const Newsletter = () => {
    return (
        <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        
        <div class="container footer_text">
        <div class="row footer_row news-row">
            <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 ">
                <div class="logo-social-area">
                <span><img alt="LAAM " class="footer-logo" itemprop="logo" src="./pernia.png" width={150}/></span>
                <div class="footer-newletter-wrapper" style={{display:'inlne',float:'right',marginLeft:'-20px'}}>
                    <h2> Hey, wait...</h2>
                    <h3>Subscribe to our newsletter!</h3>
                    <p>Stay up to date with the latest in fashion
                        trends and LAAM exclusive offers.
                    </p>
                </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 inner-new-row">
                <div class="news-area">
                <div class="email_box">
                    <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form" data-omnisend-captured-form="true">
                        <input type="hidden" name="form_type" value="customer"/><input type="hidden" name="utf8" value="✓"/>
                    
                    
                    <input name="contact[tags]" type="hidden" value="newsletter"/>
                    <div class="news-field-area"> 
                    <input type="email" value="" placeholder="Email address" name="contact[email]" id="Email" class="txtbox" aria-label="email@example.com" autocorrect="off" autocapitalize="off"/>
                        <button class="btn btn-link" type="submit" value="Subscribe" name="commit" id="Subscribe">
                            <img src="https://cdn.shopify.com/s/files/1/2337/7003/files/New_Project_27.png?v=1628161930" alt="IMG"/></button>
                    </div>
                    
                    </form>
                </div>
                <p>By signing up, you agree to LAAM’s <a href="#">Privacy Policy</a> and <a href="#">Terms &amp; Conditions</a>.</p>
                </div>
            </div>
        </div>
        </div>
        
        {/* <div className="container">
            <div className="row">
                <div className="col-6">
                    Hello
                </div>
                <div className="col-6">
                    Wirdan
                </div>
            </div>
        </div> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </>
      );
}
export default Newsletter;
