import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import React from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import EditContact from './components/contacts/EditContact';

import { Provider } from 'react-redux';
import store from './store';

// import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <h1>My React App Component</h1> */}
            <Header brand="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
