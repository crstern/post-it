import React from 'react';
import './App.css';
import Header from './components/header'

const list = [
  {option: 'home'},
  {option: 'about us'},
  {option: 'log in'},
  {option: 'sign up'},
  {option: 'contact us'}
]

function App() {
  return (
    <div className="App">
      <Header
        items = {list}
      />
      
    </div>
  );
}

export default App;
