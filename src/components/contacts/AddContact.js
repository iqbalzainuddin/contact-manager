import React, { Component } from 'react';
import {Consumer} from '../../context';
// import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        console.log('in');
        const { name, email, phone } = this.state;

        if (name === '') {
            this.setState({
                errors: {
                    name: "Name is Required"
                }
            });
            return;
        }

        if (email === '') {
            this.setState({
                errors: {
                    email: "Email is Required"
                }
            });
            return;
        }

        if (phone === '') {
            this.setState({
                errors: {
                    phone: "Phone is Required"
                }
            });
            return;
        }

        const newContact = {
            name,
            email,
            phone
        };

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({type: 'ADD_CONTACT', payload: res.data});

        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {}
        });

        this.props.history.push('/');
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                <h3>Add Contact</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label='Name'
                                        name='name'
                                        placeholder='Enter Name...'
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        label='Email'
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email...'
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        label='Phone'
                                        name='phone'
                                        placeholder='Enter Phone...'
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-block btn-primary" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
            
        )
    }
}

export default AddContact;