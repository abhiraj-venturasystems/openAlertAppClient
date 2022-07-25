import React from 'react';
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Header from '../common/header';
import Sidenav from '../common/sidenav/sidenav';


const Layout=(props)=>{
	const { sidebarToggle } = props;
	return(
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
					<Outlet />
				</div>
				
			</div>
		</>
	)
}

const mapStateToProps = (state) => ({
	sidebarToggle: state.sidebarReducer.showSidebar,
});

export default connect(mapStateToProps, null)(Layout);