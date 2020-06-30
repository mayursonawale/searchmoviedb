/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         marginTop: theme.spacing(2),
//       },
//     },
//   }));

const Paginations = (props) => {
    // const classes = useStyles();
    const pageLinks = []

    for(let i=1; i<= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active ' : '';
        // <Pagination count={i} color="secondary" onClick={() => props.nextPage(i)}></Pagination>
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }

    return(
        <div className="container">
            <div className="row">
                <ul className="pagination">
        {/* <div className={classes.root}> */}
                    { props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Back</a></li> : ''}
                    {/* { props.currentPage > 1 ? <Pagination color="secondary" onClick={() => props.nextPage(props.currentPage - 1)}/> : ''} */}
                    { pageLinks }
                    {/* { props.currentPage > 1 ? <Pagination color="secondary" onClick={() => props.nextPage(props.currentPage + 1)}/> : ''} */}
                    { props.currentPage < props.pages + 1 ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}
        {/* </div> */}
                 </ul>
             </div>
         </div>    
    )
}

export default Paginations;