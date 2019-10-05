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
        <main className="main-wrapper" id="container"> 
          
        <div className="wrapper">
          <div className="">
            <ul className="">
            {images.map((index, photo) => (
              <li className="masonry-item grid" key={index}>
                <figure className="effect-sarah"> <img src={require("../images/gallery/"+(photo+1)+".jpg")} />
                  <figcaption>
                    <h2>Photo <span>Title</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="details.html">View more</a> </figcaption>
                </figure>
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
