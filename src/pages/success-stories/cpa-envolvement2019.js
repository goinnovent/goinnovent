import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import image1 from "../../images/cpa-envolvement/1.jpg"
import image2 from "../../images/cpa-envolvement/2.jpg"
import image3 from "../../images/cpa-envolvement/3.png"
import image4 from "../../images/cpa-envolvement/4.png"
import image5 from "../../images/cpa-envolvement/5.png"
import image6 from "../../images/cpa-envolvement/6.png"
import image7 from "../../images/cpa-envolvement/7.png"

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
      <Box url={image7} />
    </Grid>
  </Layout>
)

export default AviaPage
