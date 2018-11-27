import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const style = {
  img: {
    maxHeight: 300
  },

  descrip: {
    margin: '15px 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none'
  }
};

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div>
        <Link to="/products" style={style.link}>
          <div>
            <img src={product.image} alt="products" style={style.img} />
          </div>
          <div style={style.descrip}>
            <Typography variant="h6" style={style.heading1}>
              {product.name}
            </Typography>
            <Typography variant="subtitle1" style={style.heading1}>
              $
              {product.price}
            </Typography>
          </div>
        </Link>
      </div>
    );
  }
}
ProductComponent.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default ProductComponent;
