import { Navbar } from "react-bootstrap";
import styled from "styled-components";


const IconContainer = styled.div`
    margin:auto;
    position:relative;
    
`
const IconCount = styled.div`
    position:absolute;
    min-height:18px;
    min-width:25px;
    border-radius:50%;
    font-size:1em;
    background:red;
    color:white;
    text-align:center;
    top:-12px;
    right:-15px;
`

const CustomNavbar=styled(Navbar)`
background:${(props=>props.theme.navbarBackground)};
`

export { IconContainer, IconCount,CustomNavbar }
