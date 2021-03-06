import styled from "styled-components";


const CardImageContainer = styled.div`

    transform:rotateY(0);
    transition: all .3s ease-in-out ;

`

const CardContent = styled.div`
    top:0;
    left:0;
    width:100%;
    height:100% !important;
    background:${(props=>props.theme.cards.backgroundColor)};
    padding:90px 20px;
    position:absolute;
    box-sizing:border-box;
    text-align:center;
    border-radius:10px;
    transform:rotateY(90deg);
    transition: all .3s ease-in-out ;
    
`

const CardContainer = styled.div`
    
    position:relative;
    width:200px;
   
    &:hover ${CardContent} {
        transform:rotateY(0);
      };
      &:hover ${CardImageContainer} {
        transform:rotateY(-90deg);
    }
`

const CardButton = styled.div`
    
    width:100%;
    height:100% !important;
    background:none;
    position:absolute;
    box-sizing:border-box;
    text-align:center;
    border-radius:10px;
    align-items:center
`



export { CardContent, CardContainer, CardImageContainer,CardButton };