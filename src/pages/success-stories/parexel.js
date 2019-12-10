import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import image1 from "../../images/parexel/1.jpg"
import image2 from "../../images/parexel/2.jpg"
import image3 from "../../images/parexel/3.jpg"
import image4 from "../../images/parexel/4.jpg"
import image5 from "../../images/parexel/5.jpg"
import image7 from "../../images/parexel/7.jpg"
import image8 from "../../images/parexel/8.jpg"
import image9 from "../../images/parexel/9.jpg"
import image10 from "../../images/parexel/10.jpg"

const AviaPage = () => (
  <Layout>
    <Container>
      <GridHero title="Parexel" bg="#830854">
        Parexel’s first-ever Global Leadership and Sales Summit Meeting brought
        leaders and sales teams from all over the world together to Dallas,
        Texas. Their objective was to celebrate their accomplishments, address
        challenges, and share ideas for accelerating their growth in 2020.
        Parexel partnered with Innovent to manage the event space planning,
        design and execute the expo, and oversee General Session production.
        <br /> <br />
        We took Parexel's new brand identity and determined a strategic approach
        to bring their message to the forefront of every visual opportunity.
        Through the event dress, app, General Session, opening night reception
        and expo, we infused their voice to inspire their leaders and create a
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
            Designed and executed the expo to showcase the importance of
            Parexel's work and commitment of delivering value to their customers
          </li>
          <li>
            Produced an engaging General Session that led to discovering common
            challenges and innovative solutions for 2020
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
      <Box url={image7} />
      <Box url={image5} />
    </Grid>
    <Grid flip>
      <Box url={image10} />
      <Box url={image4} />
    </Grid>
    <Grid>
      <Box url={image8} />
      <Box url={image9} />
    </Grid>
  </Layout>
)

export default AviaPage
