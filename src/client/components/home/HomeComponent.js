import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import Divider from '@material-ui/core/Divider';
import SliderComponent from '../slider/SliderComponent';
import Product from '../product/ProductComponent';

import products from '../../store/data';

const style = {
  main: {
    width: '85%',
    margin: '0 auto'
  },
  heading1: {
    fontSize: '20pt'
  },
  heading2: {
    fontSize: '11pt'
  },
  divider: {
    borderBottom: '0.2em solid #222',
    marginBottom: 30,
    width: '98%'
  }
};
const productsData = products;

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settingsSlider = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    const settingsProducts = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      centerPadding: '40px'
    };
    return (
      <div style={style.main}>
        <Slider {...settingsSlider}>
          <div>
            <SliderComponent />
          </div>
        </Slider>
        <div>
          <Typography variant="subtitle1" style={style.heading1}>
            {' '}
            HÀNG MỚI VỀ
            {' '}
          </Typography>
          <Divider style={style.divider} />
          <div>
            <Slider {...settingsProducts}>
              {productsData.map(product => (
                <Product product={product} key={product.uuid} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
