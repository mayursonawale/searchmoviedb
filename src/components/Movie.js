/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
 
const Movie = (props) => {
    return(
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://placehold.it/198x264&text=Image+Not+Found`} alt="card" style={{width:"100%", height: 360}} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card" style={{width:"100%", height:360}} />
                    }
                </div>
                <div className="card-content">
                    <StyledButton onClick={() => {props.viewMovieInfo(props.movieId)} }>View Detalis</StyledButton>
                </div>
            </div>
        </div>
    )
}

// onClick={() => props.viewMovieInfo(props.movieId)}
export default Movie;