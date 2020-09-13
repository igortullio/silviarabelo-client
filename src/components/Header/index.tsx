import {
  Header as HeaderCarbon,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from 'carbon-components-react/lib/components/UIShell';

const Header = () => {
  return (
    <HeaderCarbon aria-label="Silvia Rabelo header">
      <HeaderName prefix="Síndica">Silvia Rabelo</HeaderName>
      <HeaderNavigation aria-label="Carbon Tutorial">
        <HeaderMenuItem href="#whoIAm">Quem sou eu?</HeaderMenuItem>
        <HeaderMenuItem href="#curriculum">Currículo</HeaderMenuItem>
        <HeaderMenuItem href="#contact">Contato</HeaderMenuItem>
      </HeaderNavigation>
    </HeaderCarbon>
  );
};

export default Header;
