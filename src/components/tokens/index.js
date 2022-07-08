import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { connect } from "react-redux";
import PageHeading from "../common/pageHeading";
import MTable from "../common/Mtable";
import ModalComponent from "../common/modal/modal";
import { 
	getShops, 
	emptyShopDetails, 
	searchShops, 
	getShopDetail
	 } from "../../redux/actions/shopActions";
import * as shopTypes from '../../redux/types/shopTypes';
import { useFetching } from "../../Hooks/apiCall";

const Shops = (props) => {

	const { shops, searchShops, getShopDetail, emptyShopDetails } = props;

 const [addShopModalState, toggleAddShopModalState] = useState(false);
 const [editUser, setEditUser] = useState(false);

 const toggleAddShopModal = async () => {
 	toggleAddShopModalState(!addShopModalState);
 	setEditShop(false);
 	await emptyShopDetails();
 }

  const editFunc = async(id) => {
 		await getShopDetail(id);
 		setEditShop(true);
 		toggleAddShopModalState(!addShopModalState);
 }

useFetching(getShops);

	return (

		<Container className="pageContainer" >
				<PageHeading
					heading="Shops"
					showButton={true}
					buttonLabel="Add Shop"
					showSearch={true}
					searchAction={searchShops}
					onClick={toggleAddShopModal}
				/>

				<MTable 
					tableData={users.items}
					contentFlag={shopTypes.USER_FLAG}
					editFunc={editFunc}
				/>
				<ModalComponent
					title={ editShop ? "Edit Shop": "Add Shop" }
					modalState={addShopModalState}
					message={<AddUser toggleModal={toggleAddShopModal} editFlag={editShop} />}
					toggleModal={toggleAddShopModal}
				/>

		</Container>

	)
}

const mapStateToProps = (state) => ({
	shops: state.shopReducer.shoplist
});

const mapDipatchToProps = {
	searchShops,
	getShopDetail,
	emptyShopDetails
}

export default connect(mapStateToProps, mapDipatchToProps)(Users);