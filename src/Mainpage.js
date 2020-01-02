import React from 'react';
import CarouselImg from './components/CarouselImg';
import PNav from './components/PNav';
import SearchInput from './components/SearchInput';
import {Container} from 'react-bootstrap';

export default class MainPage extends React.Component{
  render() {
  return (
    <div>
      <PNav />
      <CarouselImg />
      <br/>
            <h6 className="text-center" > Grow your Business with India's No. 1 CRM Company<br/>
            Turn Prospects into customers. Bring Customer Back</h6> 
    <SearchInput expand ="lg" />
    </div>
    
   
  );
}  
} 