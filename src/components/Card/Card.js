import React from 'react'
import './style.css'

const Card = (props) => {
    return <div className="card">
        <img alt="Cat image" src="http://placekitten.com/1200/1300" style={props.right && {order: 1}}/>
        <div className="text">
            <h3>Titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    </div>
}
export default Card