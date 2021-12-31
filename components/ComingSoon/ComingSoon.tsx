import React from "react";
import { Logo, LogoBlob, NotifyForm, SocialLinks } from "../components";
import { Container, Text, Fade, Device } from "./ComingSoon.styles";

export const ComingSoon = () => {
  const isServer = typeof window === "undefined";
  return (
    <>
      <Container>
        <Fade />
        <Device src="/images/beeper_one_masked.png" />
        {isServer ? <Logo /> : <LogoBlob />}
        <Text>{process.env.NEXT_PUBLIC_COMING_SOON_COPY}</Text>
        <NotifyForm />
        <SocialLinks />
      </Container>
    </>
  );
};
