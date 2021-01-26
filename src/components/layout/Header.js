import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
    // Doing a destructuring here to retrieve props
    const { brand } = props;
    
    return (
        // <div>
        //     {/* <h1 style={headingStyle}>{brand}</h1> */}
        //     <h1>{brand}</h1>
        // </div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {brand}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><i className="fas fa-home"/> Home</Link>
                        </li>
                        <li>
                            <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"/> Add Contact</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link"><i className="fas fa-question"/> About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    brand: "My App"
}

Header.propTypes = {
    brand: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'green',
//     fontSize: '40px',
// };

export default Header;
