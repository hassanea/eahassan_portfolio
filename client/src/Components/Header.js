import React from 'react';
import loadable from '@loadable/component';
const Nav = loadable(() => import('./Nav'));


const Header = (props) => {

    if(props.data){
      var description= props.data.description;
      var networks= props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} id={network.id} aria-label={network.name} rel="noopener noreferrer" target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <Nav/>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline"><span className="typed"></span></h1>
            <p className="lead">{description}.</p> 
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about" title="To About section" aria-label="Take to About section"><i className="icon-down-circle"></i></a>
      </p>
   </header>
    );
  
}

export default Header;
