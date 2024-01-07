import { SectionInformation } from "./InformationStatistic.styled";
import { ListInfo } from "./InformationStatistic.styled";
import { ItemInfo } from "./InformationStatistic.styled";
import { SpanItem } from "./InformationStatistic.styled";
import { ItemInfoLast } from "./InformationStatistic.styled";

const InformationStatistic = () => {
    return (
              <SectionInformation>
<ListInfo>
    <ItemInfo>32,000 +<SpanItem>Experienced <br /> tutors</SpanItem></ItemInfo>
    <ItemInfo>300,000 +<SpanItem>5-star tutor <br /> reviews</SpanItem></ItemInfo>
    <ItemInfo>120 +<SpanItem>Subjects <br /> taught</SpanItem></ItemInfo>
    <ItemInfoLast>200 +<SpanItem>Tutor <br /> nationalities</SpanItem></ItemInfoLast>
    </ListInfo>
              </SectionInformation>
     );
  };
  
  export default InformationStatistic;