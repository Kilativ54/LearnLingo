import styled from '@emotion/styled';
import BackImg from '../../img/home-page/back-img-homePage.png'
// import BackImg from {../../}
// export const TextWrapper = styled.div`
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const Text = styled.p`
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// export const Image = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-top: 30px;
//   margin-bottom: 30px;
// `;


export const SectionGetStarted = styled.section`
  width: 720px;
  height: 530px;
  border-radius: 30px;
  background-color: rgba(248, 248, 248, 1);

`;
export const SectionImg =styled.div`
width: 568px;
height: 530px;
   display: flex;
    justify-content:center;
   
    background-image: url(${BackImg});
    background-size: auto;
    background-position:center bottom 0;
    background-repeat: no-repeat;
    background-size: 100%;  
`;

export const ContainerHome = styled.div`
  display: flex;
  gap: 24px;
`;

   