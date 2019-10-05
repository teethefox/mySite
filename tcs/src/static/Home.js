import React from 'react';
export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        };
    }
    componentDidMount(){
        // this.getImages()
    }

    render() {          
      return (
                <div className=""> 
                
                <div className="fixed-bg bg-1">
                    <h1 className="background--photo"></h1>
               
                
                <div className="scroll-bg toTheLeft">
                    <h3>photos.</h3>
                    I use my camera to create and capture a feeling. <br></br>
                    <button className="clearButton">check out my work</button>
                </div>
                 </div>
                <div className="fixed-bg bg-2">
                    <h1 className="background--photo"></h1>
                
                <div className="scroll-bg toTheRight">
                    <h3 className="moveit">videos.</h3>
                    I make videos to help you relive a moment and sell a product or service.
                    <br></br>
                    <button className="clearButton">check out my work</button>
                </div>
                </div>
                <div className="fixed-bg bg-3">
                <h1 className="background--photo"></h1>

                <div className="scroll-bg toTheLeft">
                    <h3 className="moveit">music.</h3>
                    I make music to express myself and help others to do the same.
                    <br></br>
                    <button className="clearButton">check out my work</button>
                </div>
                </div>
                <div className="fixed-bg bg-3">
                    <h1 className="background--photo"></h1>
                </div>
                
                </div> 

          );
    }
  }
