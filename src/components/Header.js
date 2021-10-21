import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_arrow_right_alt } from "react-icons-kit/md/ic_arrow_right_alt";
import { Button } from "./Button";
// Media Query
import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={logo} alt="" />
          <NavLink className="signIn-btn" to="/login">
            Sign In
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-content">
          <Title>See what's new</Title>
          <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME</SubTitle>
          <Button className="main-offer-btn" primary>
            try it now
            <Icon classNabe="Icon" icon={ic_arrow_right_alt} size={40} />
          </Button>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

const customMedia = generateMedia({
  lgDecsktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

// logo
const Logo = styled.img`
  width: 10rem;
  hight: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan("tablet")`
  left: 20%;
  `}
`;

// Header Container
const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursore: pointer;
    transition: background 0.2s easy-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }
  ${customMedia.lessThan("smTablet")`
  margin-top: 1.25rem;
  right: 5%;
  `}

  //    Header Top

  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  // Header Content

  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;

    ${customMedia.lessThan("smTablet")`
  display: grid;
  grid-template-rows: repeat(3, 60px);
  margin-top: 8rem;
  `}
  }

  .main-offer-btn {
    ${customMedia.lessThan("lgDesktop")`
  margin 0 33%;
  font-size: 1.5rem;
  `}
    ${customMedia.lessThan("mdDesktop")`
  margin 0 25%;
  font-size: 1.5rem;
  `}
  ${customMedia.lessThan("tablet")`
  margin 0 20%;
  font-size: 1.3rem;
  `}
  }
`;

// Header Content

// Main title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;

  ${customMedia.lessThan("smTablet")`
  font-size: 1.4rem;
  margin: 0; 
  `}
`;

// Subtitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.1875rem;
  text-transform: uppercase;
`;
