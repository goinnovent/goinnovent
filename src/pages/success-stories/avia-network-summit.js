import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import thl1 from "../../images/avia/Avia1.jpg"
import thl2 from "../../images/avia/Avia2.jpg"
import thl3 from "../../images/avia/Avia3.jpg"
import thl4 from "../../images/avia/Avia4.jpg"
import thl5 from "../../images/avia/Avia5.jpg"

const AviaPage = () => (
  <Layout>
    <Container>
      <GridHero title="AVIA Network Summit" bg="#8DB060">
        The AVIA Network Summit attracts 40+ of the largest, most
        forward-thinking health systems in the country. In its third year, the
        AVIA Network Summit created a singular focus on the outsized impact of
        digital. The goal was to bring together practical perspectives on how
        health systems could incorporate digital in every aspect of their
        organizations.
        <br />
        <br />
        Innovent created opportunities for meaningful face-to-face engagement by
        designing a partner expo and producing an impactful general session.
        Innovent partnered with AVIA to develop main stage presentations that
        conveyed ways they addressed consumerism, caring for vulnerable
        populations, and sustainably improving operational efficiency.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Made critical connections by designing and producing an engaging
            partner expo
          </li>
          <li>
            Designed main stage presentations and messaging that conveyed AVIA’s
            compelling success stories of building healthier communities
          </li>
          <li>
            Built a strategic event app that inspired meaningful conversations
          </li>
          <li>
            Developed an event brand identity that represented AVIA's connection
            to their customers and purpose
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
  </Layout>
)

export default AviaPage
