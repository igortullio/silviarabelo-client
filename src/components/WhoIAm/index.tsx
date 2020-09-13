import Heading from '../Heading';
import Text from '../Text';

import * as S from './styles';

const WhoIAm = () => {
  return (
    <>
      <S.Image className="bx--col" src="/img/silvia.jpg" alt="Imagem de uma mulher" loading="lazy" />
      <div className="bx--col">
        <Heading>Quem sou eu?</Heading>
        <Text>
          <h4>
            Sou Graduada em Pedagogia, Pós Graduada em Gestão Condominial, Pós Graduada em MBA Gestão de Instituições
            Educacionais, Pós Graduada em Psicopedagogia, Pós Graduada em Gestão e Orientação Educacional, tenho
            experiência em Gestão Administrativa e Financeira, Gestão de conflitos, Planejamento estratégico e Gestão de
            pessoas. Atuo como Sindica moradora (orgânica) de um condomínio residencial a 7 anos, a vontade de ser
            síndica do condomínio veio quando adquirir meu apartamento, alimentei a ideia logo no início ao participar
            da entrega do meu bloco pela construtora. Queria contribuir e aprender como administrar um condomínio para
            poder dar uma qualidade de vida para minha família e as pessoas que ali estavam com o mesmo sonho.
          </h4>
          <h4>
            Sou uma profissional que tem bom relacionamento interpessoal e fácil adaptação a mudanças, concluir o curso
            de &quot;Sindico Profissional&quot;, nesse sentido tenho o foco de trabalhar profissionalmente como Síndica
            onde me julgo bem capacitada para desenvolver um trabalho pautado em honestidade, transparência e
            comprometimento com resultados. Atuando sempre com transparência e imparcialidade no cumprimento da
            convenção e regimento interno com aplicação da Lei 4591/64 e novo Código Civil.
          </h4>
        </Text>
      </div>
    </>
  );
};

export default WhoIAm;
