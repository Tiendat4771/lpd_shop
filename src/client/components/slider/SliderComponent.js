import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RaisedButton from 'material-ui/RaisedButton';
import slider from '../../static/image/slider.png';

const style = {
  container: {
    padding: ' 50px 0px',
    maxHeight: 600
  },
  textTitle: {
    paddingTop: 30
  },
  imageSlider: {
    marginTop: 15,
    maxHeight: 400,
    width: '0 auto',
    paddingLeft: 150
  },
  title: {
    fontSize: '35pt',
    color: '#222'
    // fontStyle: 'italic'
  },
  subTitle: {
    fontSize: '16pt',
    fontWeight: '100',
    color: '#999999'
  }
};

const SliderComponent = () => (
  <Grid
    container
    spacing={24}
    // justify="space-content"
    // alignItems="center"
    // alignContent="space-between"
    style={style.container}
  >
    <Grid item md={6}>
      <div style={style.textTitle}>
        <Typography variant="subtitle1" style={style.title}>
          PRICE DROPS
        </Typography>
        <br />
        <Typography variant="h6" style={style.subTitle}>
          Up to 15% Off All Our Product and sale of We make it easy for everyone to create a
          beautiful, Up to 15% Off All Our Product and sale of We make it easy
        </Typography>
        <br />
        <RaisedButton
          label="BUY NOW"
          backgroundColor="rgb(70, 217, 189)"
          labelColor="rgb(255, 255, 255)"
        />
      </div>
    </Grid>
    <Grid item md={6}>
      <img src={slider} alt="slider1" style={style.imageSlider} />
    </Grid>
  </Grid>
);

export default SliderComponent;
