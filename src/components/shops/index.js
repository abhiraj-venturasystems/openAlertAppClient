import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { connect } from "react-redux";
import PageHeading from "../common/pageHeading";
import MTable from "../common/Mtable";
import ModalComponent from "../common/modal/modal";
import ShopReg from "./reg.js";
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

		<Container className="pageContainer" >yes shop here
				<PageHeading
					heading="Shops"
					showButton={true}
					buttonLabel="Add Shop"
					showSearch={true}
					searchAction={searchShops}
					onClick={toggleAddShopModal}
				/>

				{/* <MTable 
					tableData={shops.items}
					contentFlag={shopTypes.SHOP_FLAG}
					editFunc={editFunc}
				/>
				<ModalComponent
					title={ editShop ? "Edit Shop": "Add Shop" }
					modalState={addShopModalState}
					message={<ShopReg toggleModal={toggleAddShopModal} editFlag={editShop} />}
					toggleModal={toggleAddShopModal}
				/> */}

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

// export default connect(mapStateToProps, mapDipatchToProps)(Shops);

export default Shops;