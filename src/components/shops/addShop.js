import React from 'react';
import useFormValidation from '../../validators/useFormValidation';
import { addShopAction, updateShopAction } from '../../redux/actions/shopActions';
import { connect } from "react-redux";

import { Container, Button, Grid } from '@material-ui/core';
import { Form, FormControl, InputGroup, Row, Col } from 'react-bootstrap';

// import useFormValidation from "../../validators/useFormValidation";
// import validateAddUser from "../../validators/validateAddUser";
// import { addUserAction, updateUserAction } from "../../redux/actions/userActions";
// import { getCompaniesList } from "../../redux/actions/companyActions";
// import { useFetching } from "../../Hooks/apiCall";
// import * as userTypes from "../../redux/types/userTypes";


const AddShop = (props) => {

    const initialState= {
        id: shopDbData?._id ||'',
        shopName: shopDbData?.shopName ||'',
        shopId: shopDbData?.shopId ||'',
        Password:'',
        Cpassword:'',
        shopEmail: shopDbData?.shopEmail ||'',
        address: shopDbData?.address ||'',
        tokenMessage: shopDbData?.tokenMessage ||'',
        typeOfCustomer: shopDbData?.typeOfCustomer ||'',
        languageSetting: shopDbData?.languageSetting ||'',
        contactPerson: shopDbData?.contactPerson ||'',
        phoneNumber: shopDbData?.phoneNumber ||'',
        outletGroup: shopDbData?.outletGroup ||'',
        gpsTag: shopDbData?.gpsTag ||'',
        subscriptionStartDate: shopDbData?.subscriptionStartDate ||'',
        subscriptionEndDate: shopDbData?.subscriptionEndDate ||'',
        outletLogo: shopDbData?.outletLogo ||'',
    }

   
	const { handleChange, handleSubmit, values, errors } = useFormValidation(initialState);
    
    const { shops, toggleModal, addShopAction, updateShopAction, editFlag, shopDbData } = props;

    return (
        <Container className="pageContainer">
           
           <Grid container direction="column" >
               <Form
                  onSubmit={async (e) => {
                   try {
                            if (editFlag) {
                                await handleSubmit(e, updateShopAction, toggleModal);
                            } else {
                                await handleSubmit(e, addShopAction, toggleModal);
                            }
                           
                   }
                   catch (error){ }
                   }}
               >

                   <Grid item xs={6} >
                       <InputGroup className="mb-3">
                           <FormControl
                               name="shopName"
                               type="text"
                               value={values.shopName}
                               onChange={handleChange}
                               placeholder='Shop Name'
                           />
                       </InputGroup>
                   </Grid>

                   <Grid item xs={6} >
                       <InputGroup className="mb-3">
                           <FormControl
                               name="shopId"
                               type="text"
                               value={values.shopId}
                               onChange={handleChange}
                               placeholder='Shop Id'
                           />
                       </InputGroup>
                   </Grid>

                   <Grid item xs={6} >
                       <InputGroup className="mb-3">
                           <FormControl
                               name="shopEmail"
                               type="text"
                               value={values.shopEmail}
                               onChange={handleChange}
                               placeholder='Email'
                           />
                       </InputGroup>
                   </Grid>

                   <Grid item xs={6} >
                       <InputGroup className="mb-3">
                           <FormControl
                               name="address"
                               type="text"
                               value={values.address}
                               onChange={handleChange}
                               placeholder='Address'
                           />
                       </InputGroup>
                   </Grid>

                   <Grid item xs={6} >
                       <InputGroup className="mb-3">
                           <FormControl
                               name="tokenMessage"
                               type="text"
                               value={values.tokenMessage}
                               onChange={handleChange}
                               placeholder='Token Message'
                           />
                       </InputGroup>
                   </Grid>

                   <Grid item xs={6} >
                       <InputGroup className="mb-3">
                           <FormControl
                               name="typeOfCustomer"
                               type="text"
                               value={values.typeOfCustomer}
                               onChange={handleChange}
                               placeholder='Type of Customer'
                           />
                       </InputGroup>
                   </Grid>


                   <Grid item xs={6} >
                            <InputGroup className="mb-3">
                                <FormControl
                                    name="pwd"
                                    type="password"
                                    value={values.Password}
                                    onChange={handleChange}
									placeholder='New Password'
                                />
                            </InputGroup>
                        </Grid>

                        <Grid item xs={6} >
                            <InputGroup className="mb-3">
                                <FormControl
                                    name="Cpassword"
                                    type="password"
                                    value={values.Cpassword}
                                    onChange={handleChange}
									placeholder='Confirm Password'
                                />
                            </InputGroup>
                        </Grid>

                        <Grid item xs={6} >
                            <InputGroup className="mb-3">
                                <FormControl
                                    name="Cpassword"
                                    type="password"
                                    value={values.Cpassword}
                                    onChange={handleChange}
									placeholder='Confirm Password'
                                />
                            </InputGroup>
                        </Grid>
                  
           

                   <Grid  direction="row">
                       <Row >
                           <Col xs={3}>
                               <Button variant="contained" color="primary" type='submit'>
                                   Submit
                               </Button>
                           </Col>
                           <Col xs={3}>
                               <Button variant="contained" color="primary" onClick={toggleModal}>
                                   Cancel
                               </Button>
                           </Col>
                       </Row>
                   </Grid>
               </Form>
           
       </Grid>

      

   </Container>
    )
}


const mapStateToProps = (state) => ({
	shopDbData: state.shopReducer.shopDetail
});


export default connect(mapStateToProps, { addShopAction, updateShopAction })(AddShop);