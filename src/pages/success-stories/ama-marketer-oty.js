import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import image1 from "../../images/ama-marketer/1.png"
import image2 from "../../images/ama-marketer/2.jpg"
import image3 from "../../images/ama-marketer/3.png"
import image4 from "../../images/ama-marketer/4.png"
import image5 from "../../images/ama-marketer/5.png"

const AviaPage = () => (
  <Layout>
    <Container>
      <GridHero title="AMA Marketer of the Year" bg="#E9A52B">
        The Marketer of the Year Awards Gala is all about recognizing top
        marketers in the DFW area. This gala enables AMA members to showcase
        their successes across 25+ categories. AMA DFW approached our team in
        search of a modern, sophisticated update to their branding. We took it a
        step further and completely reinvented their Marketer of the Year brand
        that reflected their “claim your crown” theme. Every attendee
        interaction reinforced a sense of royal recognition that complemented
        our use of majestic visuals. Our rebrand will raise expectations for
        message-driven branding for years to come!
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>Reinvented the Marketer of the Year branding and event theme</li>
          <li>
            Provided assets to promote the event including emails, magazine ads,
            social graphics and event signage
          </li>
          <li>
            Created video imagery and content for pre-event and onsite use
          </li>
          <li>
            Designed an 84-page program to recognize all award finalists and
            showcase event sponsors
          </li>
        </ul>
      </Box>
      <Box bg="#aaa" url={image3} />
    </Grid>
    <Grid flip>
      <Box url={image2} />
      <Box url={image1} />
    </Grid>
    <Grid>
      <Box url={image5} />
      <Box url={image4} />
    </Grid>
  </Layout>
)

export default AviaPage
