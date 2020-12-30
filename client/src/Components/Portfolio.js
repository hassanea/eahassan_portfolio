import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';


const Portfolio = (props) => {
    
      const [toggler, setToggler] = useState(false);
      const mr = {
      marginRight: '8px'  
    };
    
    const center = {
      textAlign: 'center'  
    };
    

    if(props.data){
      var projects = props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage} key={projects.id}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5 style={center}>{projects.title}</h5>
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
customToolbarButtons={[ 
{ 
viewBox: '0 0 96.124 96.123', 
d: 'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z',
width: '17px', 
height: '17px', 
title: 'Facebook', 
onClick: () => console.log('Facebook button clicked!') 
} 
]} 
initialAnimation="scale-in-long"
slideChangeAnimation="scale-in"
type="image"
captions={[ 
<> 
<div className="lightbox-caption">          
<h2>Omnifood Eats</h2>      
<p>Category:  Udemy - Course Project</p>
<p><a href="https://www.omnifood-eats.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>          
</>, 
<>
<div className="lightbox-caption">          
<h2>Kingpin Bowling Tracker</h2>
<p>Category:  College - Senior Capstone Project</p>
<p><a href="https://github.com/hassanea/KPBT" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>          
</>,
<>  
<div className="lightbox-caption">             
<h2>Reroot Task Scheduler</h2>
<p>Category:  College - Internship project</p>
<p><a href="https://www.reroot-task-scheduler.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>    
<div className="lightbox-caption">             
<h2>Reroot Pontiac's GI Site</h2>
<p>Category:  College - Internship project</p>
<p><a href="http://rerootgi.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Benjamin</h2>
<p>Category:  College - Software Engineering Project</p>
<p><a href="http://benjamin-expense.herokuapp.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Music DB</h2>
<p>Category:  College - Database Design and Implementation Project</p>
<p><a href="https://ec2-18-221-229-213.us-east-2.compute.amazonaws.com/Music_DB_Final/home.php" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>FileShare</h2>
<p>Category:  College - System Administration Project</p>
<p><a href="https://ec2-18-221-229-213.us-east-2.compute.amazonaws.com/Login_Final/index.php" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>CP-ABE Project</h2>
<p>Category:  College - Information Security & Practice</p>
<p><a href="https://github.com/hassanea/CP-ABE_Project" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,          
<>
<div className="lightbox-caption">             
<h2>Sacred Heart's site</h2>
<p>Category:  Work</p>
<p><a href="https://www.esacredheart.org" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Craigslist Redesign</h2>
<p>Category:  College - Human Computer Interaction (HCI) Project</p>
<p><a href="http://localhost:8000/images/portfolio/HCI-Proj-Craigslist.jpg" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>University Retals</h2>
<p>Category:  College - Web Systems Project</p>
<p><a href="https://ec2-18-221-229-213.us-east-2.compute.amazonaws.com/University_Rentals/" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>Neighborhood Map</h2>
<p>Category:  Udacity - Course Project</p>
<p><a href="http://neighbor-map.s3-website-us-east-1.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
</div>
</>,
<>
<div className="lightbox-caption">             
<h2>MyReads</h2>
<p>Category:  Udacity - Course Project</p>
<p><a href="http://my-reads-app.s3-website-us-east-1.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link" style={mr}></i> </span> Project URL </a></p>          
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
