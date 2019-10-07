import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photos from './components/Photos';
import Header from './static/Header';
import Footer from './static/Footer';
import Home from './static/Home';
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          display: "home"
        };
    }
    componentDidMount(){
        // this.getImages()
    }

    showWork = (type) =>{
      this.setState({display: type})
    }

    render() {    
      const display = this.state.display ;     
      return (
    <div className="App">
      <Header onClick={this.showWork}></Header>
      
        {display === "photos" ?
        <div className=" masonry-layout">
          <Photos onClick={this.showWork}></Photos>
        </div>
        : display === "home" &&
          <Home onClick={this.showWork}> </Home>
        }
      <Footer></Footer>
    </div>
  );
}
}

