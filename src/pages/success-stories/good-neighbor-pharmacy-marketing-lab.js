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
      <GridHero title="Good Neighbor Pharmacy Marketing Lab" bg="#02B4C9">
        <em>Good Neighbor Pharmacy</em> is a family of locally owned, locally
        loved, independent pharmacies who are committed to providing
        personalized care to their patients. At ThoughtSpot, 
        <em>Good Neighbor Pharmacy's</em> annual conference and tradeshow, the
        marketing lab was one of the premier booths showcased at the tradeshow.
        Designed to inspire and educate pharmacies on the importance of
        marketing solutions tailored to their customers, we created a brand
        identity for the space that represented the pharmacist's uniqueness and
        stature in their community.
        <br /> <br />
        The marketing lab featured a pharmoji builder, a unique digital app
        where pharmacists could create and customize their own pharmoji avatar
        to use on their social media platforms and marketing campaigns. It also
        housed a genius bar where they received assistance from team members to
        optimize their social media presence. The final touch was the marketing
        theater, where customers could hear from marketing experts on a variety
        of topics. The marketing lab became a dedicated space for pharmacists to
        grow their marketing knowledge and experience solutions that positively
        impact the way they do business.
      </GridHero>
    </Container>
    <Grid mt={20}>
      <Box>
        <h6>Quick view:</h6>
        <ul>
          <li>
            Created a Marketing Lab brand symbolizing the independent pharmacies
            unique communities they serve
          </li>
          <li>
            Customized kiosks to highlight each area of marketing solutions
          </li>
          <li>
            Designed a Pharmoji Builder - a unique digital app to customize
            their avatar for their next marketing campaign
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
