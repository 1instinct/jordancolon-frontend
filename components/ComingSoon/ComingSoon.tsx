import React from "react";
import { NotifyForm, SocialLinks } from "../components";
import { Container, Logo, Text, Fade, Device } from "./ComingSoon.styles";

export const ComingSoon = () => {
  const mailChimpUrl = `${process.env.MAILCHIMP_URL}?u=${process.env.MAILCHIMP_ID}&id=${process.env.MAILCHIMP_U}`;
  return (
    <>
      <Container>
        <Fade />
        <Device src="/images/beeper_one_masked.png" />
        <Logo src={`${process.env.NEXT_PUBLIC_LOGO_PATH}`} />
        <Text>{process.env.NEXT_PUBLIC_COMING_SOON_COPY}</Text>
        <NotifyForm />
        {/* <SocialLinks /> */}
      </Container>
    </>
  );
};
