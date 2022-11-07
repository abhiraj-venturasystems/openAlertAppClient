import React,{ useEffect } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Row, Col } from 'react-bootstrap';
import { useFetching } from "../../Hooks/apiCall";

import { getTokens } from "../../redux/actions/tokenActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme)=>({
    active: {
      //color: theme.palette.secondary.dark,
      color: 'rgba(51, 51, 51, 1)',
      borderColor: '#333333',
      width:'140px',
      height:'90px',
    },

    pending: {
       // color: theme.palette.error.main, 
        color: 'rgba(220 ,53 ,69, 1)',
        borderColor: '#333333',
        width:'140px',
        height:'90px',
      }
    
  }));



const Dashboard = props => {

    //const [getTokens]=props;

    useEffect(()=>{
        getTokens();	
       
},[])


	return (
            <Container className="pageContainer" >
                Dashboard
            </Container>

		);
};



const mapStateToProps = (state) => ({
	tokensPending: state.tokenReducer.pendingCount,
    tokensActive: state.tokenReducer.activeCount
	});

//export default connect(mapStateToProps, { getTokens })(Dashboard);
export default Dashboard;