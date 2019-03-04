import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

ReactChartkick.addAdapter(Chart)


const styles = {
  card: {
    maxWidth: 400,
    marginLeft: 80,
    marginBottom: 20


  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};





function ChartCard(props) {
  const { classes } = props;


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Chart Breakdown
        </Typography>
        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
      </CardContent>
      <Button variant="contained" className={classes.button} >
        Update
      </Button>
    </Card>
  );
}

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return{
    watson: state.watson
  }
}




export default  connect (mapStateToProps, null)(withStyles(styles)(ChartCard));
