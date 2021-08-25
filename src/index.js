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
//
HelloWorld({ greeting: "hello" }, function (response) {
  console.log(response.farewell);
});
// For simple requests:
HelloWorld.addListener(
  function (request, sender, sendResponse) {
    if (sender.id === CoursesPage)
      return;  // don't allow this extension access
    else if (request.getTargetData)
      sendResponse({ targetData: Board });
    else if (request.activateLasers) {
      var success = Hi(`Everyone`);
      sendResponse({ activateLasers: success });
    }
  });

// For long-lived connections:
HelloWorld.addListener(function (port) {
  port.onMessage.addListener(function Hi() {
    // See other examples for sample onMessage handlers.
  });
});
//
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



