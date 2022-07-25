import React from 'react';
import { 
    TableCell,
    TableRow
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
       // backgroundColor:theme.palette.primary.dark,
        backgroundColor: '#0973b9',
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    }
  }));

const ShopColumnHead= () =>{
    const classes = useStyles();
    return(
        <TableRow>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Shop Id</TableCell>
            <TableCell className={classes.tableHeaderCell}>Subscription Start Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Subscription End Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Outlet Group</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Action</TableCell>
          </TableRow>
    )
}

export default ShopColumnHead;