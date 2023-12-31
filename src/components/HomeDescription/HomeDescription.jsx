import { ContainerHome } from './HomeDescription.styled';
import { SectionGetStarted } from './HomeDescription.styled';
import { SectionImg } from './HomeDescription.styled';
import { TitelSectionHome } from './HomeDescription.styled';
import { SpanLang } from './HomeDescription.styled';
import { ContainerSpan } from './HomeDescription.styled';
import { TextHomedescript } from './HomeDescription.styled';
import LinkToCatalog from 'components/LinkToTeachers/LinkToTeachers';

const HomeDescription = () => {
  return (
    <ContainerHome>
      <SectionGetStarted>
        <TitelSectionHome>
          Unlock your potential with <br /> the best{' '}
          <ContainerSpan>
            <SpanLang>language</SpanLang>
          </ContainerSpan>{' '}
          tutors
        </TitelSectionHome>
        <TextHomedescript>
          Embark on an Exciting Language Journey with Expert Language <br /> Tutors:
          Elevate your language proficiency to new heights by <br /> connecting with
          highly qualified and experienced tutors.
        </TextHomedescript>
        <LinkToCatalog text="Get started" />
      </SectionGetStarted>
      <SectionImg />
    </ContainerHome>
  );
};

export default HomeDescription;
