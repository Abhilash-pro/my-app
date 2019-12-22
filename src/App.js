import React from 'react';
import CarouselImg from './components/CarouselImg';
import PNav from './components/PNav';
import SearchInput from './components/SearchInput';
import {Container} from 'react-bootstrap';
export default class App extends React.Component{
render() {
  return (
    <div>
      <PNav />
      <CarouselImg />
      <br/>
      <Container className="text-center">
            <h6 > Grow your Business with India's No. 1 CRM Company<br/>
            Turn Prospects into customers. Bring Customer Back</h6>
      </Container>
      <Container>
      <SearchInput expand ="sm" />
      </Container>
      
    </div>
  );
}
  

  
} 