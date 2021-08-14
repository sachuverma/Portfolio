import React from 'react';

import { AiFillLinkedin } from 'react-icons/ai';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

import { LeftSection } from './HeroStyles';

const Hero = (props) => (
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
          <a href="https://www.linkedin.com/in/sachuverma/" target="_blank">
            <Button>
                Connect On &nbsp;
                <AiFillLinkedin size="3rem" />
            </Button>
          </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;