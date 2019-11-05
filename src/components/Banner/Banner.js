import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './style'

const Banner = ({ classes }) => {
    return <div className={classes.banner}>
        <h2>Banner</h2>
    </div>
}
export default withStyles(styles)(Banner)