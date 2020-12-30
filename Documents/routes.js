import React from 'react';

import {Route, Switch} from 'react-router-dom';
import SkipNav from './Components/SkipNav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import ImageLightBox from './Components/ImageLightBox';
import notFound from './Components/notFound';
import App from "./App";

export default function Router() {
    
	return (
    
	<Switch>
		<Route exact path='/'/>
        <Route path="*" component={notFound} status={404}/>
	</Switch>
    );
}
