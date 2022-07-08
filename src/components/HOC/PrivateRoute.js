import React from 'react';
import { Route } from 'react-router';
import {Navigate} from 'react-router-dom';
import { connect } from  'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
    if(rest.tokenExpire){
        localStorage.removeItem('token')
    }

    return (
        //here checking whether the token is there not. If it is not there, 
        //then it will load the proper componet with switch cases otherwise redirect to dashboard
        <Route 
            {...rest}
            component={(props)=>{
               
                const token = window.localStorage.getItem('token');
                if(token){
                    return <Component {...props} />
                }
                else{
                    return <Navigate to='/' />
                }
            }}
        />
    )
}

const mapStateToProps = (state) => ({
    tokenExpire: state.shopReducer.tokenExpire
})

export default connect(mapStateToProps)(PrivateRoute);


// function PrivateRoute({ component, ...rest }) {
//     if(rest.tokenExpire){
//         localStorage.removeItem('token')
//     }
//         return (
//             <Route
//                 {...rest}
//                 render={({ location }) =>
//                     localStorage.getItem('token') && rest.tokenExpire !== true ? (
//                         component ? (
//                             component
//                         ) : (
//                             <Redirect to='/admin/dashboard' />
//                         )
//                     ) : (
//                         <Redirect
//                             to={{
//                                 pathname: '/',
//                                 state: { from: location }
//                             }}
//                         />
//                     )
//                 }
//             />
//         );
//     }
    
//     const mapStateToProps = (state) => ({
//         tokenExpire : state.userReducer.tokenExpire
//     });
    
//   export default connect(mapStateToProps)(PrivateRoute);