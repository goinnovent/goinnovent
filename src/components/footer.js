import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { color } from "styled-system"
import { ReactComponent as Facebook } from "../logos/facebook.svg"
import { ReactComponent as LinkedIn } from "../logos/linkedin.svg"
import { ReactComponent as Instagram } from "../logos/instagram.svg"
import Innovent from "../logos/Innovent"

const Grid = styled.div`
  display: grid;

  @media (min-width: 767px) {
    grid-template-columns: auto 23vw;
    grid-template-rows: 23vw;
    grid-gap: 1em;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 10px;
  text-align: center;
  ${color};

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (min-width: 620px) {
    text-align: left;
    align-items: flex-end;
    flex-direction: row;
    padding: 40px 20px;
  }
`

Info.defaultProps = {
  color: "calvary",
}

const Right = styled(Link)`
  display: none;
  text-decoration: none;

  @media (min-width: 767px) {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${color};

    h3 {
      font-weight: 700;
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 0;
    }

    hr {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 34px;
      margin-bottom: 12px;
      border: 0;
      border-top: 2px solid #0e161d;
      width: 60%;
    }
  }

  @media (min-width: 969px) {
    h3 {
      font-size: 28px;
    }
  }
`

Right.defaultProps = {
  color: "white",
}

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 620px) {
    align-items: flex-end;
    text-align: right;
  }
`

const InfoRightHeader = styled.span`
  margin-bottom: 34px;
`

const SocialLogos = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 16px;
    margin-right: 16px;
  }

  @media (min-width: 620px) {
    > * {
      margin-left: 32px;
      margin-right: 0;
    }
  }
`

function Footer() {
  return (
    <Grid>
      <Info bg="dark">
        <div className="info-left">
          <h4>©2019 Innovent Creative LLC. All rights reserved.</h4>
          <p>1920 N. Coit Road</p>
          <p>Suite 200-167</p>
          <p>Richardson, TX 75080</p>
        </div>
        <InfoRight className="info-right">
          <InfoRightHeader>Follow Us</InfoRightHeader>
          <SocialLogos>
            <a
              href="https://www.facebook.com/goinnovent/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/goinnovent/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/company/goinnovent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </SocialLogos>
        </InfoRight>
      </Info>
      <Right to="/contact/" bg="calvary">
        <Innovent />
        <hr />
        <h3>Contact Us</h3>
      </Right>
    </Grid>
  )
}

export default Footer
