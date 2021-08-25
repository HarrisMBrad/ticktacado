/**
 * src/index.jsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// Import Board and Scoreboard views
import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'

import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'

function Hi() {
  return <p>These are the latest developments to date: 08/25/2021</p>

}

// Create App component
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
        </BrowserRouter>
      </div>
    )
  }
}

// Render the App component into DOM
/**This is a stack of rendering... */
ReactDOM.render(<Hi />, document.getElementById('app'))
ReactDOM.render(<App />, document.getElementById('root'))
