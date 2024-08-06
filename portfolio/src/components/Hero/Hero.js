import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome <br />
        I'm HARSH GARG
      </SectionTitle>
      <SectionText>
        {" "}
        <b>
          <i>Fullstack MERN Developer</i>
        </b>
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://flowcv.com/resume/k1h06l03u9")
        }
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
