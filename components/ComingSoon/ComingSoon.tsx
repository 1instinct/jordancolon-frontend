import React from "react";
import { Logo, NotifyForm, SocialLinks } from "../components";
import { Container, Text, Fade, Device } from "./ComingSoon.styles";

export const ComingSoon = () => {
  return (
    <>
      <Container>
        <Fade />
        <Device src="/images/beeper_one_masked.png" />
        <Logo />
        <Text>{process.env.NEXT_PUBLIC_COMING_SOON_COPY}</Text>
        <NotifyForm />
        <SocialLinks />
      </Container>
    </>
  );
};
