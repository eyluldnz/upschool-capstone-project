import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { login } from '../../../reduxStore/authentication';
import { mapUser } from '../../../reduxStore/userReducer';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import user  from '../loginPage/user.json';
import { Image } from 'react-bootstrap';
import { ToastContainer , toast } from 'react-toastify';

export default function LoginPage() {

    const [userLogin, setUserLogin] = useState("");
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = (e) => {

        
        if (userLogin === "" || password === null) {
            e.preventDefault();
           toast.warn("Please all fill field.", {
            theme: "dark",
            position:toast.POSITION.TOP_RIGHT,
            autoClose: 15000
            
          });
        }
        else {
            dispatch(login({ username: userLogin, password: password }));
            dispatch(mapUser(user[0]));
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
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" pattern="[a-zA-Z'-'\s]*" placeholder='Username' title="a-z || A-Z expects " onChange={(e) => setUserLogin(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  pattern=".{6,}" title="6 or more characters" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <button onClick={loginHandler}>Login</button>
                    </Form>
                    
                    </form>
                    
                


                </div>
            </div>
            <ToastContainer />
        </div>

    )
}
