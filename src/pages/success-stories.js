import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import SmallHero from "../components/SmallHero"
import Layout from "../components/layout"
import { Grid, Box } from "../components/utils"
import zenefits from "../images/zenefits/ZEN1.jpg"
import avia from "../images/avia/Avia2.jpg"
import realworld from "../images/realworld/RW1.jpg"
import thl from "../images/thl/THL3.jpg"
import thoughtspot from "../images/thoughtspot/THS4.jpg"
import exxon from "../images/exxon/XOM1.jpg"
import ifpw from "../images/ifpw/IFPW1.jpg"
import mwi from "../images/nsm/NSM1.jpg"

const BoxLink = props => <Box feature={true} as={Link} {...props} />

const BoxText = styled.span`
  display: block;
  z-index: 3;
`

const BoxBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  display: block;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.788953081232493) 0%,
    rgba(0, 0, 0, 0.592874649859944) 35%,
    rgba(0, 0, 0, 0) 100%
  );
`

const SuccessStories = () => (
  <Layout>
    <SmallHero bg="green" title="Success Stories" />
    <Grid mt={24}>
      <BoxLink to="/success-stories/zenefits" url={zenefits} bg="#ED4945">
        <BoxBg />
        <BoxText>Zenefits</BoxText>
      </BoxLink>
      <BoxLink to="/success-stories/realworld" url={realworld} bg="#F49531">
        <BoxBg />
        <BoxText>RealPage RealWorld</BoxText>
      </BoxLink>
    </Grid>
    <Grid flip>
      <BoxLink to="/success-stories/avia" url={avia} bg="#81AA4C">
        <BoxBg />
        <BoxText>AVIA Consumerism</BoxText>
      </BoxLink>
      <BoxLink to="/success-stories/thoughtleaders" url={thl} bg="#158BAF">
        <BoxBg />
        <BoxText>AmerisourceBergen ThoughtLeaders</BoxText>
      </BoxLink>
    </Grid>
    <Grid>
      <BoxLink to="/success-stories/thoughtspot" url={thoughtspot} bg="#116AAF">
        <BoxBg />
        <BoxText>Good Neighbor Pharmacy ThoughtSpot</BoxText>
      </BoxLink>
      <BoxLink to="/success-stories/ifpw" url={ifpw} bg="#283F8E">
        <BoxBg />
        <BoxText>IFPW CEO Roundtable</BoxText>
      </BoxLink>
      {/* <BoxLink to="/success-stories/exxonmobil" url={exxon} bg="#EA222E">
        <BoxBg />
        <BoxText>ExxonMobil Annual Shareholders Meeting</BoxText>
      </BoxLink> */}
    </Grid>
    <Grid flip>
      <BoxLink to="/success-stories/mwi" url={mwi} bg="#283F8E">
        <BoxBg />
        <BoxText>MWI Animal Health National Sales Meeting</BoxText>
      </BoxLink>
    </Grid>
  </Layout>
)

export default SuccessStories
