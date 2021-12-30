import React from "react";
import styled from "@emotion/styled";

import { SocialContainer, SocialList, SocialListItem, SocialIcon } from "./SocialLinks.styles";

export const SocialLinks = () => {
  return (
    <>
      <SocialContainer>
        <SocialList>
          <SocialListItem>
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank">
              <SocialIcon src="images/social-icon-instagram.png" />
            </a>
          </SocialListItem>

          <SocialListItem>
            <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank">
              <SocialIcon src="images/social-icon-facebook.png" />{" "}
            </a>
          </SocialListItem>

          <SocialListItem>
            <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank">
              <SocialIcon src="images/social-icon-twitter.png" />{" "}
            </a>
          </SocialListItem>
        </SocialList>
      </SocialContainer>
    </>
  );
};
