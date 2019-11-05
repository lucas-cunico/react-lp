import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './style'

const Card = ({right, classes}) => {
    return <div className={classes.card}>
        <img alt="Cat" src="http://placekitten.com/1200/1300" style={right && {order: 1}}/>
        <div className={classes.text}>
            <h3>Titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    </div>
}
export default withStyles(styles)(Card)