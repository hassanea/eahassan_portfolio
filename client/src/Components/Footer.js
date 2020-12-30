import React from 'react';

const Footer = (props) => {
 
    if(props.data){
      var networks= props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} id={network.id} aria-label={network.name}><i className={network.className}></i></a></li>
      })
    }
      
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Evan Hassan</li>
              <li>Design by: <a title="Ehmario" href="https://www.eahassan.com/" rel="noopener noreferrer" target="_blank"><span className="mr"><i className="fas fa-music"></i></span>Ehmario</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" aria-label="Back to top of Page" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
}

export default Footer;
