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
      <GridHero title="CPA Envolvement 2019" bg="#3DB14E">
        Envolvement is the annual conference hosted by CPA (Compliant Pharmacy
        Alliance), intended to unite cooperative members from across the United
        States. With 2019 being their first ever event, we had the opportunity
        to develop original branding that would set the tone for all
        communications and attendee interactions. We partnered with CPA to
        create a cohesive, valuable experience for their members by addressing
        pressing topics, creating meaningful connections and most importantly,
        leaving them with a sense of empowerment.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Performed in-depth interviews with board members, resulting in clear
            messaging strategies and their original event name, Envolvement
          </li>
          <li>
            Produced pre-event and post-event surveys to further understand the
            mindsets and goals of their attendees
          </li>
          <li>
            Created a new event brand that served as the foundation for all
            event-related materials
          </li>
          <li>
            Developed pre-event and onsite graphics that conveyed their bold
            message of empowerment
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
