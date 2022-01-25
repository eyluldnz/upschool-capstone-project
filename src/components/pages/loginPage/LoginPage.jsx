import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { login } from '../../../reduxStore/authentication';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

export default function LoginPage() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = () => {
        if (user === "" || password === null) {
            alert("Please fill")
        }
        else {
            dispatch(login({ username: user, password: password }));
            navigate("/");
        }

    }
    return (
        <div className='login-background text-center'>
            <div className='container  border rounded-pill login-page-container' >
                <div className='row m-5 justify-content-center'>
                    <form>
                    <Form className=' col-sm-12 col-md-6 offset-md-3 '>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setUser(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <button onClick={loginHandler}>Login</button>
                    </Form>
                    
                    </form>
                    
                


                </div>
            </div>
        </div>

    )
}
