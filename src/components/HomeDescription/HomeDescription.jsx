import { ContainerHome } from './HomeDescription.styled';
import { SectionGetStarted } from './HomeDescription.styled';
import { SectionImg } from './HomeDescription.styled';
import { TitelSectionHome } from './HomeDescription.styled';
import { SpanLang } from './HomeDescription.styled';
import { ContainerSpan } from './HomeDescription.styled';
import { TextHomedescript } from './HomeDescription.styled';
import LinkToCatalog from 'components/LinkToTeachers/LinkToTeachers';
import InformationStatistic from 'components/InformationStatistic/InformationStatistic';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';



import { useEffect} from 'react';


// Ініціалізуйте Firebase

const HomeDescription = () => {


  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAdMzoc_06eIOCskvrd7KOPdCdnxH_65lY",
      authDomain: "learnlingo-15f6e.firebaseapp.com",
      databaseURL: "https://learnlingo-15f6e-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "learnlingo-15f6e",
      storageBucket: "learnlingo-15f6e.appspot.com",
      messagingSenderId: "2642631436",
      appId: "1:2642631436:web:fbfe5a992c2497eab2c729",
      measurementId: "G-L4S0Q5Z8CE"
    };
    const app = initializeApp(firebaseConfig);

    // Отримання посилання на базу даних
    const db = getDatabase(app);

    // Операції з базою даних
    const fetchData = async () => {
      const dbRef = ref(db, '/0/avatar_url');

      try {
        const snapshot = await get(dbRef);
        const data = snapshot.val();
        console.log(data);
      } catch (error) {
        console.error('Помилка отримання даних:', error);
      }
    };

    fetchData();
  }, []);

  return (<><ContainerHome>
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
  <InformationStatistic/></>
    
  );
};

export default HomeDescription;
