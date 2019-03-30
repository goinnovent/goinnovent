import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import GridVideo from "../../components/GridVideo"
import zen1 from "../../images/zenefits/ZEN1.jpg"
import zen2 from "../../images/zenefits/ZEN2.jpg"
import zen3 from "../../images/zenefits/ZEN3.jpg"
import zen4 from "../../images/zenefits/ZEN4.jpg"
import zen5 from "../../images/zenefits/ZEN5.jpg"
import video from "../../images/zenefits/video.jpg"

const ZenefitsPage = () => (
  <Layout>
    <SEO title="Zenefits SHIFT" />
    <Container>
      <GridHero title="Zenefits SHIFT" bg="#ED4945">
        The aim of Zenefits SHIFT was a multi-faceted hybrid event with the
        objective of creating “long legs” to drive engagement long after the day
        of the event. Zenefits teamed up with us to creatively come up with ways
        to market Zenefits SHIFT, create a compelling registration website,
        build and run the live stream website, provide stage rendering and
        scenic, edit and provide five canned videos to maximize Zenefits SHIFT
        content, and continue to update the Zenefits SHIFT website to increase
        traction and enhance engagement.
      </GridHero>
    </Container>
    <Grid full>
      <GridVideo url={video} id="324875729" />
    </Grid>
    <Grid>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>Produced event start to finish in 6 weeks</li>
          <li>Used downtown San Francisco HQ for location to save $$$</li>
          <li>Broadcasted Worldwide to over 900 viewers</li>
          <li>Invited VIP Live Audience: 65</li>
          <li>Over 500 unique visits since the event</li>
          <li>
            Summary Event Video was produced and live 3 days after the event
          </li>
        </ul>
      </Box>
      <Box bg="#aaa" url={zen1} />
    </Grid>
    <Grid flip>
      <Box url={zen2} />
      <Box url={zen3} />
    </Grid>
    <Grid>
      <Box url={zen4} />
      <Box url={zen5} />
    </Grid>
  </Layout>
)

export default ZenefitsPage
