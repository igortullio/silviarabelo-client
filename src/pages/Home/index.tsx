import WhoIAm from '../../components/WhoIAm';
import Curriculum from '../../components/Curriculum';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <div className="bx--grid">
      <div id="whoIAm" className="bx--row">
        <WhoIAm />
      </div>
      <div id="curriculum" className="bx--row">
        <Curriculum />
      </div>
      <div id="contact" className="bx--row">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
