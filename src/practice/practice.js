import './css/App.css';
import React from 'react';
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
    /* 
      Here is the part where you declare variable
      or put your javascript code to process data
      before using it in render
    */

    let name = "Ana";
    let greet = true; 
    // if set to false, greet element wont be rendered

    /* 
      We can also put the condition here and assign JSX to a variable
    */

    let showMath = true;
    let math;
    if (showMath) {
      math = <h3>2 + 2 = {2 + 2}</h3>;
    } else {
      math = null;
    }
    // After that, we can put the variable name in render function.

    /* 
      This is another way to code react component 
      using React.createElement
    */
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'My React App Component'
    //   )
    // );

    /* 
      This is a normal way to use JSX
    */
    return (
      <div className="App">
        <h1>My React App Component</h1>
        
        {/* 
          This is where we use curly braces when using variable in JSX. Note that
          arithmetic could also be perform in the curly braces. To make it short,
          any javascript expression can be put inside the curly braces.
        */}
        <h3>Hello {name}</h3>
        <h3>1 + 1 = {1 + 1}</h3>
        
        {/* 
          Here we are using ternary operator to determine whether to display the
          element or not.
        */}
        {greet ? <h3>How are you?</h3> : null}

        {/* 
          Here are where the variable containing the JSX code will be called
        */}
        {math}
      </div>
    );
  }
}

// export default App;
