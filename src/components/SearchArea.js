import React from 'react';
// import { spacing } from '@material-ui/system';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import { Box } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Autocomplete from '@material-ui/lab/Autocomplete';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '25ch'
//       },
//     }
//   }));

const SearchArea = (props) => {
    // const classes = useStyles();
    return (
        <div className="container">
            <div className="row">
                    <form action="" onSubmit={props.handleSubmit} className="col s12">
                        <div className="row">
                            <div className='input-field col s6'>
                                <input placeholder="Search Movies, Series" type="text" onChange={props.handleChange} />
                            </div>
                            <div className='input-field col s6'>
                                {/* <input placeholder="Search by Year" type="text" maxLength="4" onChange={props.handleChange}/> */}
                                {/* <input placeholder="Search by Year" type="text" onChange={props.handleChange}></input> */}
                            </div>
                        </div>
                    </form>
            </div>
        </div>
        // <form action="" onSubmit={props.handleSubmit}>
        //     <div>
        //         <Grid item xs={12}>
        //             <TextField id="outlined-search" type="search" label="Search Movies, Series" margin="normal" variant="outlined" onChange={props.handleChange}/>
        //             <TextField id="outlined-search" type="search" label="Search by Year" margin="normal" variant="outlined" onChange={props.handleChange}/>
        //         </Grid>
        //     </div>
        // </form>
    );
}

export default SearchArea;