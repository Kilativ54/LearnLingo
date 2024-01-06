import styled from "@emotion/styled";
import BackInfo from '../../img/home-page/border.png'

export const SectionInformation = styled.section`
    font-family: inherit;
    width: 1312px;
    height: 116px;
    border-radius: 30px;
    background-image: url(${BackInfo});
    background-size: auto;
    background-position:center bottom 0;
    background-repeat: no-repeat;
    background-size: 100%;  
`       
export const ListInfo = styled.ul`
    display: flex ;
`

export const ItemInfo = styled.li`
    font-weight: 550;
    font-size: 28px;
    line-height: 32px;
    color: rgba(18, 20, 23, 1);
    
`