import React from 'react';

import { AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';

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
          I am a Software Development Engineer and Competitive Coder with, having excellent problem solving skills.
        </SectionText>
          <Button onClick={() => window.location = 'https://www.linkedin.com/in/sachuverma/'} buttonType="1">
              Connect On &nbsp;
              <AiFillLinkedin size="3rem" />
          </Button>
          <Button onClick={() => window.location = 'mailto:sachinverma53121@gmail.com'} buttonType="2">
              Email &nbsp;
              <AiTwotoneMail size="3rem" />
          </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;