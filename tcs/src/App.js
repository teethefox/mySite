import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photos from './components/Photos';
import Header from './static/Header';
import Footer from './static/Footer';
import Home from './static/Home';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className=" masonry-layout">
      {/* <Photos></Photos></div> */}
      </div>
      <Home> </Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
