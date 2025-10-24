import Link from 'next/link';
import React from 'react';

import { AiFillGithub, AiFillInstagram, AiTwotoneMail, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: "17.5px" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#tech">
          <NavLink>Professional Experience</NavLink>
        </Link>
      </li>  

      <li>
        <Link href="#projects">
          <NavLink>Personal Projects</NavLink>
        </Link>
      </li>
            
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="mailto:sachinverma53121@gmail.com">
          <AiTwotoneMail size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://github.com/sachuverma">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sachuverma/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/sachinv.erma/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
