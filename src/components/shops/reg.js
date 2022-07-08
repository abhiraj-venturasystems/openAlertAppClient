import { TagFaces } from '@material-ui/icons';
import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { connect } from "react-redux"
//import "react-datepicker/dist/react-datepicker.css"; is included in the App.js file
import moment from 'moment';
import useFormValidation from '../../validators/useFormValidation';
import { shopRegAction } from '../../redux/actions/shopActions';


const ShopReg= (props)=>{

    const initialState= {
        shop_name:'',
        shop_id:'',
        Password:'',
        shop_email:'',
        address: '',
        token_message: '',
        type_of_customer:'',
        language_setting:'',
        contact_person:'',
        phone_number:'',
        outlet_group:'',
        gps_tag:'',
        subscription_start_date:'',
        subscription_end_date:'',
        outlet_logo:''
    }

    const { handleChange, handleSubmit, values, errors }= useFormValidation(initialState);
    const {shopRegAction} = props;

    return(
        <>
                <section className="vh-100 gradient-custom">
                    <div className="container py-6 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-9">
                            <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-4">Shop Registration</h3>
                                <Form
                                        onSubmit={async(e) => {
                                                try{
                                                    //in the onSubmit, we are doing an asynchronous action so use async and await keyword
                                                    await handleSubmit(e, shopRegAction, true);
                                                    //navigate("/shop/dashboard");
                                                }
                                                catch(err){
                                                    console.log(err);
                                                }
                                        }}

                                        autoComplete='off'
                                        >

                                <div className="row">
                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="shop_name">Name</label>
                                        <input type="text" name="shop_name" value={values.shop_name}  onChange={handleChange} className="form-control form-control-sm" />
                                       
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="shop_id">Shop ID</label>
                                        <input type="text" name="shop_id" value={values.shop_id}  onChange={handleChange} className="form-control form-control-sm" />
                                        
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="Password">Password</label>
                                        <input type="Password" name="Password" value={values.Password}  onChange={handleChange} className="form-control form-control-sm" />
                                        
                                    </div>

                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-4 mb-4 ">

                                    <div className="form-outline">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <textarea name="address" value={values.address}  onChange={handleChange} rows="3" className="form-control form-control-sm"></textarea>
                                       
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label htmlFor="token_message" className="form-label">Token Message</label>
                                        <textarea name="token_message" value={values.token_message}  onChange={handleChange} rows="3" className="form-control form-control-sm"></textarea>
                                        
                                    </div>

                                    </div>

                                    
                                
                                </div>

                                <div className="row">
                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="password">Type of customer</label>
                                        <input type="text" name="type_of_customer" value={values.type_of_customer}  onChange={handleChange} className="form-control form-control-sm" />
                                        
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="language_setting">Language setting</label>
                                        <input type="text" name="language_setting" value={values.language_setting}  onChange={handleChange} className="form-control form-control-sm" />
                                       
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="shop_email">Email Id</label>
                                        <input type="email" name="shop_email" value={values.shop_email}  onChange={handleChange} className="form-control form-control-sm" />
                                       
                                    </div>

                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-4 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="contact_person">Contact Person</label>
                                        <input type="text" name="contact_person" value={values.contact_person}  onChange={handleChange} className="form-control form-control-sm" />
                                        
                                    </div>

                                    </div>
                                    <div className="col-md-4 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="phone_number">Phone Number</label>
                                        <input type="text" name="phone_number" value={values.phone_number}  onChange={handleChange} className="form-control form-control-sm" />
                                        
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="outlet_group">Outlet Group</label>
                                        <input type="text" name="outlet_group" value={values.outlet_group}  onChange={handleChange} className="form-control form-control-sm" />
                                        
                                    </div>

                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="gps_tag">GPS Tag</label>
                                        <input type="text" name="gps_tag" value={values.gps_tag}  onChange={handleChange} className="form-control form-control-sm" />
                                        
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="subscription_start_date">Subscription Start Date</label>
                                        
                                        <DatePicker 
                                            name="subscription_start_date"
                                            className="form-control"
                                            value={values.subscription_start_date ? moment(values.subscription_start_date).format('yyyy-MM-DD'): ''}
                                            onChange={(value, event) => {
                                                event.target = {type:"text", value:value, name:"subscription_start_date"}
                                                handleChange(event, false, null, false, false)
                                            }}
                                            dateFormat="yyyy-MM-DD"
                                            autoComplete="none"
                                        />
                                       
                                    </div>

                                    </div>

                                    <div className="col-md-4 mb-4">
                                        <label className="form-label" htmlFor="subscription_end_date">Subscription End Date</label>
                                        <DatePicker 
                                            name="subscription_end_date"
                                            className="form-control"
                                            value={values.subscription_end_date ? moment(values.subscription_end_date).format('yyyy-MM-DD'): ''}
                                            onChange={(value, event) => {
                                                event.target = {type:"text", value:value, name:"subscription_end_date"}
                                                handleChange(event, false, null, false, false)
                                            }}
                                            dateFormat="yyyy-MM-DD"
                                            autoComplete="none"
                                        />

                                    </div>

                                </div>

                                
                                <div className="row">
                                    <div className="col-8">
                                        <label className="form-label" htmlFor="outlet_logo">Outlet Logo</label>
                                        <input type="file" name="outlet_logo" value={values.outlet_logo?.files?.[0]?.name}  onChange={(e)=>{handleChange(e, true, false)}} className="form-control form-control-sm" />
                                        

                                    </div>
                                </div>

                                <div className="mt-2 pt-2">
                                    <input className="btn btn-primary btn-sm" type="submit" value="Submit" />
                                </div>

                                    <p className="text-center text-muted mt-2 mb-0">Have already an account ? 
                                    <a href="/" className="fw-bold text-body"><u> Login here</u></a>
                                    </p>

                                </Form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

const mapStateToProps={
    shopRegAction
}
export default connect(null, mapStateToProps)(ShopReg);