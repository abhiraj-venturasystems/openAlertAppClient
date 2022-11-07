import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { connect } from "react-redux";
import PageHeading from "../common/pageHeading";
import MTable from "../common/Mtable";
import ModalComponent from "../common/modal/modal";
import { useFetching } from "../../Hooks/apiCall";

import { 
	getTokens, 
	emptyTokenDetails, 
	searchTokens, 
	getTokenDetail
	 } from "../../redux/actions/tokenActions";
import * as tokenTypes from '../../redux/types/tokenTypes';



const Tokens=(props)=>{

	const { tokens, searchTokens, getTokenDetail, emptyTokenDetails } = props;

	useFetching(getTokens);

	return(
		<Container className="pageContainer" >
				<PageHeading
					heading="Tokens"
					showButton={false}
					showSearch={true}
					searchAction={searchTokens}
					//onClick={toggleAddShopModal}
				/>

				<MTable 
					tableData={tokens.items}
					contentFlag={tokenTypes.TOKEN_FLAG}
					//editFunc={editFunc}
				/>
	{/* 			<ModalComponent
					title={ editShop ? "Edit Shop": "Add Shop" }
					modalState={addShopModalState}
					message={<ShopReg toggleModal={toggleAddShopModal} editFlag={editShop} />}
					toggleModal={toggleAddShopModal}
				/> */}

		</Container>

	)
}

const mapStateToProps = (state) => ({
	tokens: state.tokenReducer.tokenlist
});

const mapDipatchToProps = {
	searchTokens,
	getTokenDetail,
	emptyTokenDetails
}

export default connect(mapStateToProps, mapDipatchToProps)(Tokens);

//export default Tokens;