import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import $ from 'jquery';
import './App.css';
import SkipNav from './Components/SkipNav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import ImageLightBox from './Components/ImageLightBox';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: []
    };

    ReactGA.initialize('UA-177826213-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

  }

  getResumeData = () => {
   fetch('/resumeData.json')
   .then(response => {
    return response.json()
   })
   .then(data => {
     this.setState({
       resumeData: data
     });
     console.log(data)
   })
   .catch(error => {
     console.log(error)
     alert(`Unable to retrieve data! See JS console for details. Error:${error}`)
   })
   }

  componentDidMount = () => {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <SkipNav title="Skip to main content" aria-label="Skip to main content"/>
        <main id="mainContent">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <ImageLightBox data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/> 
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
        </main>
      </div>
    );
  }
}

export default App;
