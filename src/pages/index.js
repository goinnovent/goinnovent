import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import styled from "@emotion/styled"
import Video from "../components/video"
import { color, space } from "styled-system"
import { css } from "@emotion/core"
import Logos from "../components/logos"
import Instagram from "../components/Instagram"
import { fluidType } from "../utils"

export const Content = styled.div`
  font-size: 17px;
  color: #636463;
  ${space};
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 40px;

  p {
    margin-top: 0;
    line-height: 1.5;
  }

  strong {
    font-weight: 700;
  }
`

function linkColor({ bg }) {
  switch (bg) {
    case "blue": {
      return css`
        color: #2a75a2;
      `
    }
    case "green": {
      return css`
        color: #7ead41;
      `
    }
    case "yellow": {
      return css`
        color: #ec982d;
      `
    }
    default: {
      return css`
        color: #2a75a2;
      `
    }
  }
}

const Feature = styled(Link)`
  flex: 1;
  padding: ${fluidType(16, 24)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  ${color};

  > * {
    display: block;
  }

  h3 {
    display: block;
    font-size: ${fluidType(18, 38)};
    line-height: 1.17;
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
  }

  span {
    display: block;
    font-size: 22px;
    font-size: ${fluidType(14, 22)};
    text-decoration: none;
    ${linkColor};
  }

  hr {
    width: 100px;
    content: "";
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 0;
    display: block;
    height: 1px;
    border: 0;
    border-bottom: 1px solid #fff;
  }
`

const FeatureWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${fluidType(10, 20)};
  margin-right: ${fluidType(10, 20)};
  margin-bottom: 40px;

  ${Feature} {
    margin-bottom: 10px;
  }

  ${Feature}:last-child {
    margin-right: 0;
  }

  @media (min-width: 705px) {
    flex-direction: row;

    ${Feature} {
      margin-right: ${fluidType(10, 20)};
      width: 25vw;
      height: 25vw;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Hero />
    <Video />
    <Content>
      <p>
        Innovent is a team of organizers, designers, project managers, dreamers,
        big-thinkers, and innovators. We are a client-driven, brand engagement
        agency that connects brands with their audiences. Using proven methods,
        we work with you to design unique creative and deliver a seamless,
        integrated story to maximize your ROI and leave a lasting impression on
        your audience. We bring your brand to life.
      </p>
      <p>
        <strong>We bring your brand to life.</strong>
      </p>
    </Content>
    <FeatureWrap>
      <Feature to="/success-stories/zenefits" bg="blue">
        <h3>Thriving in the new world of work.</h3>
        <hr />
        <span>Read More</span>
      </Feature>
      <Feature to="/success-stories/avia" bg="green">
        <h3>Telling a futuristic story.</h3>
        <hr />
        <span>Read More</span>
      </Feature>
      <Feature to="/success-stories/thoughtspot" bg="yellow">
        <h3>Large scale with a community feel.</h3>
        <hr />
        <span>Read More</span>
      </Feature>
    </FeatureWrap>
    <Logos />
    <Instagram />
  </Layout>
)

export default IndexPage
