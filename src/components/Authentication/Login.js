
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmitForm = async (data) => {
        const res = await axios.post('https://reqres.in/api/login', data);
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard/view-clients')
        }else{
            toast("Wrong email or password")
            console.log("Wrong email or password")
        }
    }

    return (
        <div className='login-form'>
            <div className='text-center form'>
                <div className='form-div'>
                    <img src="" alt="" />
                    <h1 className='fw-bold' >Welcome</h1>
                    <p className='form-text'>Enter your Username and Password</p>

                    {/* Login Form */}
                    <Form onSubmit={handleSubmit(onSubmitForm)}
                        className='text-start'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='py-2' type="email" name='email' placeholder="Enter email"
                                {...register("email", {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Please enter a valid Email"
                                    }
                                })}
                                onKeyUp={(e) => {
                                    trigger('email')
                                }}
                            />
                            <small className='text-danger ml-2 my-2'>{errors?.email?.message}</small>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='py-2' type="password" placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 character required'
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger('password')
                                }}
                            />
                            <small className='text-danger ml-2 my-2'>{errors?.password?.message}</small>
                        </Form.Group>
                        <button className='btn btn-primary form-btn' type="submit">Login</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;