import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import thl1 from "../../images/thl/THL1.jpg"
import thl2 from "../../images/thl/THL2.jpg"
import thl3 from "../../images/thl/THL3.jpg"
import thl4 from "../../images/thl/THL4.jpg"
import thl5 from "../../images/thl/THL5.jpg"
import thl6 from "../../images/thl/THL6.jpg"
import thl7 from "../../images/thl/THL7.jpg"

const Thoughtleaders = () => (
  <Layout>
    <SEO title="AmerisourceBergen ThoughtLeaders" />
    <Container>
      <GridHero title="AmerisourceBergen ThoughtLeaders" bg="#158BAF">
        AmerisourceBergen is a fortune 500 company which provides the
        pharmaceutical products and business solutions that improve access to
        care. ThoughtLeaders is an exclusive, invite-only event that unites top
        leaders from across the company to collaborate and generate business
        solutions. This year their message was centered around creating
        inspiration and optimism for the future. We were tasked with creating
        communications that cascaded their messaging and helped associates
        understand the objectives for the following year. With over 40 mainstage
        presentations, this three-day event was packed with knowledge-sharing
        and education. By partnering with their content teams, we were able to
        cohesively tell a compelling story in every presentation throughout the
        event.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Leading with inspirational creative we designed and produced over 40
            presentations, an opening video, and thought-provoking breakout
            sessions
          </li>
          <li>
            To keep the motivation high, we set up a short inspirational speech
            from the CEO during the evening event at Reading Terminal Market in
            Philadelphia
          </li>
          <li>
            Leading with inspirational creative, we designed and produced over
            40 presentations, an opening video and thought-provoking breakout
            sessions
          </li>
        </ul>
      </Box>
      <Box bg="#aaa" url={thl1} />
    </Grid>
    <Grid flip>
      <Box url={thl2} />
      <Box url={thl3} />
    </Grid>
    <Grid>
      <Box url={thl4} />
      <Box url={thl5} />
    </Grid>
    <Grid flip>
      <Box url={thl6} />
      <Box url={thl7} />
    </Grid>
  </Layout>
)

export default Thoughtleaders
