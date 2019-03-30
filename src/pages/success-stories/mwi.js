import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import nsm1 from "../../images/nsm/NSM1.jpg"
import nsm2 from "../../images/nsm/NSM2.jpg"
import nsm3 from "../../images/nsm/NSM3.jpg"
import nsm4 from "../../images/nsm/NSM4.jpg"
import nsm5 from "../../images/nsm/NSM5.jpg"
import nsm6 from "../../images/nsm/NSM6.jpg"
import nsm7 from "../../images/nsm/NSM7.jpg"

const MWIPage = () => (
  <Layout>
    <SEO title="MWI Animal Health National Sales Meeting" />
    <Container>
      <GridHero title="MWI Animal Health National Sales Meeting" bg="#072141">
        The MWI Animal Health National Sales Meeting brings sales associates
        together with key vendor partners for a five-day event to make a
        meaningful difference in business, animal health, and the world. The
        National Sales Meeting encompasses numerous educational breakout
        sessions and General Session presentations. Innovent was challenged to
        construct a new Event Messaging Architecture to reflect the recent
        changes in the company. After establishing their anchor message, we
        worked with the leadership team to communicate it to all their internal
        speakers and weave it into their workgroup sessions. We then connected
        it throughout the event dress, the two-day trade show, and the main
        stage presentations.
        <br />
        <br />
        This was a unique opportunity to help inspire and educate MWI sales
        associates to reimage how they do business.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Designed and produced entrance structures, event signage, and
            general session graphics
          </li>
          <li>
            Developed presentations and produced two-day general session for
            700+ sales associates
          </li>
          <li>
            Created a new event messaging architecture used for all
            communications, event dress and presentations to inspire sales
            associates
          </li>
        </ul>
      </Box>
      <Box url={nsm1} />
    </Grid>
    <Grid flip>
      <Box url={nsm3} />
      <Box url={nsm2} />
    </Grid>
    <Grid>
      <Box url={nsm4} />
      <Box url={nsm5} />
    </Grid>
    <Grid flip>
      <Box url={nsm6} />
      <Box url={nsm7} />
    </Grid>
  </Layout>
)

export default MWIPage
