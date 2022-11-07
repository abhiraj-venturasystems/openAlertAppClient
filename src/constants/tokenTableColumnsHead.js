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
        backgroundColor: '#1f2e4d',
        color: theme.palette.getContrastText('#1f2e4d')
    }
  }));

const TokenColumnHead= () =>{
    const classes = useStyles();
    return(
        <TableRow>
            <TableCell className={classes.tableHeaderCell}>Token Number</TableCell>
            <TableCell className={classes.tableHeaderCell}>Shop Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Event Time</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Action</TableCell>
          </TableRow>
    )
}

export default TokenColumnHead;