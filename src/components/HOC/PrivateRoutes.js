import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { connect } from  'react-redux';
import Layout  from '../layout';

const PrivateRoutes=(props)=>{
    if(props.tokenExpire){
        localStorage.removeItem('token');
    }

    return(
        !props.tokenExpire ? <Outlet /> : <Navigate to='/' />
    )

}


const mapStateToProps = (state) => ({
     tokenExpire : state.userReducer.tokenExpire
});

export default connect(mapStateToProps)(PrivateRoutes);