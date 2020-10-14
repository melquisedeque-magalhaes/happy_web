import styled from 'styled-components';

import LandingImg from '../../assets/landing.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 10px;

  a {
    bottom: 0;
    right: 0;
    position: absolute;
    background: #ffd666;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;

    height: 80px;
    width: 80px;

    transition: background-color 0.2s;

    &:hover {
      background: #96feff;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  flex-direction: column;

  height: 100%;
  max-height: 680px;

  width: 100%;
  max-width: 1100px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${LandingImg}) no-repeat 88% center;

  main {
    max-width: 350px;

    h1 {
      font-weight: 900;
      font-size: 76px;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

export const Background = styled.div``;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 34px;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;
