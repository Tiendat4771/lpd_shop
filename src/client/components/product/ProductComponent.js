import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
  img: {
    maxHeight: 300
  },
  wrap_img: {
    border: '1px solid #ccc',
    marginRight: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  }
};

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={style.wrap_img}>
        <Link to="/products">
          <div>
            <img
              src="https://static.wixstatic.com/media/82fcd3_4cd855833c7d4d608400c76c8048aae8~mv2_d_1440_1920_s_2.png/v1/fill/w_500,h_667,q_85,usm_0.66_1.00_0.01/82fcd3_4cd855833c7d4d608400c76c8048aae8~mv2_d_1440_1920_s_2.png"
              alt="products"
              style={style.img}
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductComponent;
