import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';


const Portfolio = (props) => {
    
      const [toggler, setToggler] = useState(false);    

    if(props.data){
      var projects = props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage} key={projects.id}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                  </div>
                </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Creations.</h1>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
                {projects} 
            </div>
            <div className="btn-slideshow">
              <button onClick={() => setToggler(!toggler)}><span className="mr"><i className="far fa-images"></i></span>Click to view Slideshow</button>
            </div>
            <FsLightbox 
toggler={toggler} 
sources={[ 
 '../images/portfolio/Udemy-Omnifood-Proj.jpg',
 '../images/portfolio/Senior-Capstone-Proj-KPBT.jpg',       
 '../images/portfolio/RP-GIS-Todos-App.jpg',       
 '../images/portfolio/RP-GI-Site.jpg',       
 '../images/portfolio/SE-Proj-Benjamin.jpg',       
 '../images/portfolio/DB-Design-Proj-Music_DB.jpg',       
 '../images/portfolio/SysAdmin-Proj-FileShare.jpg',
'../images/portfolio/Info-Secure&Practice.Proj-cpabe.jpg',         
 '../images/portfolio/SH-site.jpg',       
 '../images/portfolio/HCI-Proj-Craigslist.jpg',       
 '../images/portfolio/Web-Systems-Proj-Univ-Rentals.jpg',       
 '../images/portfolio/Udacity-Neighborhood-Map-Proj.jpg',       
 '../images/portfolio/Udacity-MyReads-Proj.jpg'      
]}
initialAnimation="scale-in-long"
slideChangeAnimation="scale-in"
type="image"
captions={[ 
<> 
<div className="lightbox-caption">          
<h2>Omnifood Eats</h2>      
<p>Category:  Udemy - Course Project</p>
<p>Omnifood Eats is a fictional food delivery service website that offers healthy meals delivered to your door. Website was created utilizing HTML5, CSS3, and jQuery.</p>          
<p><a href="https://www.omnifood-eats.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>          
</>, 
<>
<div className="lightbox-caption">          
<h2>Kingpin Bowling Tracker</h2>
<p>Category:  College - Senior Capstone Project</p>
<p>Kingpin is a bowling tracker web application utilized by management of bowling centers and leagues. Application was devloped with the Django web framework, HTML5, Bootstrap, and jQuery.</p>          
<p><a href="https://github.com/hassanea/KPBT" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>          
</>,
<>  
<div className="lightbox-caption">             
<h2>Reroot Task Scheduler</h2>
<p>Category:  College - Internship project</p>
<p>Reroot Task Scheduler is CRUD (create-read-update-delete) application created to manage employee and volunteer tasks at several Reroot properties. Application was made with ReactJS, ExpressJS, NodeJS, MySQL, W3.CSS, and Material-UI.        
</p>          
<p><a href="https://www.reroot-task-scheduler.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>    
<div className="lightbox-caption">             
<h2>Reroot Pontiac's GI Site</h2>
<p>Category:  College - Internship project</p>
<p>Reroot Pontiac GI site is a website dedicated to green infrastructure in an urban setting. Site was created utilizing HTML5, Bootstrap, and jQuery.</p>          
<p><a href="http://rerootgi.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Benjamin</h2>
<p>Category:  College - Software Engineering Project</p>
<p>Benjamin is a personal budgeting web application developed to track personal expenses. Application was made with the Django web framework, HTML5, Bootstrap, and jQuery.</p>          
<p><a href="http://benjamin-expense.herokuapp.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Music DB</h2>
<p>Category:  College - Database Design and Implementation Project</p>
<p>MusicDB is a CRUD application that enables the user to input favorite <br/> music and rate their songs and albums as well as other user's picks. <br/> It was generated with HTML5, Bootstrap, jQuery, PHP, and MySQL.</p>            
<p><a href="https://ec2-18-221-229-213.us-east-2.compute.amazonaws.com/Music_DB_Final/home.php" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>FileShare</h2>
<p>Category:  College - System Administration Project</p>
<p>A simple file sharing tool made using HTML5, W3.CSS, and jQuery.</p>            
<p><a href="https://ec2-18-221-229-213.us-east-2.compute.amazonaws.com/Login_Final/index.php" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>CP-ABE Project</h2>
<p>Category:  College - Information Security & Practice</p>
<p>The Ciphertext Policy attribute-based encryption project executed a series of tests to determine the performance impact of varying attributes on a Linux system. Scripts were developed using the CPABE toolkit and Linux shell scripting.</p>            
<p><a href="https://github.com/hassanea/CP-ABE_Project" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,          
<>
<div className="lightbox-caption">             
<h2>Sacred Heart's site</h2>
<p>Category:  Work</p>
<p>A website developed for Sacred Heart Church that provides a functional visual layout, with improved usability, and accessibility. 
The site generated with HTML5, Bootstrap, CSS3, JavaScript, and jQuery.
</p>            
<p><a href="https://www.esacredheart.org" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Craigslist Redesign</h2>
<p>Category:  College - Human Computer Interaction (HCI) Project</p>
<p>Craigslist redesign project was a proposed user interface prototype revampment. <br/> Mockup was created in Balsamiq Mockups.</p>            
<p><a href="http://eahassan.me/images/portfolio/HCI-Proj-Craigslist.jpg" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>University Rentals</h2>
<p>Category:  College - Web Systems Project</p>
<p>University Rentals is a site containing apartment rental listings available for university students. 
Website was created using HTML5, Bootstrap, CSS3, jQuery, PHP, and MySQL.          
</p>            
<p><a href="https://ec2-18-221-229-213.us-east-2.compute.amazonaws.com/University_Rentals/" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Neighborhood Map</h2>
<p>Category:  Udacity - Course Project</p>
<p>Neighborhood Map is a project that provides a listing of museums and sightseeing locations in Christchurch, New Zealand. It is Google Maps integrated and utilizes ReactJS, Bootstrap, Reactstrap, CSS3, Google Maps API, and the FourSquare API. 
</p>            
<p><a href="http://neighbor-map.s3-website-us-east-1.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>MyReads</h2>
<p>Category:  Udacity - Course Project</p>
<p>MyReads is a webapp that allows a user to categorize their bookshelf. The application was created using ReactJS and CSS3.
</p>            
<p><a href="http://my-reads-app.s3-website-us-east-1.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" className="mr"></i> </span> Project URL </a></p>          
</div>
</>,          
]}
/>     
        
          </div>
      </div>
   </section>
    );
}

export default Portfolio;
