import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    // code with JSX
    <div className="App">
      <h1>Welcome</h1>
      <Header />
    </div>
    

  // code without JSX
  // React.createElement("div", {className: "App"},
  // React.createElement("h1", null, "Natasha Romanoff"))


  );
}

export default App;
