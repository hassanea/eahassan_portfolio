import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";



const Contact = (props) => {
          

    if(props.data) {
      var name = props.data.name;
      var cellphone= props.data.cellphone;   
      var email = props.data.email;
      var mailToEmail = ' ' + props.data.mail_to_email + ' ';
      var message = props.data.contactmessage;            
    }
      
      
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <form onSubmit={props.EmailSend}>
					<fieldset>
                        <legend>Contact Info:</legend>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" size="35" id="contactName" name="recipName" onChange={props.change} value={props.recipName} placeholder="Enter your Name" aria-label="Name"/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="email" size="35" id="contactEmail" name="recipEmail" onChange={props.change} value={props.recipEmail} placeholder="Enter your E-Mail" aria-label="E-Mail"/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
						   <input type="text" size="35" id="contactSubject" name="recipSubject" onChange={props.change} value={props.recipSubject} placeholder="Enter the Subject" aria-label="Subject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="recipMessage" placeholder="Enter your Message" aria-label="Message" onChange={props.change} value={props.recipMessage}></textarea>
                  </div>
        
                  <div>
                 
                  <div>
                   <ReCAPTCHA
                    sitekey="6Ld-q8oZAAAAAKJGzR4rJKvCYkF3S9g-t1VYuA1p"
                    className="captcha"
                    onChange={props.captchaChange}
                    theme="dark" />
                   <p></p>
                  </div>
        
                     <button type="submit" className="submit" title="Submit" aria-label="Submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Reach Me</h4>
					   <p className="address">
						   {name}<br />
                           <a href={mailToEmail}>{email}</a><br />
						   <span>{cellphone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Recommended sites & endorsements</h4>
                  <ul id="recommend">
                     <li>
                        <span>
                        <div><span className="mr"><i className="fas fa-lock"></i> - ProtonMail</span></div>
                        
                        <a href="https://protonmail.com" title="ProtonMail" rel="noopener noreferrer" target="_blank" className="widget-link">Check out ProtonMail here!</a>
                        </span>
                     </li>
        
                     <li>
                        <span>
                        <div><span className="mr"><i className="fas fa-road"></i> - Tutanota</span></div>
                        
                        <a href="https://tutanota.com" title="Tutanota" rel="noopener noreferrer" target="_blank" className="widget-link">Check out Tutanota here!</a>
                        </span>
                     </li>
        
                     <li>
                        <span>
                        <div><span className="mr">Free Software Foundation (FSF)</span></div>
                        
                        <a href="https://www.fsf.org" title="FSF" rel="noopener noreferrer" target="_blank" className="widget-link">Check out FSF here!</a>
                        </span>
                     </li>
      
                     <li>
                        <span>
                        <div><span className="mr">ExpressVPN</span></div>
                        
                        <a href="https://www.expressvpn.com" title="ExpressVPN" rel="noopener noreferrer" target="_blank" className="widget-link">Check out ExpressVPN here!</a>
                        </span>
                     </li>
      
                     <li>
                        <span>
                        <div><span className="mr">OpenVPN</span></div>
                        
                        <a href="https://openvpn.net" title="OpenVPN" rel="noopener noreferrer" target="_blank" className="widget-link">Check out OpenVPN here!</a>
                        </span>
                     </li>
      
                    <li>
                        <span>
                        <div><span className="mr">Udemy</span></div>
                        
                        <a href="https://www.udemy.com" title="Udemy" rel="noopener noreferrer" target="_blank" className="widget-link">Check out Udemy here!</a>
                        </span>
                     </li>
      
                     <li>
                        <span>
                        <div><span className="mr">Medium</span></div>
                        
                        <a href="https://medium.com" title="Medium" rel="noopener noreferrer" target="_blank" className="widget-link">Check out Medium here!</a>
                        </span>
                     </li>
      
                    <li>
                        <span>
                        <div><span className="mr">It's FOSS</span></div>
                        
                        <a href="https://itsfoss.com" title="It's FOSS" rel="noopener noreferrer" target="_blank" className="widget-link">Check out It's FOSS here!</a>
                        </span>
                     </li>
    
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
