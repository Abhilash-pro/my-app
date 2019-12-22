import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from "./img1.jpg";
import img2 from './img2.jpg';

export default class CarouselImg extends React.Component{
render() {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image 
                    src ={img1}
                   width="100%"
                    height = "400"
                    />
                    <Carousel.Caption>
                    <h3>Frist Image</h3>
                    <p>First image details or information</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={img2}
                    width="100%"
                    height = "400"
                    alt="second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Second Image details or information</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>    
    );
}
}
