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
      <GridHero title="AVIA Consumerism" bg="#81AA4C">
        AVIA runs the nation’s leading network for health systems seeking to
        innovate and transform through digital strategy. AVIA’s two-day workshop
        was designed to immerse physicians and healthcare executives in the
        future of how consumers experience healthcare through everyday
        technologies. They needed a unique way to take their attendees through
        the patient’s journey and demonstrate how they could potentially utilize
        AVIA’s unique capabilities. Over the course of two months, we partnered
        with AVIA to conceptualize and illustrate this journey using unique
        environments and real-life personas.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            With a focus on DIY Care, Consumer Genomics, Remote Monitoring and
            Health Records, we created life-size visuals to showcase different
            types of patients
          </li>
          <li>
            Through creative storytelling, attendees were able to visualize the
            future of healthcare and directly see how they could leverage AVIA’s
            capabilities
          </li>
          <li>
            In creating four powerful life-size infographics, we answered key
            questions about how consumers will experience healthcare in the very
            near future
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
