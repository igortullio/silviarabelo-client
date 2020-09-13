import { Content } from 'carbon-components-react';

import Header from '../components/Header';
import Home from './Home';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer />
    </>
  );
};

export default Index;
