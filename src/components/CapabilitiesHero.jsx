import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { space, color } from "styled-system"
import { fluidType } from "../utils"
import SmallHero from "./SmallHero"

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

const CapabilitiesHero = props => (
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

export default CapabilitiesHero
