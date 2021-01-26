import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showContactInfo: false
        };
        // This way of binding this is not required if the custom function is arrow function
        // this.showOnClick = this.showOnClick.bind(this);
    }
    
    // Another way to define propTypes is here
    static propTypes = {
        contacts: PropTypes.object.isRequired
    }

    showOnClick = () => {
        this.setState(state => ({
            showContactInfo: !state.showContactInfo
        }))

        console.log(this.state.showContactInfo);
    }

    deleteOnClick = async (id, dispatch) => {
        console.log('clicked');

        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type: 'DELETE_CONTACT', payload: id});
    }
    
    render() {
        // Doing a destructuring here to retrieve props
        const { id, name, email, phone } = this.props.contacts;
        const { showContactInfo } = this.state;
        
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}{' '}
                                <i style={dropStyle} onClick={this.showOnClick} className="fas fa-sort-down"></i>
                                <i style={deleteStyle} onClick={this.deleteOnClick.bind(this, id, dispatch)} className="fas fa-times"></i>
                                <Link to={`contact/edit/${id}`}>
                                    <i 
                                        className="fas fa-pencil-alt"
                                        style={editStyle}
                                    ></i>
                                </Link>
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                            ) : null
                            }
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

// We can also define propTypes like below

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
// }

const dropStyle = {
    cursor: 'pointer'
}

const deleteStyle = {
    cursor: 'pointer',
    float: 'right',
    color: 'red'
}

const editStyle = {
    cursor: 'pointer',
    float: 'right',
    color: 'black',
    marginRight: '1rem'
}

export default Contact;