import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./common/Header";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PageFound from './PageFound';
import CoursesPage from './courses/CoursesPage';

function App() {
    console.log("What is this?")
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" components={HomePage} />
                <Route path="/about" components={AboutPage} />
                <Route path="/courses" components={CoursesPage} />
                <Route component={PageFound} />
            </Switch>
        </div>
    )
}

export default App;