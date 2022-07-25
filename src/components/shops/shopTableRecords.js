import React from 'react';
import ShopColumnHead from '../../constants/shopTableColumnsHead';
import ShopColumns from '../../constants/shopTableColumns';
import { 
    TableBody,
    TableHead
} from '@material-ui/core';

const ShopTableRecords = (props) => {
    const { rows, page, rowsPerPage, editFunc } = props;
    //console.log(rows);
    return (
        <>
            <TableHead>
                <ShopColumnHead />
            </TableHead>
            <TableBody>
                <ShopColumns editFunc={editFunc} rows={rows} page={page} rowsPerPage={rowsPerPage} />
            </TableBody>
        </>
    )
}

export default ShopTableRecords;