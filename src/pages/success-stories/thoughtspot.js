import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import ths1 from "../../images/thoughtspot/THS1.jpg"
import ths2 from "../../images/thoughtspot/THS2.jpg"
import ths3 from "../../images/thoughtspot/THS3.jpg"
import ths4 from "../../images/thoughtspot/THS4.jpg"
import ths5 from "../../images/thoughtspot/THS5.jpg"
import ths6 from "../../images/thoughtspot/THS6.jpg"
import ths7 from "../../images/thoughtspot/THS7.jpg"
import ths8 from "../../images/thoughtspot/THS8.jpg"
import ths9 from "../../images/thoughtspot/THS9.jpg"
import ths10 from "../../images/thoughtspot/THS10.jpg"
import ths11 from "../../images/thoughtspot/THS11.jpg"

const Thoughtspot = () => (
  <Layout>
    <Container>
      <GridHero title="Good Neighbor Pharmacy ThoughtSpot" bg="#116AAF">
        Good Neighbor Pharmacy is a cooperative network containing more than
        4,500 independently owned and operated pharmacies. ThoughtSpot, Good
        Neighbor Pharmacy’s annual event, connects over 5,500 attendees
        including current customers, prospective customers, exhibitors and
        internal sales associates. For over a decade, we’ve partnered with Good
        Neighbor Pharmacy to infuse their “United by Independence” messaging
        throughout the attendees’ experience. Driven by an event brand developed
        by our team, we continue to produce general session, craft event
        communications and develop strategic sponsorship opportunities for
        ThoughtSpot.
      </GridHero>
    </Container>
    <Grid mt={20}>
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
      <Box bg="#aaa" url={ths1} />
    </Grid>
    <Grid flip>
      <Box url={ths2} />
      <Box url={ths3} />
    </Grid>
    <Grid>
      <Box url={ths4} />
      <Box url={ths5} />
    </Grid>
    <Grid flip>
      <Box url={ths6} />
      <Box url={ths7} />
    </Grid>
    <Grid>
      <Box url={ths8} />
      <Box url={ths9} />
    </Grid>
    <Grid flip>
      <Box url={ths10} />
      <Box url={ths11} />
    </Grid>
  </Layout>
)

export default Thoughtspot
