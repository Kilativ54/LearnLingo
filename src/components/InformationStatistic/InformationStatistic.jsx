import { SectionInformation } from "./InformationStatistic.styled";
import { ListInfo } from "./InformationStatistic.styled";
import { ItemInfo } from "./InformationStatistic.styled";

const InformationStatistic = () => {
    return (
              <SectionInformation>
<ListInfo>
    <ItemInfo>32,000 +<span>Experienced tutors</span></ItemInfo>
    <ItemInfo>300,000 +<span>5-star tutor reviews</span></ItemInfo>
    <ItemInfo>120 +<span>Subjects taught</span></ItemInfo>
    <ItemInfo>200 +<span>Tutor nationalities</span></ItemInfo>
    </ListInfo>
              </SectionInformation>
     );
  };
  
  export default InformationStatistic;