import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import image1 from "../../images/avia-network/1.png"
import image2 from "../../images/avia-network/2.png"
import image3 from "../../images/avia-network/3.png"
import image4 from "../../images/avia-network/4.png"
import image5 from "../../images/avia-network/5.png"
import image6 from "../../images/avia-network/6.jpg"

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
      <Box bg="#aaa" url={image1} />
    </Grid>
    <Grid flip>
      <Box url={image2} />
      <Box url={image3} />
    </Grid>
    <Grid>
      <Box url={image4} />
      <Box url={image5} />
    </Grid>
    <Grid flip>
      <Box url={image6} />
    </Grid>
  </Layout>
)

export default AviaPage
