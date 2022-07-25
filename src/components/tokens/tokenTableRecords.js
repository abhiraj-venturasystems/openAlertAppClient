import React from 'react';
import TokenColumnHead from '../../constants/tokenTableColumnsHead';
import TokenColumns from '../../constants/tokenTableColumns';
import { 
    TableBody,
    TableHead
} from '@material-ui/core';

const TokenTableRecords = (props) => {
    const { rows, page, rowsPerPage, editFunc } = props;
    //console.log(rows);
    return (
        <>
            <TableHead>
                <TokenColumnHead />
            </TableHead>
            <TableBody>
                <TokenColumns editFunc={editFunc} rows={rows} page={page} rowsPerPage={rowsPerPage} />
            </TableBody>
        </>
    )
}

export default TokenTableRecords;