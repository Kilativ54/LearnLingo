import { ContainerHome } from "./HomeDescription.styled";
import { SectionGetStarted } from "./HomeDescription.styled";
import { SectionImg } from "./HomeDescription.styled";
import { TitelSectionHome } from "./HomeDescription.styled";
import { SpanLang } from "./HomeDescription.styled";
import { ContainerSpan } from "./HomeDescription.styled";


const HomeDescription = () => {

  return (
    <ContainerHome>
  <SectionGetStarted><TitelSectionHome>Unlock your potential with <br/> the best  <ContainerSpan><SpanLang>language</SpanLang></ContainerSpan> tutors</TitelSectionHome></SectionGetStarted>
  <SectionImg/>  
      
    </ContainerHome>
  );
};

export default HomeDescription;
