import React from 'react';

import { AiFillLinkedin } from 'react-icons/ai';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm <br />
          SACHIN VERMA
        </SectionTitle>
        <SectionText>
          I am an aspiring Web Developer and Competitive Coder with, having excellent problem solving skills. <br />
          I am quite passionate about learning and being good at what I do.
        </SectionText>
          <Button onClick={() => window.location = 'https://www.linkedin.com/in/sachuverma/'}>
              Connect On &nbsp;
              <AiFillLinkedin size="3rem" />
          </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;