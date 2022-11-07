import React from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import{ Button }  from '@material-ui/core';
import { Fingerprint, Person } from '@material-ui/icons';

//In react-router-dom v6 useHistory() is replaced by useNavigate()
//import { useHistory } from 'react-router-dom';
import { useNavigate, NavLink } from "react-router-dom";

import useFormValidation from '../../validators/useFormValidation.js';
import { authAction } from '../../redux/actions/authAction.js';

const Signin = (props)=>{

    const INITIAL_STATE = {
        Username:"",
        Password:""
    }

    const navigate = useNavigate();

    //destructuring functions from component- useFormValidation
    //Here, authAction comes as props from the redux store
    const { handleChange, handleSubmit, values }=useFormValidation(INITIAL_STATE);

    //getting the dispathed action from redux store as props
    //you must destructure this action from redux store otherwise it will not work
    const { authAction } = props;
  
    return (
        <>
        <div className='signIn'>
            <div className='signInContainer'>
				<div className='signInForm'>

                    <div className='signInuserIcon'>
                      <Person className="headiconbg" />
					</div>
					<p>Sign In</p>
                    
                    <Form
                       onSubmit={async(e) => {
                            try{
                                //in the onSubmit, we are doing an asynchronous action so use async and await keyword
                                await handleSubmit(e, authAction);
                               navigate("/cms/dashboard");
                            }
                            catch(err){
                                console.log(err);
                            }
                       }}
                    >
                        <InputGroup className="mb-3">
                            {/* <InputGroup.Prepend> */}
                            <InputGroup.Text id="basic-addon1"><Person /></InputGroup.Text>
                            {/* </InputGroup.Prepend> */}
                            <FormControl
                                name="Username"
                                type="text"
                                value={values.Username}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            {/* <InputGroup.Prepend> */}
                            <InputGroup.Text id="basic-addon1"><Fingerprint /></InputGroup.Text>
                            {/* </InputGroup.Prepend> */}
                            <FormControl
                                name="Password"
                                type="password"
                                value={values.Password}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    
                        <Button variant="contained" style={{backgroundColor:"#f2c720"}} color="primary" type='submit' fullWidth>
                            Login
                        </Button>
                        {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink className={'link-danger'} to={'/shop/reg'}>Register</NavLink></p> */}
                    </Form>
                </div>
            </div>
        </div>
        </>
    )
}

//React provides a HOC named connect() to dispatch actions to the store and get datas from the store.
//Here the connect() returns a Consumer Component named Signin
//When connect with redux store, the state and dispatch() will comes by default as props in the consumer component.

//mapStateToProps is  will be the first argument of connect()
//mapStateToProps is a function and it will take the redux's full state as an argument, and the returning object
//of that function will comes as the props of our Consumer component. So the HOC will call the mapStateToProps()
//before calling the Consumer component.

//mapDispatchToProps is also another function and this will be the second argument of connect()
//mapDispatchToProps() function will take the dispatch() function as the argument.
//We can return the functions which are used to dispatch actions. 
//And these returned functions will comes as props of the Consumer component.

const mapDispatchToProps={
    authAction: authAction
    //actually this means authAction: authAction
}
export default connect(null, mapDispatchToProps)(Signin);
