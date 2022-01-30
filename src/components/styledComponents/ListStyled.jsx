import styled from "styled-components";
import {  ListGroup, } from 'react-bootstrap';

const CustonLıstItem=styled(ListGroup.Item)`
background:${(props=>props.theme.cardListBackground)};
color:${props=>props.theme.divColor}
`

const ListDiv=styled(ListGroup)`
background:${(props=>props.theme.cardListBackground)};
color:${props=>props.theme.divColor}
`
const CustonP=styled.p`
background:${(props=>props.theme.cardListBackground)};
color:${props=>props.theme.itemColor};
font-size:18px;
font-weight:bolder;
`

export {CustonLıstItem,ListDiv,CustonP};