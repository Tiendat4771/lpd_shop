import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 450,
    borderRadius: '0 !important',
    margin: 10
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  },
  link: {
    textDecoration: 'none'
  },
  cardconent: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, product } = this.props;
    return (
      <div>
        <Link to={`products/${product.uuid}`} style={styles.link}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                image="https://images.pexels.com/photos/1591/technology-music-sound-things.jpg?cs=srgb&dl=audio-headphone-hearing-1591.jpg&fm=jpg"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.cardconent}>
                <Typography gutterBottom variant="h6" component="h3">
                  {product.name.substring(0, 12)}
                </Typography>
                <Typography variant="h6" component="h4">
                  {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    );
  }
}
ProductComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default withStyles(styles)(ProductComponent);
