import React, { Component } from 'react';
import Slider from 'react-slick';
import SliderComponent from '../slider/SliderComponent';
import NewProducts from '../newProducts/NewProducts';

const style = {
  main: {
    width: '85%',
    margin: '0 auto'
  },
  products: {
    // backgroundColor: '#ccc'
    // marginBottom: 400
  }
};

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div style={style.main}>
        <Slider {...settings}>
          <div>
            <SliderComponent />
          </div>
          <div>
            <SliderComponent />
          </div>
          <div>
            <SliderComponent />
          </div>
        </Slider>

        {/* PRODUCTS */}
        <div style={style.products}>
          <NewProducts />
        </div>

        <div style={style.products}>
          <NewProducts />
        </div>
      </div>
    );
  }
}

export default HomeComponent;
