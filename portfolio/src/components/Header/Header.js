import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <div style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" />
          <Span>Harsh Garg</Span>
        </div>
      </Link>
    </Div1>

    <Div2>
      <li>
        <NavLink href="#projects" passHref>
          Project
        </NavLink>
      </li>
      <li>
        <NavLink href="#tech" passHref>
          Technology
        </NavLink>
      </li>{" "}
      <li>
        <NavLink href="#about" passHref>
          About
        </NavLink>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/officialharshgarg">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/iofficialharshgarg/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/officialharshgarg/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
