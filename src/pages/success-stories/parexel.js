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
      <GridHero title="Parexel" bg="#830854">
        Parexel’s first-ever Global Leadership and Sales Summit Meeting brought
        leaders and sales teams from all over the world together to Dallas,
        Texas. Their objective was to celebrate their accomplishments, address
        challenges, and share ideas for accelerating their growth in 2020.
        Parexel partnered with Innovent to manage the event space planning,
        design and execute the EXPO, and oversee general session production.
        <br /> <br />
        We took Parexel's new brand identity and determined a strategic approach
        to bring their message to the forefront of every visual opportunity.
        Through the event dress, app, general session, opening night reception,
        and EXPO, we infused their voice to inspire their leaders and create a
        lasting first impression.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Infused Parexel's new brand identity into every touchpoint to create
            a feeling of connectedness and inspiration
          </li>
          <li>
            Designed and executed the EXPO to showcase the importance of
            Parexel's work and commitment of delivering value to their customers
          </li>
          <li>
            Produced an engaging General Session that led to discovering common
            challenges and innovative solutions for 2020
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
