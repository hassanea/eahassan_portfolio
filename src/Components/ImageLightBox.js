import React, { useState } from 'react'; 
import FsLightbox from 'fslightbox-react';



function ImageLightBox() {
    
    const mr = {
      marginRight: '8px'  
    };
    
//        if(this.props.data){
//      var projects = this.props.data.projects.map(function(projects){
//        var projectImage = 'images/portfolio/'+projects.image;
//        return <div key={projects.title} className="columns portfolio-item">
//           <div className="item-wrap">
//            <a href={projects.url} title={projects.title}>
//               <img alt={projects.title} src={projectImage} />
//               <div className="overlay">
//                  <div className="portfolio-item-meta">
//                 <h5>{projects.title}</h5>
//                     <p>{projects.category}</p>
//                  </div>
//                </div>
//              <div className="link-icon"><i className="fa fa-link"></i></div>
//            </a>
//          </div>
//        </div>
//      })
//    }
    
    const [toggler, setToggler] = useState(false);

    
  return (
    <div>
            
      <img src="#" onClick={() => setToggler(!toggler)} alt="Toggle Lightbox"/> 
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                
            </div>
          </div>
      </div>
   </section>
<FsLightbox 
toggler={toggler} 
sources={[ 
'images/portfolio/Udacity-Neighborhood-Map-Proj.jpg', 
'images/portfolio/RerootPontiac-GIS-Todos-App.jpg', 
'images/portfolio/Senior-Capstone-Proj-KPBT.jpg', 
'images/portfolio/DB-Design-Proj-Music_DB.jpg',
'images/portfolio/SysAdmin-Proj-FileShare.jpg',         
'images/portfolio/placeholder.jpg',         
'images/portfolio/HCI-Proj-Craigslist.jpg',         
'images/portfolio/Web-Systems-Proj-Univ-Rentals.jpg',                 
'images/portfolio/Udacity-MyReads-Proj.jpg'         
]}
initialAnimation="scale-in-long" 
slideChangeAnimation="scale-in"
captions={[ 
<> 
<h2>Neighborhood Map</h2>      
<div><p>Category:  Udacity Nanodegree program project</p> <br/> <a href="http://neighbor-map.s3-website-us-east-1.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link fa-2x" style={mr}></i> </span> Project URL </a></div> 
</>, 
<>          
<h2>Reroot Task Scheduler</h2>
<div><p>Category:  College Internship project</p> <br/> <a href="http://gis-todos.s3-website.us-east-2.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link fa-2x" style={mr}></i> </span> Project URL </a></div>
</>
]}
/> 
      
    </div>
  );
}

export default ImageLightBox;
