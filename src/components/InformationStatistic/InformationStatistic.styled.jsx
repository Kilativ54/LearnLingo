import styled from "@emotion/styled";
import BackInfo from '../../img/home-page/border.png'

export const SectionInformation = styled.section`
box-sizing: border-box;
    font-family: inherit;
    width: 1312px;
    height: 116px;
    border-radius: 30px;
    background-image: url(${BackInfo});
    background-size: auto;
    background-position:center bottom 0;
    background-repeat: no-repeat;
    background-size: 100%;  
    display: flex;
    justify-content: center;
    align-items: center;
   `       
export const ListInfo = styled.ul`
     display: flex;
    justify-content: space-evenly;
    align-items: center;
   
`

export const ItemInfo = styled.li`
display: flex;
justify-content: center;
    align-items: center;
    font-weight: 550;
    font-size: 28px;
    line-height: 32px;
    color: rgba(18, 20, 23, 1);
    margin-right :100px;
    
`
export const ItemInfoLast = styled.li`
display: flex;
justify-content: center;
    align-items: center;
    font-weight: 550;
    font-size: 28px;
    line-height: 32px;
    color: rgba(18, 20, 23, 1);
    
    
`

export const SpanItem = styled.span`
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
               
               display: inline-block;
        margin-left: 16px ;
        width: 96px;
       
      
`