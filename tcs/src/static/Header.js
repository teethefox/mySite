import React from 'react';

export default class Header extends React.Component {
   showWork = (type) =>{
      this.props.onClick(type)
    }

    render() {
       return (
          <div className="topnav">
               <a class="" href="" onClick={()=>this.showWork('home')}>tiffcreatesstuff</a>
               <div class="topnav-right">
                  <a href="#search">photos</a>
                  <a href="#about">videos</a>
                  <a href="#about">music</a>
                  <a href="#about">contact me</a>
               </div>
            </div>
       );
    }
 }