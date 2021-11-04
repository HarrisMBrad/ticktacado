/**
 * src/index.jsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
// Import Board and Scoreboard views
import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'
import { BrowserRouter, Route } from 'react-router-dom'
import CoursesPageB from './components/courses/CoursesPageB';
import "./index.css";
import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'

function Hi() {
  console.log(`Tic Tac Toe was in mind: patern to keep and build out as needed for mor routes to pages to come`, null);
}
Hi();
// Create Apps component
class App extends React.Component {
  render() {
    return (
      <div className="root">
        <BrowserRouter>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
          <Route path="/courses" component={CoursesPageB} />
          <div className="app"></div>
        </BrowserRouter>
      </div>
    )
  }
}

// Render the App component into DOM
/**This is a stack of rendering... */
ReactDOM.render(<App />, document.getElementById('root'));



