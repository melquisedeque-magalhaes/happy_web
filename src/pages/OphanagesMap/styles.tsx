import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  position: relative;

  display: flex;

  a.ButtonPlus {
    position: absolute;
    bottom: 40px;
    right: 40px;
    background: #15c3d6;
    height: 64px;
    width: 64px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    transition: background-color 0.2s;
    z-index: 10;

    &:hover {
      background: #17d6eb;
    }
  }
`;
export const Aside = styled.aside`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 440px;

  padding: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  header {
    h2 {
      font-size: 48px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      margin-top: 24px;
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      font-weight: 800;
      line-height: 28px;
    }
  }
`;
export const Map = styled.div``;
