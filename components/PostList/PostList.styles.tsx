import styled from "@emotion/styled";

export const PostListWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 414px) and (orientation: portrait) {
    flex-direction: column;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    flex-direction: row;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xl}px) and (orientation: portrait) {
    flex-direction: row;
  }
`;
