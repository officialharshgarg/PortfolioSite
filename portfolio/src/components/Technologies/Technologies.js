import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Proficient full-stack developer with a strong foundation in front-end
      technologies such as HTML, CSS, JavaScript, and popular frameworks like
      React. Possessing expertise in back-end development using languages like
      Python, Node.js, and databases such as MySQL, MongoDB. Experienced in
      building scalable and efficient web applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />• ReactJS • HTML • CSS • Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />• Node • Express • MongoDB • MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={"3rem"} />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />• Git • GitHub • Vite • RESTful API
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
