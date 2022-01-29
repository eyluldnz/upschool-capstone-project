import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import { FormSelect } from "react-bootstrap";


const TableContainer = styled(Table)`
    margin-top:50px;
    border-radius:20px;     
    background:${props=>props.theme.trColor} !important;
    color:${props=>props.theme.itemColor};
 
`

const FilterOption = styled.option`
    background-color:white !important;
    color:orange;


`
const TableFilter = styled(FormSelect)`
    border-radius:20px; 

`

const TableRow=styled.tr`
 background:${props=>props.theme.trColor};
`


export { TableContainer, TableFilter, FilterOption,TableRow }