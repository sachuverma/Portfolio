import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaAdobe } from "react-icons/fa";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Professional Experience</SectionTitle>

    <br /> <br />

    <h2> 2025 - Present </h2>
    <h1> DP World,  Backend Developer</h1>
    <br />
    <ListParagraph>
      - Implemented customer booking controller with MVC architecture and a new service for booking and shipment generation flows in PostgreSQL database, utilizing REST APIs by interacting with another order management microservice, and utilized Kafka topics to send create, update, and cancellation events.
      <br />
      <br />
      - Currently working in the shipment service microservice in Java, springboot, PostgreSQL DB, implemented api with 20% reduction in api n95 load test time compared to existing ui apis, for lesser intra-microservice latency.
      <br />
      <br />
      - Exposure to test-driven development, mocking frameworks, and services using Junit, Mockito.
      <br />
      <br />
      - Implemented criteria builder Spring JPA queries for supporting advanced filters, which fetch data for UI based on where and order by DB queries.
      <br />
      <br />
      - Implemented various validations for document generation flows based on user permissions. Exposure to test-driven development, mocking frameworks and services using JUNIT, Mockito.
    </ListParagraph>

    <br />
    <br />
    <br /> 
    <br />
    <br />

    

    <h2> 2022 - 2025 </h2>
    <h1> Deutsce Telekom,   iOS Developer</h1>
    <br />
    <ListParagraph>
      - Worked extensively on iOS and tvOS development using Swift, focusing on building scalable and maintainable code through architectural patterns such as Viper and MVVM
      <br />
      <br />
      - Created REST APIs for mobile applications using Spring MVC architecture in Java.
      <br />
      <br />
      - Focused on resolving long-standing issues with focus handling in TVOS, which has unique navigation challenges. Refactored the logic using a protocol-based approach, which eliminated more than 75% of the previously reported bugs, resulting in a smoother user experience, reducing the average time to play user's analytics by 28%
      <br />
      <br />
      - Utilized both Apple's native AVPlayer and Castlabs' third-party video player to implement a new service that auto-plays live-streaming video content designed for reusability across the whole application
      <br />
      <br />
      - Led accessibility efforts across the app by implementing key features such as voiceover support, dynamic font scaling, and orientation support for all screens, ensuring the app is fully usable by individuals with different needs and abilities, increasing the user base by 3%
      <br />
      <br />
      - Played a key role in merging the separate codebases for iOS and Apple TVOS platforms into a single unified codebase. This significantly improved maintainability and reduced feature development time by 50%
      <br />
      <br />
      - Gained practical experience in test-driven development (TDD) and improved 40% of legacy code by writing unit tests for presenter and interactor logic. To improve team efficiency, introduced SwiftMocky and matchers for automated mock generation, reducing manual work by 80%
    </ListParagraph>

    <br /> <br />

    <List>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <FaAdobe size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>iOS / tvOS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Swift, Swift UI, Objective-C
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, HTML, CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <br />
  </Section>
);

export default Technologies;
