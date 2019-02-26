import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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



function WatsonCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  

  return (
    <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Watson Breakdown        
      </Typography>


    </CardContent>
   
  </Card>
  );
}



WatsonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WatsonCard);