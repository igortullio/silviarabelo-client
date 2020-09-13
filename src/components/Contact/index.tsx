import { Button } from 'carbon-components-react';
import { Phone16, LogoInstagram16, Email16 } from '@carbon/icons-react';

import Heading from '../Heading';

const Contact = () => {
  return (
    <div className="bx--col">
      <Heading>Contato</Heading>
      <div className="bx--row">
        <div className="bx--col-lg-3 bx--col-sm-16 pb-03">
          <Button
            kind="secondary"
            renderIcon={Phone16}
            iconDescription="Phone"
            href="https://wa.me/+5561985708277"
            target="_blank"
          >
            WhatsApp
          </Button>
        </div>
        <div className="bx--col-lg-3 bx--col-sm-16 pb-03">
          <Button
            kind="secondary"
            renderIcon={LogoInstagram16}
            iconDescription="Instagram"
            href="https://www.instagram.com/silviasindicaprofissional/"
            target="_blank"
          >
            Instagram
          </Button>
        </div>
        <div className="bx--col-lg-3 bx--col-sm-16 pb-03">
          <Button kind="secondary" renderIcon={Email16} iconDescription="Email" href="mailto:silviasrabelo@hotmail.com">
            E-mail Principal
          </Button>
        </div>
        <div className="bx--col-lg-3 bx--col-sm-16 pb-03">
          <Button
            kind="secondary"
            renderIcon={Email16}
            iconDescription="Email"
            href="mailto:silviarabelo.sindica@gmail.com"
          >
            E-mail Secundário
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
