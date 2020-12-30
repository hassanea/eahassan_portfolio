import React from 'react';
import OU_icon from '../images/icons/OU-icon.png';


const Resume = (props) => {


    if(props.data){
      var skillmessage = props.data.skillmessage;
      var learnmessage = props.data.learnmessage;
      var education = props.data.education.map(function(education){
        return <div key={education.school}><h3><span className="mr"><img src={OU_icon} alt="Oakland University's Icon" title="Oakland University"/> </span>{education.school}</h3>
        <p className="info">{education.degree} <span className="mx"><i className="fas fa-graduation-cap" title="Graduated!"></i></span><em className="date">{education.graduated}</em></p>
        <p className="info"><span className="mx"><i className="fas fa-award" title="Honors"></i></span> {education.honors}</p> 
        <p>{education.description}</p></div>
      })
      var work = props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      
      var learn = props.data.learn.map(function(learn){
        
        return <li key={learn.tech}><span className={learn.className}></span><em>{learn.tech}</em></li>
      })
      
      
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>{props.eduTitle}</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>{props.workTitle}</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>{props.skillTitle}</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
                                                    
                                                   
     <div className="row skill">

         <div className="three columns header-col">
            <h1><span>{props.learnTitle}</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{learnmessage}
            </p>
                                                    
				<div>
				   <ol className="skills">
					  {learn}
					</ol>
				</div>
			</div>
      </div>
      
                                                    
   </section>
    );
}

export default Resume;
