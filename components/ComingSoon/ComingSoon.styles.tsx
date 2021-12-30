import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Text = styled.div`
  text-align: center;
  width: 425px;
  margin-top: -40px;
  text-transform: uppercase;
  opacity: 0.66;
  font-family: ${(p) => p.theme.typography.titleSM.fontFamily};
  font-size: ${(p) => p.theme.typography.titleSM.fontSize};
  font-weight: ${(p) => p.theme.typography.titleSM.fontWeight};
  line-height: ${(p) => p.theme.typography.titleSM.lineHeight};
  color: ${(p) => p.theme.typography.titleSM.color};
  color: #ffffff;
`;

export const Fade = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  @media screen and (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
    height: 300px;
  }
`;

export const Device = styled.img`
  opacity: 0.33;
  display: flex;
  justify-contents: center;
  position: absolute;
  bottom: -40%;
  width: 150%;
  @media screen and (max-width: ${(p) => p.theme.breakpoints.values.sm}px) {
    bottom: -100px;
  }
`;
