import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import logoUrl from "../images/logo.svg"
import { justifyContent } from "styled-system"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  [data-contact] {
    margin-bottom: 10px;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;

    [data-contact] {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const HeaderSection = styled.div`
  display: flex;
  ${justifyContent};
`

const HeaderLink = styled(Link)`
  color: #8b8c88;
  text-decoration: none;
  font-size: 16px;

  @media (min-width: 767px) {
    font-size: 18px;
  }
`

const CenterNav = styled.div`
  display: flex;
  align-items: center;

  ${HeaderLink} {
    margin-left: 8px;
    margin-right: 8px;
  }
`

const LogoLink = styled(Link)`
  display: block;

  img {
    display: block;
    width: 70%;
    min-width: 134px;
  }

  @media (max-width: 766px) {
    img {
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  @media (min-width: 767px) {
    img {
      width: 80%;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  @media (min-width: 991px) {
    img {
      width: 100%;
    }
  }
`

const Header = () => (
  <Wrap>
    <HeaderSection>
      <LogoLink to="/">
        <img src={logoUrl} alt="Go Innovent" />
      </LogoLink>
    </HeaderSection>
    <HeaderSection justifyContent="center">
      <CenterNav>
        <HeaderLink to="/capabilities/">Capabilities</HeaderLink>
        <HeaderLink to="/success-stories/">Success Stories</HeaderLink>
        <HeaderLink to="/our-team/">Our Team</HeaderLink>
      </CenterNav>
    </HeaderSection>
    <HeaderSection data-contact justifyContent="flex-end">
      <HeaderLink to="/contact/">Contact Us</HeaderLink>
    </HeaderSection>
  </Wrap>
)

export default Header
