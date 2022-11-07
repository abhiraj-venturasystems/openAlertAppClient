import React from 'react';
import Logo from '../../../assets/images/logo.png';
const SideNavHeader = () => {
	return(
			<div className='sideNavHeader'>
				<img alt='Logo' className='logo' src={Logo} />
				<div className="app_name">Open Alert App</div>
			</div>
			
		);
};

export default SideNavHeader;