import { Navbar,NavDropdown } from "react-bootstrap";
import { Search, XLg } from 'react-bootstrap-icons';
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

const CustomNavbar = styled(Navbar)`
background:${(props => props.theme.navbarBackground)};
color:${(props => props.theme.itemColor)}
`

const CustamNavbarDrop=styled(NavDropdown)`
    
    .dropdown-toggle.nav-link { color:${(props => props.theme.itemColor)} !important }  
    &:hover{
        .dropdown-toggle.nav-link { color:${(props => props.theme.itemColor)} !important }  
    }
    &:focus{
        .dropdown-toggle.nav-link { color:${(props => props.theme.itemColor)} !important }  
    }
    
   

    
    a::after { color:${(props => props.theme.itemColor)} }
    div{ 

        background:${(props => props.theme.navbarBackground)}
      
    }
    

`

const CustamNavbarDropItem=styled(NavDropdown.Item)`

    .dropdown-toggle.nav-link { color:${(props => props.theme.itemColor)} !important }  
    &:hover{
        .dropdown-toggle.nav-link { color:${(props => props.theme.itemColor)} !important }  
    }
    &:focus{
        .dropdown-toggle.nav-link { color:${(props => props.theme.itemColor)} !important }  
    }
    
    
    a::after { color:${(props => props.theme.itemColor)} }
    background:${(props => props.theme.navbarBackground)};
    color:${(props => props.theme.itemColor)}

`
const CustomSearch=styled(Search)`
color:${(props => props.theme.itemColor)}

`
const CustomX=styled(XLg)`
color:${(props => props.theme.itemColor)}

`

const CustomToggle=styled(Navbar.Toggle)`
background:${(props => props.theme.toggleBackground)};
color:${(props => props.theme.itemColor)}
`

export { IconContainer, IconCount,CustamNavbarDrop,CustomNavbar,CustamNavbarDropItem,CustomSearch,CustomX,CustomToggle }
