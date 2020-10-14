import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Location } from './styles';

import LogoImg from '../../assets/Logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img alt="Logo" src={LogoImg} />

        <main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e muda o dia de muitas crianças</p>
        </main>

        <Location>
          <strong>Águas Lindas de Goias</strong>
          <span>Goias</span>
        </Location>

        <Link to="app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Content>
    </Container>
  );
};

export default Landing;
