import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import SkipNav from './Components/SkipNav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: [],
      recipName: '',
      recipEmail: '',
      recipSubject: '',
      recipMessage: ''    
    };

    ReactGA.initialize('UA-177826213-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.handleChange = this.handleChange.bind(this);
    this.handleCaptchaChange = this.handleCaptchaChange.bind(this);
    this.handleEmailSent = this.handleEmailSent.bind(this);  
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
  
  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
  handleCaptchaChange = (value) => {
  console.log("Captcha value:", value);
}
  
  handleEmailSent = (event) => {
    
        event.preventDefault();
      
      if (this.state.recipName === '' && this.state.recipEmail === '' && this.state.recipSubject === '' && this.state.recipMessage === '') {
          console.log('All fields required!')
          alert('All fields are required!');
          return;
      }
    
     let data = {
      recipName: this.state.recipName,
      recipEmail: this.state.recipEmail,
      recipSubject: this.state.recipSubject,     
      recipMessage: this.state.recipMessage
    };
    console.log(data);
    
    
        fetch (`https://eah-portfolio-backend.herokuapp.com/sendEmail`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then((response) => {
        console.log(response.data);
        alert("E-Mail sent successfully!");
        window.location.reload();    
    })
    .catch((error) => console.log("E-Mail Failure - Error:", error));  
  }


  componentDidMount = () => {
    this.getResumeData();
  }

  render() {
      
      const { recipName, recipEmail, recipSubject, recipMessage } = this.state;
      
    return (
        
       <div className="App">
         <SkipNav title="Skip to main content"/>
         <main id="mainContent">
           <Header data={this.state.resumeData.main}/>
           <About data={this.state.resumeData.main} title="About Me"/>
           <Resume data={this.state.resumeData.resume} eduTitle="Education" workTitle="Work" skillTitle="Skills" learnTitle="Learning"/>
           <Portfolio data={this.state.resumeData.portfolio}/>
           <Contact data={this.state.resumeData.main} reconEndorData={this.state.resumeData.recommendEndorse} captchaChange={this.handleCaptchaChange} recipName={recipName} recipEmail={recipEmail} recipSubject={recipSubject} recipMessage={recipMessage} EmailSend={this.handleEmailSent} change={this.handleChange}/>
           <Footer data={this.state.resumeData.main}/>
         </main>
      </div> 
        
    );
  }
}

export default App;
