import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { connect } from "react-redux";
import PageHeading from "../common/pageHeading";
import MTable from "../common/Mtable";
import ModalComponent from "../common/modal/modal";
import AddShop from "./addShop.js";
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
 const [editShop, setEditShop] = useState(false);

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
					tableData={shops.items}
					contentFlag={shopTypes.SHOP_FLAG}
					editFunc={editFunc}
				/>
				<ModalComponent
					title={ editShop ? "Edit Shop": "Add Shop" }
					modalState={addShopModalState}
					message={<AddShop toggleModal={toggleAddShopModal} editFlag={editShop} />}
					toggleModal={toggleAddShopModal}
				/>

		</Container>

	)
}

//whatever function we pass as first argument of connect will return the state of redux store
const mapStateToProps = (state) => ({
	shops: state.shopReducer.shoplist

});

//we can pass the dispatch actions to the store as 2nd argument of connect()
const mapDipatchToProps = {
	searchShops,
	getShopDetail,
	emptyShopDetails
}

 export default connect(mapStateToProps, mapDipatchToProps)(Shops);
