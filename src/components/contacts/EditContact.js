import React, { Component } from 'react';
import {Consumer} from '../../context';
// import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
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

        const  updContact = {
            name,
            email,
            phone
        }

        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

        dispatch({type: 'UPDATE_CONTACT', payload: res.data});

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
                                <h3>Edit Contact</h3>
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
                                    <input type="submit" value="Update Contact" className="btn btn-block btn-primary" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>   
        )
    }
}

export default EditContact;