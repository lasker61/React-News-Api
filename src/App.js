import React from 'react';
import './App.css';
//import Fragment from './components/Fragment/Fragment';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';


function App() {
  return (
    <div className='container'>
      <h1 className="text-primary mb-3 text-center"> React Bootstrap</h1>
      <Header></Header>
      {/* <Fragment></Fragment> */}
      <TopHeadline></TopHeadline> 
      
      
      
    </div>
  );
}

export default App;
