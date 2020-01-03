import React from "react";
import Image from 'react-bootstrap/Image';
import img1 from "./img1.jpg";

export default class CarouselImg extends React.Component{
render() {
    return(
        <div>
           <Image 
                    src ={img1}
                   width="100%"
                    height = "400"
                    />
        </div>    
    );
}
}
