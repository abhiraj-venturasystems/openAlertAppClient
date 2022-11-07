import React from 'react';
import { 
    TableCell,
    TableRow,
    Typography,
    Switch
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import * as shopTypes from '../redux/types/shopTypes';
import { 
	shopEnableDisable
	 } from "../redux/actions/shopActions";
import { connect } from 'react-redux';



const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius:15,
        margin: '10px 10px'
    },
    tableHeaderCell: {
        fontWeight:'bold',
        backgroundColor:theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    shopName:{
        fontWeight: 'bold',
        color:theme.palette.secondary.dark
      }
  }));

const ShopColumns= (props) =>{
    const classes = useStyles();
    const { rows, page, rowsPerPage, shopEnableDisable, editFunc } = props;
    //const [userStatusState, setUserStatusState]= useState();

    return(
        <>
    
            {
            
            rows && rows.length && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (

                 <TableRow key={row._id}>
                 <TableCell component="th" scope="row">
                 <Typography className={classes.shopName}>{row.shopName}</Typography>
                 </TableCell>
                 <TableCell >{row.shopId}</TableCell>
                 <TableCell >{row.subscriptionStartDate}</TableCell>
                 <TableCell >{row.subscriptionEndDate}</TableCell>
                <TableCell >{row.outletGroup}</TableCell>
                 <TableCell >
                     <Switch 
                        name="status" 
                         color="primary" 
                        checked={row.status}
                         onChange={() => shopEnableDisable(row._id, row.status)}
                     />
                </TableCell>
                 <TableCell ><Edit onClick={() => editFunc(row._id)}  /></TableCell> 
                </TableRow>
            ))}
        </>
    )
}
const mapDispatchToProps = {
    shopEnableDisable
}

export default connect(null, mapDispatchToProps) (ShopColumns);