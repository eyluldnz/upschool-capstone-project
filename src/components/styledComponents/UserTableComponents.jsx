import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import { FormSelect } from "react-bootstrap";


const TableContainer = styled(Table)`
    margin-top:50px;
    background:orange;
    border-radius:20px;     
 
`

const FilterOption = styled.option`
    background-color:white !important;
    color:orange;


`
const TableFilter = styled(FormSelect)`
    border-radius:20px; 
  
  
`


export { TableContainer, TableFilter, FilterOption }