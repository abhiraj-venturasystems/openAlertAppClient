import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { 
            Table,
            TableContainer,
            Paper,
            TablePagination,
        } from '@material-ui/core';
import ShopTableRecords from '../shops/shopTableRecords';
import TokenTableRecords from '../tokens/tokenTableRecords';
import * as shopTypes from '../../redux/types/shopTypes';
import * as userTypes from '../../redux/types/userTypes';
import SearchBar from "material-ui-search-bar";
import GetAppIcon from '@material-ui/icons/GetApp';


const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 650,
    
  },
  tableContainer: {
      borderRadius:15,
      marginTop:'10px'
  },
  tableHeaderCell: {
      fontWeight:'bold',
      backgroundColor:theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  }
}));


function MTable(props) {
    const classes = useStyles();

    const { tableData, contentFlag, editFunc, deleteFunc, exportFlag, detailedPage, filePopupPage} = props;


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchStatus, setSearchStatus] = useState('no');
    const [rows, setRows] = useState(tableData);

    //onload event not showing records, so used useEffect with condition
    //useEffect can be used instead of componentDidMount,componentDidUpdate, componentWillUnMount
    useEffect(() => {
        setRows(tableData);
    }, [JSON.stringify(tableData)]);




    const[searched, setSearched] = useState("");
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    console.log(tableData);

    const requestSearch = (searchedVal,flag)=>{ 
        if(searchedVal!=''){
            setSearchStatus('yes');
        }
        else{
            setSearchStatus('no');
        }
        
        const filteredRows = tableData.filter((row)=> {
            if(flag==='SHOPS'){
                let matchingPrivilegeId;
                //make the searched values first letter to Upper case- for Privilege check
                let firstCapitalString=searchedVal.charAt(0).toUpperCase() + searchedVal.substring(1);
                const found =  userTypes.privileges.filter(element => element.Role.indexOf(firstCapitalString) !== -1 );
                if(found.length > 0){
                   matchingPrivilegeId = found[0]._id ? found[0]._id : '';
                }
                else{
                    matchingPrivilegeId = '';
                }
                if(searchedVal==""){
                    matchingPrivilegeId=""
                }
                if(row.privilegeId=='3'){
                    if(matchingPrivilegeId!=""){
                        return row.privilegeId.toString().includes(matchingPrivilegeId.toString());
                   
                    }
                    else{
                        return  row.fullName.toLowerCase().includes(searchedVal.toLowerCase()) ||
                            row.email.toLowerCase().includes(searchedVal.toLowerCase()) ||
                            row.companyId.companyName.toLowerCase().includes(searchedVal.toLowerCase()); 
                           // row.privilegeId.toString().includes(matchingPrivilegeId);
                    }
                }
                else{
                    if(matchingPrivilegeId!=""){
                        return row.privilegeId.toString().includes(matchingPrivilegeId.toString());
                        
                    }
                    else{
                        return  row.fullName.toLowerCase().includes(searchedVal.toLowerCase()) ||
                            row.email.toLowerCase().includes(searchedVal.toLowerCase());
                    }
                    
                }
               
            }
            else if(flag==='TOKENS'){
                return row.companyName.toLowerCase().includes(searchedVal.toLowerCase());
            }
           
            
        })
        setRows(filteredRows);
    }

    const cancelSearch = ()=>{
        setSearched("");
        requestSearch(searched);
    }



    function TableRecords(props) {

        switch(props.flag) {
    
            case 'SHOPS':
    
                return <ShopTableRecords editFunc={props.editFunc} rows={props.rows} page={props.page} rowsPerPage={props.rowsPerPage}  />;
    
            case 'COMPANIES':
    
                return <TokenTableRecords editFunc={props.editFunc} rows={props.rows} page={props.page} rowsPerPage={props.rowsPerPage}  />;  
    
          default:
    
            return null;
    
        }
    
      }



  return (
   
      <>
        <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal,contentFlag)}
            onCancelSearch={() => cancelSearch()}
           className={(exportFlag=='yes') && "searchBar"}
            
        />
         
        <TableContainer component={Paper} className={classes.tableContainer}>
       
        <Table className={classes.table} aria-label="simple table" id='mytable-to-xls' >
            <TableRecords detailedPage={detailedPage} editFunc={editFunc} deleteFunc={deleteFunc} flag={contentFlag} rows={rows} page={page} rowsPerPage={rowsPerPage} />
            {/* <TableFooter >
            </TableFooter> */}
        </Table>
        </TableContainer>
        <TablePagination xs={12}
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
    </>
  );
}

export default MTable;