/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Movie from './Movie'
// import Modal from '@material-ui/core/Modal';

const MovieInfo = (props) => {  

    const theme = createMuiTheme({
        overrides: {
            MuiTypography: {
                h3: {
                    color: '#2979ff',
                },
            },
        },  
    });
    theme.typography.h5 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
          },
    };

    return(
        // <Modal 
        //     open={props.handleOpen}
        //     onClose={props.handleClose}
        // >
            <div className="container">
                <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                    <i className="fas"></i>
                        <span style={{marginLeft: 10}}>Go back</span>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        { props.currentMovie.poster_path == null ? <img src={`https://placehold.it/198x264&text=Image+Not+Found`} alt="card" style={{ width:"100%", height:360}} /> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card image" style={{ width:'100', height:360}}/> }
                    </div>
                        <div className="col s12 m9">
                            <div className="info-container">
                            <ThemeProvider theme={theme}>
                                <Typography variant="h3">{props.currentMovie.title}</Typography>
                            </ThemeProvider>
                                <Typography variant="subtitle1">{props.currentMovie.release_date}</Typography>
                                <Typography><p>{props.currentMovie.overview}</p></Typography>
                                <Typography variant="h5">Rating: {props.currentMovie.vote_average}</Typography>
                            </div>
                        </div>
                </div>
            </div>
        // </Modal>



// Modal structure

    // <div className="modal">
    //     <div className="modal-content">
    //         <span>
    //             { props.currentMovie.poster_path == null ? <img src={"https://placehold.it/198x264&text=Image+Not+Found"} alt="card image" style={{ width:'100', height:360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card image" style={{ width:'100', height:360}}/> }
    //         </span>
    //         <h4>{props.currentMovie.title}</h4>
    //         <h6>{props.currentMovie.release_date}</h6>
    //         <p>{props.currentMovie.overview}</p>
    //     </div>
    //     <div className="modal-footer">
    //         <a className="modal-close waves-effect waves-green btn-flat" onClick={props.closeMovieInfo}>Back</a>
    //     </div>
    // </div>


        // <div class="row">
        //         <div class="col s12 m7">
        //         <div class="card">
        //             <div class="card-image">
        //             <img src={`images/sample-1.jpg`} />
        //             <span class="card-title">Card Title</span>
        // </div>
        //             <div class="card-content">
        //             <p>I am a very simple card. I am good at containing small bits of information.
        //             I am convenient because I require little markup to use effectively.</p>
        //             </div>
        //             <div class="card-action">
        //             <a href="#">This is a link</a>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
    )
}

export default MovieInfo;