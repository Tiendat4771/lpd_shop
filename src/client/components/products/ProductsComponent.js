import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/lab/Slider';
import dataProducts from '../../store/data';
import Product from '../product/ProductComponent';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // height: 140,
    // width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  products: {
    padding: '40px 100px'
  },
  divider: {
    height: 4,
    backgroundColor: '#525252'
  },
  slidebar: {
    padding: '20px 10px'
  }
});
class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: '16',
      price: 50,
      products: []
    };
  }

  // ComponentDidMount
  componentDidMount() {
    this.setState({ products: [...dataProducts] });
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  handleChangePrice = (event, price) => {
    this.setState({ price });
  };

  render() {
    const { classes } = this.props;
    const { spacing, price, products } = this.state;

    return (
      <div className={classes.products}>
        <div style={{ margin: '50px 0px' }}>
          <Typography gutterBottom variant="h4" component="h3" style={{ fontWeight: 700 }}>
            Shop All
          </Typography>
          <Divider className={classes.divider} />
        </div>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              <Grid item xs={2}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  style={{ fontWeight: 300, cursor: 'pointer' }}
                >
                  Shop by
                </Typography>
                <Divider />
                <div className={classes.slidebar}>
                  <Typography
                    gutterBottom
                    component="h5"
                    style={{ fontWeight: 600, marginBottom: 20 }}
                  >
                    Collection
                  </Typography>
                  <Typography
                    gutterBottom
                    // variant="p"
                    component="h6"
                    style={{ fontWeight: 300, cursor: 'pointer', marginBottom: 10 }}
                  >
                    All
                  </Typography>
                  <Typography
                    gutterBottom
                    // variant="p"
                    component="h6"
                    style={{ fontWeight: 300, cursor: 'pointer', marginBottom: 10 }}
                  >
                    New Product
                  </Typography>
                  <Typography
                    gutterBottom
                    // variant="p"
                    component="h6"
                    style={{ fontWeight: 300, cursor: 'pointer', marginBottom: 10 }}
                  >
                    Hot Product
                  </Typography>
                </div>
                <Divider />
                <div className={classes.slidebar}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h5"
                    style={{ fontWeight: 300, cursor: 'pointer' }}
                  >
                    Price
                  </Typography>
                  <Slider
                    classes={{ container: classes.slider }}
                    value={price}
                    aria-labelledby="label"
                    onChange={this.handleChangePrice}
                  />
                </div>
                <Divider />
                <div className={classes.slidebar}>
                  <Typography
                    gutterBottom
                    component="h5"
                    style={{ fontWeight: 600, marginBottom: 20 }}
                  >
                    Products
                  </Typography>
                  <Typography
                    gutterBottom
                    // variant="p"
                    component="h6"
                    style={{ fontWeight: 300, cursor: 'pointer', marginBottom: 10 }}
                  >
                    Electric
                  </Typography>
                  <Typography
                    gutterBottom
                    // variant="p"
                    component="h6"
                    style={{ fontWeight: 300, cursor: 'pointer', marginBottom: 10 }}
                  >
                    Coffee Shop
                  </Typography>
                  <Typography
                    gutterBottom
                    // variant="p"
                    component="h6"
                    style={{ fontWeight: 300, cursor: 'pointer', marginBottom: 10 }}
                  >
                    Angel Store
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={10}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                  {products.map(item => (
                    <Grid item xs={4} key={item.uuid}>
                      <Product product={item} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProductsComponent.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ProductsComponent);
