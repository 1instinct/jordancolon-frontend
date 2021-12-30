import styled from "@emotion/styled/";

interface FormWrapperType {
  index: number;
}

interface GenericThemeType {
  theme?: any;
}

//Emotion styling
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 5px;
  // height: 175px;
`;

// export const FormWrapper = styled.div<FormWrapperType>`
//   margin: 10px auto;
//   width: 300px;
//   display: block;
//   overflow: hidden;
//   & form {
//     transition: 0.33s all ease-in-out;
//     width: auto;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     overflow: hidden;
//     justify-content: flex-start;
//     margin-left: ${(p) => `-${300 * p.index}px`};
//   }
// `;

export const FormWrapper = styled.div<FormWrapperType>`
  margin: 40px 0 0 0;
  width: 340px;
  display: block;
  overflow: hidden;
  & form {
    transition: 0.33s all ease-in-out;
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: flex-start;
    margin-left: ${(p) => `-${340 * p.index}px`};
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
      margin-left: ${(p) => `-${92.5 * p.index}vw`};
      padding-right: 10vw;
      // padding-left: 10vw;
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
    width: 100vw;
  }
`;

interface QuestionWrapperType {
  isVisible?: boolean;
}

export const QuestionWrapper = styled.div<QuestionWrapperType>`
  display: ${(p) => (p.isVisible ? "block" : "none")};
  width: 340px;
  height: 100px;
  margin: 0 20px;
  @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
    width: 100vw;
  }
  &:first-child input {
    @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
      margin: 0 0 0 5vw;
    }
  }
`;

// export const EmailInput = styled.input`
//   text-align: left;
//   width: 300px;
//   height: 36.15px;
//   border: none;
//   box-sizing: border-box;
//   // position: absolute;
//   // left: 50%;
//   // margin-left: -150px;
//   outline: none;
//   padding: 8px 15px;
//   background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='11%2c 33%2c 66%2c 10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
//   transition: 0.33s all ease-in-out;
//   &::placeholder {
//     color: ${(props) => props.theme.colors.black.primary};
//   }
//   &:focus {
//     transition: 0.33s all ease-in-out;
//     color: ${(props) => props.theme.colors.blue.primary};
//     background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='0' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
//   }
//   &:focus::placeholder {
//     color: ${(props) => props.theme.colors.blue.primary};
//   }
// `;

export const NotifyText = styled.div`
  text-align: center;
  width: 100%;
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: 19px;
  margin: 0 auto 20px auto;
`;

export const EmailInput = styled.input<GenericThemeType>`
  font-family: ${(p) => p.theme.typography.titleSM.fontFamily};
  font-size: ${(p) => p.theme.typography.titleSM.fontSize};
  font-weight: ${(p) => p.theme.typography.titleSM.fontWeight};
  line-height: ${(p) => p.theme.typography.titleSM.lineHeight};
  color: ${(p) => p.theme.typography.titleSM.color};
  text-align: left;
  width: 300px;
  height: 36.15px;
  background: ${(p) => p.theme.colors.purple.dark};
  border: 0px;
  box-sizing: border-box;
  box-shadow: -6px -6px 27px rgb(144 0 147 / 70%), 6px 6px 27px #000000, inset 1px 3px 30px #1a0300;
  border-radius: 36.1511px;
  position: relative;
  margin: 0;
  outline: none;
  padding: 8px 15px;
  color: ${(props) => props.theme.colors.blue.primary};
  &::placeholder {
    color: ${(props) => props.theme.colors.blue.primary};
  }
  &:focus::placeholder {
    color: ${(props) => props.theme.colors.pink.primary};
  }
  @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
    width: 80vw;
    margin: 0 0 0 2.5vw;
  }
`;

// export const Button = styled.button`
//   padding: 0;
//   margin: 0;
//   transition: 0.33s all ease-in-out;
//   color: #000;
//   text-align: center;
//   width: 201px;
//   height: 36.15px;
//   margin-left: -100px;
//   opacity: 0.66;
//   background: rgb(154, 154, 154);
//   background: linear-gradient(90deg, rgba(154, 154, 154, 0) 0%, rgba(154, 154, 154, 1) 100%);
//   border: none;
//   box-sizing: border-box;
//   position: relative;
//   top: 0;
//   right: 0;
//   width: 75px;
//   cursor: pointer;
//   float: right;
//   font-size: 15px;
//   &:hover {
//     transition: 0.33s all ease-in-out;
//     opacity: 1;
//   }
//   &:active {
//     background: ${(props) => props.theme.colors.black.primary};
//     color: ${(props) => props.theme.colors.white.primary};
//   }
// `;

export const Button = styled.button<GenericThemeType>`
  color: #ce8dd0;
  text-align: center;
  width: 121px;
  height: 36.15px;
  background: ${(p) => p.theme.colors.purple.medium};
  border: 2px solid rgba(255, 0, 138, 0.15);
  box-sizing: border-box;
  box-shadow: -6px -6px 12px rgb(144 0 147 / 11%), 1px 1px 24px rgba(0, 0, 0, 0.33),
    inset 1px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 36.1511px;
  position: relative;
  top: -46px;
  right: 0;
  cursor: pointer;
  float: right;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 0;
  @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
  }
`;

export const MailTo = styled.a`
  text-decoration: none;
  text-align: center;
  line-height: 19px;
  font-style: normal;
  font-weight: 200;
  bottom: 0;
`;
