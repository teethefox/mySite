import React from 'react';
import ImageMasonry from 'react-image-masonry';
export default class Photos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          images:[...Array(20).keys()]
        };
    }
    componentDidMount(){
        // this.getImages()
    }
    // getImages = ()=>{
    //     let images = this.state.images
    //     for(let i = 1; i < 21; i ++){
    //         images.push("../images/gallery/"+i+".jpg")
    //     }
    //     this.setState({images})
    // }
    render() {          
        const {images} = {...this.state}
      return (
        <main className="" id="container"> 
          
        <div className="masonry">
          <div className="">
            <ul style={{listStyle: 'none'}}>
            {images.map((index, photo) => (
              <li className="item" key={index}>
                <img src={require("../images/gallery/"+(photo+1)+".jpg")} />
              </li>
              ))}
              </ul>
            </div>
        </div>
        </main>
            // <div className="masonry">
            //    {images.map((index, photo) => (
            //         <div className="view second-effect">
            //             <img className="masonry-brick " key={index} src={require("../images/gallery/"+(photo+1)+".jpg")}/>
            //             <div className="mask">  
            //                 <a href="#" className="info" title="Full Image">Full Image</a>  
            //             </div>  
            //         </div>
            //     ))}
            // </div>
          );
    }
  }
