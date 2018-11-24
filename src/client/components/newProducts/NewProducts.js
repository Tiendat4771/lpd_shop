import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Slider from 'react-slick';
import Product from '../product/ProductComponent';

const style = {
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
class NewProducts extends Component {
  componentDidMount() {
    console.log('new Products');
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear'
    };
    return (
      <div style={{ marginBottom: 50 }}>
        <div>
          <Typography variant="subtitle1" style={style.heading1}>
            {' '}
            HÀNG MỚI VỀ
            {' '}
          </Typography>
          <Divider style={style.divider} />

          <div>
            <Slider {...settings}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProducts;
