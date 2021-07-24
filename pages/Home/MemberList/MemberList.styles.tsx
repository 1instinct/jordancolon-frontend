import styled from "@emotion/styled";
import { pxIpone, pxPC } from "../../../utils";
import Avatar from "@material-ui/core/Avatar";
export const Title = styled.div`
  font-size: 33px;
  line-height: 41px;
  color: #000;
  text-align: center;
  font-family: "Bebas Neue";
  margin-top: 19px;
`;
export const MySwiperContainer = styled.div`
  height: ${pxPC(143)};
  margin-top: ${pxPC(30)};
  @media (max-width: 375px) {
    margin-top: ${pxIpone(19)};
    height: ${pxIpone(132)};
  }
`;
export const MyAvatar = styled(Avatar)`
  width: ${pxPC(89)}!important;
  height: ${pxPC(89)}!important;
  @media (max-width: 375px) {
    width: ${pxIpone(89)}!important;
    height: ${pxIpone(89)}!important;
  }
`;
export const MemberName = styled.div`
  margin-top: ${pxPC(9)};
  white-space: nowrap;
  font-size: ${pxPC(18)};
  color: #000;
  line-height: ${pxPC(22)};
  text-align: center;
  font-family: "Bebas Neue";
  @media (max-width: 375px) {
    margin-top: ${pxIpone(9)};
    line-height: ${pxIpone(24)};
  }
`;
export const MySlideWrap = styled.div`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
`;
