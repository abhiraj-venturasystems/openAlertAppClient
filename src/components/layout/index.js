import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from "react-redux";
import PrivateRoute from '../HOC/PrivateRoute';
import Header from '../common/header';
import Sidenav from '../common/sidenav/sidenav';
import Dashboard from '../dashboard/index';
import Shops from '../shops/index';
import Admin from '../admin/index';



const Layout = (props) => {
	const { sidebarToggle } = props;
	return (
		<>
			<Header showSidebar={sidebarToggle} />
			<div
				className={
					sidebarToggle
						? "parent-container grid-container"
						: "parent-container removeSidebar"
					}
			>
					<Sidenav />
					<div className="mainContent">
					<Switch>
						<PrivateRoute exact path="/cms/dashboard">
							<Dashboard />
						</PrivateRoute>

						<PrivateRoute exact path="/cms/admin">
							<Admin />
						</PrivateRoute>	

						<PrivateRoute exact path="/cms/shops">
							<Shops />
						</PrivateRoute>		



					</Switch>
					</div>
			</div>
		</>
	);
};


const mapStateToProps = (state) => ({
	sidebarToggle: state.sidebarReducer.showSidebar,
});

export default connect(mapStateToProps, null)(Layout);