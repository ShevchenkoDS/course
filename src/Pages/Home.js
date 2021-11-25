import React, {Component} from 'react';
import CarouselBox from "../Component/CarouselBox";
import {Container} from "react-bootstrap";
import './Home.css'
import image from '../assets/a3a602261d8ebf44.jpg'
import News from "../Component/News";

class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox/>
        <News/>
      </div>
    );
  }
}

export default Home;
