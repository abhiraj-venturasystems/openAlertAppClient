import React from 'react';
import { 
    TableCell,
    TableRow,
    Typography,
    Switch
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import * as tokenTypes from '../redux/types/tokenTypes';
import { 
	tokenEnableDisable
	 } from "../redux/actions/tokenActions";
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
    fullname:{
        fontWeight: 'bold',
        color:theme.palette.secondary.dark
      }
  }));

const TokenColumns= (props) =>{
    const classes = useStyles();
    const { rows, page, rowsPerPage, tokenEnableDisable, editFunc } = props;
    //const [userStatusState, setUserStatusState]= useState();

    //console.log(rows);

    return(
        <>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                <Typography className={classes.fullname}>{row.shopId.shopId + row.tokenNumber}</Typography>
                </TableCell>
                <TableCell >{row.shopId.shopName}</TableCell>
                <TableCell >{row.updatedAt}</TableCell>
                <TableCell >
                    <Switch 
                        name="status" 
                        color="primary" 
                        checked={row.status}
                        onChange={() => tokenEnableDisable(row._id, row.tokenStatus)}
                    />
                </TableCell>
                <TableCell ><Edit onClick={() => editFunc(row._id)}  /></TableCell>
                </TableRow>
            ))}
        </>
    )
}
const mapDispatchToProps = {
    tokenEnableDisable
}

export default connect(null, mapDispatchToProps) (TokenColumns);