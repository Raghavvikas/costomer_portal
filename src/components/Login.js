import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'
import { loginAction } from '../actions/action'
import { login } from '../slice/authSlice'

const Login = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector(state => state?.auth);
    const [loginData, setLoginData] = useState({ username: "", password: "" })

    const onFnF = () => {
        alert('This functionality is yet to complete');
    }


    const handleChange = (e) => {
        // let user = Object.assign({}, loginData, { [e.target.name]: e.target.value });
        setLoginData({...loginData,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData,"testttlogin");
        // dispatch(loginAction(loginData));
        dispatch(login(loginData)).then(() => navigate('/products'));
        // window.location.reload();
    }
    return (
        <>
            {
                props.authState ? <Navigate to="/purchasedItems" /> : <div className='form-layout'>
                    <div className="panel-haeding">
                        <div className='panel-heading-left'>
                            <h3>Sign Up Now</h3>
                            <p>Get access to your orders and chat for support</p>
                        </div>
                        <div className='panel-heading-right'>
                            <span className='glyphicon glyphicon-pencil'></span>
                        </div>
                    </div>

                    <div id='divLogin' className='bgImage panel-body'>
                        <Form horizontal="true" onSubmit={handleSubmit}>
                            <Form.Group controlId='FormHorizontalUsername' className="mb-2">
                                <Col sm={12}>
                                    <Form.Control size='lg' name='username' className='input-lg' onChange={handleChange} type="text" placeholder="Enter Username" autoComplete='off' />
                                </Col>
                            </Form.Group>

                            <Form.Group controlId='formHorizontalPassword' className='mb-2'>
                                <Col sm={12}>
                                    <Form.Control size='lg' name='password' className='input-lg' onChange={handleChange} type="password" placeholder="Enter Password" autoComplete='off'></Form.Control>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row}>
                                <Col sm={4}>
                                    <Button className='ml1 ms-4' variant='success' type="submit">Sign In</Button>
                                </Col>
                                <Col sm={8}>
                                    <Button className='ms-5' variant='link' onClick={onFnF}>Terms and Conditions</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            }
        </>
    )
}

export default Login
