import React from 'react';

const About = (props) => {
  
    if(props.data){
      var name = props.data.name;
      var profilepic= "images/"+props.data.image;
      var bio = props.data.bio;        
      var cellphone = props.data.cellphone;  
      var email = props.data.email;
      var mail_to_email = props.data.mail_to_email;   
      var resumeDownload = props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img src={profilepic} className="profile-pic" alt="Evan Hassan's Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>{props.title}</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
				     <span>{name}</span><br />
                     <span>{cellphone}</span><br />
                     <span><a href={mail_to_email}>{email}</a></span> <br />
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" title="Download resumé" rel="noopener noreferrer" target="_blank"><span className="mr"><i className="fa fa-download"></i></span>Download Resumé</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  
}

export default About;
