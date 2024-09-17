import './BoardOfTrustees.css'; // For styling
import BoardMember from '../../components/BoardMember/BoardMember'; // Component for each member
//import Sidebar from '../../components/SideBar/SideBar'; // Sidebar component

// Import images
import Image1 from '../../assets/Akeem-Oyewale-picture.jpg';
import Image2 from '../../assets/Bello-300x300.jpg';
import Image3 from '../../assets/LTolajide-300x289.jpg';
import Image4 from '../../assets/DrTaj-600x695.jpg';
import Image5 from '../../assets/Alh-Sarumi-287x300.jpg';
import Image6 from '../../assets/ArcAdeboye.jpg'

const BoardOfTrustees = () => {
  return (
    <div className="board-container">
      <div className="main-content">
        <h1>Board of Trustees</h1>
        <BoardMember
          name="Alhaji Abdul Akeem Oyewale"
          title="Chairman Board of Trustees"
          description={"Abdul Akeem Oyewale is the Chief Executive Officer of Stanbic IBTC Nominees Limited. He holds a B.Sc (Hons) Accounting from University of Lagos and a Masters in Business Administration (MBA) from Manchester Business School, Manchester. He holds a certificate in Islamic Capital Markets from INCEIF University Malaysia.An Arthur Anderson Scholar and a nominee for Nigeria’s Young Manager award of the Year 2005 by the ThisDay Newspapers, he is a Fellow of the Institute of Chartered Account of Nigeria (ICAN), a Fellow of Chartered Institute of Stockbrokers and a Fellow of the Chartered Institute of Bankers of Nigeria."}
        image={Image1}
        />
       <div className='board-member2'><BoardMember
          name="Dr. Moshood Adeniji Bello"
          title="Board Member"
          description={"Moshood Adeniji Bello, a 2009 winner of the first prize [overall best paper for high scholarly quality] at the 18th World Business Congress, IMDA Conference in Tbilisi, Georgia, is a Lecturer in the department of Business Administration and Management, Lagos State Polytechnic, Lagos and currently a second year Doctoral Researcher on Entrepreneurship and Opportunity Recognition at the Centre for Economics and Management, Keele University, United Kingdom.He is a Chartered Accountant of the Institute of Chartered Accountants of Nigeria (ICAN), Member, Nigerian Institute of Management (NIM), British Academy of Management (BAM), Academy of Management, and Fellow of Institute of Entrepreneurs of Nigeria. He holds a Master of Science degree in Business Management, Bachelor of Science degree in Accounting and Higher National Diploma in Business Administration and Management. As an academic, Moshood has published several articles in learned and peer reviewed journals. He has also presented papers and delivered lectures at academic forums in different parts of the globe.Moshood is an experienced Muslim activist in Nigeria. He was a former Secretary General of the Muslim Students’ Society of Nigeria (National Headquarters) and Amir (President) of B-Zone, Lagos State Area Unit, and University of Lagos Branch of the same organisation at different times."}
          image={Image2}
        /></div> 
       <div className='board-member3'><BoardMember
          name="Arc. Lateefah Olajide"
          title="Board Member"
          description={"Lateefah Olajide is a Chief Architect with the Lagos State Development and Property Corporation (LSDPC). Her work experience spans over 15 years, working with the ECAD Design Group, GHK Architects and Planners and currently LSDPC.She holds a Bachelor of Architecture (B. Arch), a Bachelor of Environmental Sciences (BES) from the University of Lagos and a Masters degree in Interdisciplinary Design for the Built Environment from the University of Cambridge, United Kingdom. She is a registered Architect and a member of the Nigerian Institute of Architects (NIA).Lateefah is a specialist in Sutainable development in the built environment with particular interest in Universal Access. She volunteers as the honorary secretary of Legacy1995 – a historical and environmental interest group in Nigeria."}
          image={Image3}
        /></div>  
         <div className='board-member4'><BoardMember
          name="Prof. Tajudeen Olalekan Yusuf"
          title="Board Member"
          description={"Tajudeen Olalekan Yusuf holds Bachelor’s and Master’s degrees in Insurance and Management from the University of Lagos. A second Master’s degree in Islamic Management, Banking and Finance (with Distinction) from the Loughborough University and a PhD in Insurance from Nottingham University Business School in 2009. He also possesses a certificate of outstanding performance in Principles of Takaful from the Chartered Insurance Institute of London. He is currently a Senior lecturer in the Faculty of Business Administration, University of Lagos.As an academic, Tajudeen has participated in learned conferences, seminars and workshops in several countries; including the USA, UK, Malaysia, Japan, and Kenya. He has published many articles in referred and peer-reviewed journals both locally and internationally. As an Islamic scholar, Tajudeen is one of the Imams of the University of Lagos Muslim Community and Staff adviser for the Muslim Students’ Society of Nigeria, University of Lagos Branch. An oratory speaker who regularly gives lectures on varied Islamic subjects in public, radio and television. His hobbies are traveling and keeping tabs on current affairs. He has also authored Islamic books such as Winning Souls for Allah, Conquering Shaytan, Mosque: Basics and Management"}
          image={Image4}
        /></div>
          <div className='board-member5'><BoardMember
          name="Alhaji Kabir Sarumi AIBK, GCIA, MIoD"
          title="Board Member"
          description={"Alhaji Sarumi studied at Nigeria Institute of Internal Auditors, Lagos where he graduated in Internal Auditing in 1979. He also did a Diploma in Business and Industrial Law at University of Lagos in 1994 and obtained a Bsc in Accounting at University of Lagos in 2007.His working career spans over 25 years serving in various accounting grades while working with Nigeria Airways Ltd, from 1977 to 2002. He was privileged to serve the National Airlines on International posting as District Accountant Kinshasa-Zaires (1989 to 1992) and District Accountant Jeddah, Saudi Arabia (1992 to 1993). He retired meritoriously from active civil service at Nigeria Airways Ltd in year 2002 as Deputy Chief Accountant. Alhaji Sarumi is presently MD/CEO Kabeeer Sarumi Nig. Co. Ltd., the service/consulting Company he established and managed since year 2002 to date.He is an Associate Member, Institute of Book-Keepers London, Graduate Member, Nigeria Institute of Internal Auditors and also a Member of Institute of Directors Nigeria. Alh. Sarumi is an active Capital Market player and presently serving as chairman, Audit Committee of Fidson Healthcare Plc and African Alliance Insurance Plc (2012 to date). He had previously served as a member Audit Committee of Oando Plc (2010 – 2014) and intercontinental WAPIC Insurance Plc. (2008 – 2012)."}
          image={Image5}
        /></div>
          <div className='board-member6'><BoardMember
          name="Arc. Mutiu Adeboye"
          title="Board Member"
          description={"Mutiu Adeboye is the Chairman, Safamaq Group of Companies and Principal Consultant, Conceptions and Development Ltd. He holds a M.ED (Architecture) from University of Lagos and he is a member of the Nigeria Institute of Archtects (NIA) and registered with the Architect Registration Council of Nigeria (ARCON).He is on the Advisory Board of Zakat and Sadaqah Foundation, former Chairman of Omole Estate Phase 1 Residents’ Association (Adeyemo Akapo Sector) and the PTA Chairman, Vanguards Academy, Ogun State"}
          image={Image6}
        /></div>
      </div>
      
    </div>
  );
};

export default BoardOfTrustees;