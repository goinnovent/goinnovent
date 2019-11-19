import React from "react"
import Layout from "../../components/layout"
import { Container, Grid, GridHero, Box } from "../../components/utils"
import image1 from "../../images/gnp-marketing-lab/1.jpg"
import image2 from "../../images/gnp-marketing-lab/2.jpg"
import image3 from "../../images/gnp-marketing-lab/3.jpg"
import image4 from "../../images/gnp-marketing-lab/4.jpg"
import image5 from "../../images/gnp-marketing-lab/5.jpg"
import image6 from "../../images/gnp-marketing-lab/6.jpg"
import image7 from "../../images/gnp-marketing-lab/7.png"

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
