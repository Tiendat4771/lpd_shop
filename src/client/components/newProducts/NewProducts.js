import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Slider from 'react-slick';
import Product from '../product/ProductComponent';

class NewProducts extends Component {
  componentDidMount() {
    console.log('new Products');
  }

  render() {
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
