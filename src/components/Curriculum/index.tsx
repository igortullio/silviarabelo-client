import Card from '../Card';
import Heading from '../Heading';
import Text from '../Text';

const Curriculum = () => {
  return (
    <div className="bx--col pt-pb-09">
      <Heading>Currículo</Heading>
      <div className="bx--row">
        <div className="bx--col-md-4 bx--col-sm-16 pb-03">
          <Card>
            <Heading size="small">Formação</Heading>
            <Text>
              <p>Pós-Graduada em Gestão Condominial (Faculdade Senac 2018)</p>
              <p>Pós-Graduada em Psicopedagogia Clínica e Institucional (Facted)</p>
              <p>Especialização em MBA - Gestão de Instituições Educacionais (Universidade Católica de Brasília)</p>
              <p>Graduada em Pedagogia (Universidade Católica de Brasilia)</p>
            </Text>
          </Card>
        </div>
        <div className="bx--col-md-4 bx--col-sm-16 pb-03">
          <Card>
            <Heading size="small">Premiações e Reconhecimento</Heading>
            <Text>
              <p>Honra ao mérito (Izalci Senador - 2019)</p>
              <p>Premiação melhores do ano de 2019</p>
              <p>Premiação melhores do ano de 2018</p>
            </Text>
          </Card>
        </div>
        <div className="bx--col-md-4 bx--col-sm-16 pb-03">
          <Card>
            <Heading size="small">Síndica Profissional</Heading>
            <Text>
              <p>07 anos de experiência como Síndica do Residencial Costa Azul (Águas Claras)</p>
              <p>Experiência na coordenação de Equipe composta por 7 Funcionários</p>
              <p>Elaboração de Previsão Orçamentária</p>
              <p>Gestão de Pessoal (Treinamento dos funcionários, demissão, admissão, pagamentos e outros)</p>
              <p>Renegociação e Cotação de Empresas e Contratos</p>
              <p>Supervisão e Gestão Sistema de Segurança</p>
              <p>Reuniões rotineiras com Moradores, Conselheiros Fiscais e Funcionários</p>
              <p>Organização de Confraternizações condominiais e eventos</p>
              <p>Recuperação de Inadimplência</p>
              <p>Condução e elaboração de atas de reuniões assembleares</p>
              <p>Atendimento e intermediação de conflitos</p>
              <p>Estudo de Convenção e Regimento Interno</p>
            </Text>
          </Card>
        </div>
        <div className="bx--col-md-4 bx--col-sm-16 pb-03">
          <Card>
            <Heading size="small">Cursos de Síndico e participações</Heading>
            <Text>
              <p>Entrevista na rádio Ativa FM 98.1 (Programa inteligência condominial - 2019)</p>
              <p>Certificado de curso presencial (qualisíndicos/abraasp - 2019)</p>
              <p>Certificado de capacitação para agente de portaria (tork administração 2019)</p>
              <p>
                Certificado de curso básico de profissionalização em gestão condominial (81º curso Taguatinga norte)
              </p>
              <p>Participação e entrevista em programa rádio(cidades e condomínios 2019)</p>
              <p>Participação e entrevista em programa rádio (unasíndico/metrópoles 2019)</p>
              <p>Participação e entrevista em programa tv (condomínios news 2019)</p>
              <p>Certificado de curso presencial (abraasp dia da mulher síndica 2018 e 2019)</p>
              <p>Certificado de curso presencial (9º enbrassp -2018)</p>
              <p>Certificado de curso presencial (3º regiocondo rodada de negócios e soluções águas claras - 2018)</p>
              <p>Entrevista presencial (rádio 911psa - 2018)</p>
              <p>Certificado certificado de participação (unasíndico - 2018)</p>
              <p>Certificado de participação (unasíndico - 2017)</p>
              <p>Certificado de curso presencial (qualisíndicos/ abraasp - 2017)</p>
              <p>III Ciclo de debates em gestão condominial (2017)</p>
              <p>II Ciclo de debates em gestão condominial (2017)</p>
              <p>Palestra de sustentabilidade àos síndicos de águas claras (projeto arapoti)</p>
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
