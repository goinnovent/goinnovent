import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { space, color } from "styled-system"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallHero from "../components/SmallHero"
import { Content } from "./index"
import { fluidType } from "../utils"

const HeroLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  ${space};

  &[aria-current="page"] {
    font-weight: 700;
  }
`

const HeroLinksWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fluidType(17, 29)};
  font-weight: 200;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const CapabilitiesHero = props => (
  <SmallHero title="Capabilities" {...props}>
    <HeroLinksWrap>
      <HeroLink to="/meetings-and-events/" mr={20}>
        Meetings + Events
      </HeroLink>
      <span>|</span>
      <HeroLink to="/brand-development/" ml={20}>
        Brand Development
      </HeroLink>
    </HeroLinksWrap>
  </SmallHero>
)

const SplitBlock = styled(Link)`
  text-decoration: none;
  ${color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 50vw;
  height: 50vw; */
  max-height: 80vh;
  padding: 35px;

  @media (min-width: 700px) {
    width: 50vw;
    height: 50vw;
  }
`

const SplitBlockTitle = styled.h3`
  margin: 0;
  font-size: ${fluidType(30, 70)};
  color: #fff;
`

const SplitGoTo = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-top: 24px;
  ${color};
`

const SplitWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;

  ${SplitBlock}:first-child {
    align-items: flex-end;
    text-align: right;

    ${SplitGoTo} {
      color: #2a75a2;
    }
  }

  ${SplitBlock}:last-child {
    ${SplitGoTo} {
      color: #7ead41;
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;

    ${SplitBlock}:first-child {
      margin-right: 10px;
    }

    ${SplitBlock}:last-child {
      margin-left: 10px;
    }
  }

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Capabilities = () => (
  <Layout>
    <SEO title="Capabilities" keywords={[`gatsby`, `application`, `react`]} />
    <CapabilitiesHero bg={`#4D4E4C`} />
    <Content mt={40}>
      <p>
        At Innovent, we’re passionate about bringing your brand to life through
        a seamless, integrated story. Whether we create memorable experiences at
        your events or drive your overall brand strategy, our foundation remains
        the same. We aim to connect you to your audience and deliver results
        that reach far beyond your expectations. Whichever path you take, we
        take pride in working along side you as an extension of your team.
      </p>
    </Content>
    <SplitWrap>
      <SplitBlock bg="blue" to="/meetings-and-events/">
        <SplitBlockTitle>
          Meetings &amp;
          <br />
          Events
        </SplitBlockTitle>
        <SplitGoTo>{"< "}Click Here</SplitGoTo>
      </SplitBlock>
      <SplitBlock bg="green" to="/brand-development/">
        <SplitBlockTitle>
          Brand <br />
          Development
        </SplitBlockTitle>
        <SplitGoTo>Click Here{" >"}</SplitGoTo>
      </SplitBlock>
    </SplitWrap>
  </Layout>
)

export default Capabilities
