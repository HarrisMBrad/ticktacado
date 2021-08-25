/**
 * src/index.jsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import "./index.css";

// Import Board and Scoreboard views
import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'


import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'
import CoursesPage from './components/courses/CoursesPage';

const HelloWorld = () => <h1>`HelloWorld!`</h1>


function Hi() {
  console.log(`HelloWorld!`, HelloWorld, null);

}
Hi(HelloWorld);
// Create Apps component
class App extends React.Component {
  render() {
    return (
      <div className="root">
        <BrowserRouter>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
          <Route path="/courses" component={CoursesPage} />
          <div className="app"></div>
        </BrowserRouter>
      </div>
    )
  }
}

// Render the App component into DOM
/**This is a stack of rendering... */
ReactDOM.render(<App />, document.getElementById('root'));



