import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import GridVideo from "../../components/GridVideo"
import xom1 from "../../images/exxon/XOM1.jpg"
import xom2 from "../../images/exxon/XOM2.jpg"
import xom3 from "../../images/exxon/XOM3.jpg"
import xom4 from "../../images/exxon/XOM4.jpg"
import xom5 from "../../images/exxon/XOM5.jpg"
import video from "../../images/exxon/video.jpg"

const ExxonMobilPage = () => (
  <Layout>
    <SEO
      title="ExxonMobil Annual Shareholders Meeting"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Container>
      <GridHero title="ExxonMobil Annual Shareholders Meeting" bg="#EA222E">
        For years, ExxonMobil’s Annual stakeholder meeting repurposed the event
        branding and venue, limiting their ability to instill confidence in the
        positive impact ExxonMobil makes in the world. The goal was to create a
        visually motivating event brand. They challenged us to combine two
        established meetings with separate audiences all while creating a
        tech-forward, innovative theme. To do this, we recommended a venue
        change to magnify the Keynote address and bring their brand to life.
        This new enviornment allowed us to create an innovative stage design and
        take advantage of the opportunity to showcase their brand throughout the
        space.
      </GridHero>
    </Container>
    <Grid full mt={20}>
      <GridVideo url={video} id="324874424" />
    </Grid>
    <Grid>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Created a show stopping tradeshow floor with over 500+ exhibitors
          </li>
          <li>
            Increased customer attendance over a 5-year period from 500
            customers to over 5,500
          </li>
          <li>75+ breakout and continuing education classes</li>
        </ul>
      </Box>
      <Box bg="#aaa" url={xom1} />
    </Grid>
    <Grid flip>
      <Box url={xom2} />
      <Box url={xom3} />
    </Grid>
    <Grid>
      <Box url={xom4} />
      <Box url={xom5} />
    </Grid>
  </Layout>
)

export default ExxonMobilPage
