import styled from "styled-components";

const StyledDiv=styled.div`
background:${(props=>props.theme.divBackground)};
color:${props=>props.theme.divColor}
`

const DivButtons=styled.button`
    margin:2px;
    padding:2px;
    border:1px solid ${(props=>props.theme.buttonBorder)};
    border-radius:5px;
    width:125px;
   
    color:${props=>props.theme.buttonColor};
    &:hover{
        background:${(props=>props.theme.hoverButtonBakground)};
        color:${props=>props.theme.hoverButton};
    }


`
export {StyledDiv,DivButtons};