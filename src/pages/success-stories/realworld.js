import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import GridVideo from "../../components/GridVideo"
import rw1 from "../../images/realworld/RW1.jpg"
import rw2 from "../../images/realworld/RW2.jpg"
import rw3 from "../../images/realworld/RW3.jpg"
import rw4 from "../../images/realworld/RW4.jpg"
import rw5 from "../../images/realworld/RW5.jpg"
import video from "../../images/realworld/video.jpg"

const RealPage = () => (
  <Layout>
    <Container>
      <GridHero title="RealPage RealWorld" bg="#F49531">
        RealPage’s annual conference, RealWorld, is the largest in the industry
        with more than 10,000 attendees. This four-day event consists of
        conference sessions, keynote speakers, breakout sessions, product
        support and entertainment. They asked us to create a “Wow!” effect. To
        accomplish this, we created and choreographed an original opening number
        that included an electrified string quartet, a troupe of dancers, and an
        original music track for the performers. The original music track was
        infused with the client’s key message and played during each
        presentation. To further enhance the experience and integrate their
        message, we broadcasted the music as attendees walked through the
        conference space.
      </GridHero>
    </Container>
    <Grid full mt={20}>
      <GridVideo url={video} id="324874927" />
    </Grid>
    <Grid>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Choreographed and produced an opening number with an original
            soundtrack
          </li>
          <li>
            Looped soundtrack throughout the venue during the course of the
            event, keeping attendees emotionally connected to RealPage’s message
            and theme
          </li>
          <li>
            Successfully created a connected experience for more than 10,000
            attendees
          </li>
          <li>
            Rehearsed daily and shot and edited a large format video piece to
            intertwine with the live performance
          </li>
        </ul>
      </Box>
      <Box bg="#aaa" url={rw1} />
    </Grid>
    <Grid flip>
      <Box url={rw2} />
      <Box url={rw3} />
    </Grid>
    <Grid>
      <Box url={rw4} />
      <Box url={rw5} />
    </Grid>
  </Layout>
)

export default RealPage
