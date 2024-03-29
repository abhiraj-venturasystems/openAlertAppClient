import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, ExitToApp, Menu } from '@material-ui/icons';
import { logoutAction } from '../../redux/actions/authAction.js';
import { toggleSidebar } from '../../redux/actions/toggleActions.js';
import ModalComponent from "./modal/modal";
import ChangePasswordModal from "./modal/ChangePasswordModal";
import * as userTypes from '../../redux/types/userTypes';

const Header = (props)=>{

    const { toggleSidebar, showSidebar, logoutAction } = props;

    const [changePasswordModalState, toggleChangePasswordModalState] = useState(false);
    const toggleChangePasswordModal = async () => {
        toggleChangePasswordModalState(!changePasswordModalState);
    }

    const navigate = useNavigate();
    const logout = async () => { 
		await logoutAction();
		localStorage.removeItem('token');
		localStorage.removeItem('shopName');
		localStorage.removeItem('privilegeId');
        localStorage.removeItem('loginId');
        localStorage.removeItem('shopLogo');
		navigate('/');
	}

    const [userId, setloggedUserId] = useState('');
    const [userPrivilegeName, setUserPrivilegeName] = useState('');
    const [userFullName, setUserFullName] = useState('');
    

	useEffect(() => {

        //this check is necessary, otherwise the useEffect will execute continuously like a loop
        if(userId===""){
			const loggeduserId = localStorage.getItem('loginId');
			setloggedUserId(loggeduserId);

            const loggedPrivilegeId = localStorage.getItem('privilegeId');
            const loggedPrivilegeName= userTypes.privileges.map((items)=>{
                if(items._id==loggedPrivilegeId){
                return items.Role
                }
            });
            setUserPrivilegeName(loggedPrivilegeName);

            const loggedUserName = localStorage.getItem('shopName');
            setUserFullName(loggedUserName);
        }
	});

    return (
    <>
        <div className='header'>
            {/* here margin-left is the sidenav width in _sidenva.scss */}
        <Navbar className={showSidebar? "showSideBar" : ""}  collapseOnSelect expand="lg" >
            <Menu className="sidebarToggle" onClick={toggleSidebar} />
            <Container>
                {/* <Navbar.Brand href="#home">QRCode Generator</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">


                        {
                            localStorage.getItem('loggedCompany') ? <Nav.Link className="loggedinAs">
                            {localStorage.getItem('loggedCompany')}
                        </Nav.Link> : ''
                        }
                    
                    </Nav>
                    <Nav>
                    <Nav.Link className="loggedinAs">
                        Logged in as : {userPrivilegeName}
                    </Nav.Link>
                    <Nav.Link  onClick={toggleChangePasswordModal}>
                        <AccountCircle  /> {userFullName}
                    </Nav.Link>
                    <Nav.Link eventKey={2} onClick={logout} >
                        <ExitToApp />
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>

        <ModalComponent
			title={"Change Password" }
			modalState={changePasswordModalState}
			message={
				<ChangePasswordModal toggleModal={toggleChangePasswordModal} userId={userId}  />
			}
            toggleModal={toggleChangePasswordModal}
		/>

    </>
    )
}

const mapDispatchToProps = {
	logoutAction,
    toggleSidebar
};

export default connect(null, mapDispatchToProps)(Header);