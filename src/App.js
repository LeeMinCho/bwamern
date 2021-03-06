import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import 'assets/scss/style.scss';
import DetailPage from 'pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage}></Route>
        {/* <Route path="/example" component={Example}></Route> */}
      </Router>
    </div>
  );
}

export default App;
