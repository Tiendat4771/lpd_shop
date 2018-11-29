import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactImageMagnify from 'react-image-magnify';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import dataProducts from '../../store/data';

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
  },
  productDetail: {
    margin: '50px 0px'
  },
  margin: {
    // margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 100
  },
  button: {
    marginTop: 20,
    width: 250,
    borderRadius: 1
  }
});

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    this.setState({ product: dataProducts[0] });
  }

  render() {
    const { product } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.productDetail}>
        <Grid container className={classes.demo} justify="center" spacing={40}>
          <Grid item xs={4}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src:
                    'https://images.pexels.com/photos/1591/technology-music-sound-things.jpg?cs=srgb&dl=audio-headphone-hearing-1591.jpg&fm=jpg'
                },
                largeImage: {
                  src:
                    'https://images.pexels.com/photos/1591/technology-music-sound-things.jpg?cs=srgb&dl=audio-headphone-hearing-1591.jpg&fm=jpg',
                  width: 1200,
                  height: 1800
                }
              }}
            />
            <div>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                style={{ fontWeight: 600, marginTop: 20 }}
              >
                {product.name}
              </Typography>
              <Typography
                gutterBottom
                // variant="p"
                component="h6"
                style={{ fontWeight: 300, cursor: 'pointer', marginTop: 10 }}
              >
                {product.description}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography gutterBottom variant="h5" component="h5" style={{ fontWeight: 600 }}>
              {product.name}
            </Typography>

            <Typography
              gutterBottom
              // variant="p"
              component="h5"
              style={{ fontWeight: 300, marginBottom: 10 }}
            >
              SKU:
              {' '}
              {product.category}
            </Typography>

            <Typography
              gutterBottom
              // variant="p"
              component="h5"
              style={{ fontWeight: 300, marginBottom: 10 }}
            >
              Brand:
              {' '}
              <b>IPHONE</b>
            </Typography>

            <Typography
              gutterBottom
              // variant="p"
              component="h5"
              style={{ fontWeight: 500, marginBottom: 10 }}
            >
              Quantity:
            </Typography>
            <div>
              <TextField
                style={{ zIndex: 0 }}
                id="outlined-simple-start-adornment"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">Quantity</InputAdornment>
                }}
              />
            </div>
            <Button
              style={{ backgroundColor: '#6bdbc2', color: '#ffffff', zIndex: 0 }}
              variant="contained"
              size="large"
              className={classes.button}
            >
              Add To Cart
            </Button>

            <Divider style={{ margin: '20px 0px' }} />
            <Typography gutterBottom variant="h6" component="h3" style={{ fontWeight: 600 }}>
              Description
            </Typography>
            <Typography
              gutterBottom
              // variant="p"
              component="h6"
              style={{ fontWeight: 300, cursor: 'pointer', marginBottom: 10 }}
            >
              {product.description}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetail);
