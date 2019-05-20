import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import ifpw1 from "../../images/ifpw/IFPW1.jpg"
import ifpw2 from "../../images/ifpw/IFPW2.jpg"
import ifpw3 from "../../images/ifpw/IFPW3.jpg"
import ifpw4 from "../../images/ifpw/IFPW4.jpg"

const IFPWPage = () => (
  <Layout>
    <Container>
      <GridHero title="Uniting Global Healthcare Leaders" bg="#283F8E">
        The IFPW CEO Roundtable is a two-day event that occurs annually in a
        different location around the world. It’s an assembly of Chief
        Executives of wholesaler and national distribution association members
        of the International Federation of Pharmaceutical Wholesalers (IFPW) to
        discuss the challenges facing the global pharmaceutical industry and
        distribution sector. IFPW sought to differentiate itself by creating a
        legacy brand they could build on year after year. We started by creating
        a strong brand identity that resonated with their diverse global
        members. We then conceptualized an environment to reinforce their
        message in every aspect of the event. From the registration website,
        communications, and sponsorships, to the swag and intimate stage design,
        the overall atmosphere left the largest and most influential leaders in
        the pharmaceutical industry inspired.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Created an inspired intimate experience for 60+ attendees from 19
            different countries
          </li>
          <li>Produced a high-touch networking reception & dinner in London</li>
          <li>Created a brand identity that echoes IFPW’s unique history</li>
        </ul>
      </Box>
      <Box bg="#aaa" url={ifpw1} />
    </Grid>
    <Grid flip>
      <Box url={ifpw2} />
      <Box url={ifpw3} />
    </Grid>
    <Grid>
      <Box url={ifpw4} />
    </Grid>
  </Layout>
)

export default IFPWPage
