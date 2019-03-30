import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CapabilitiesHero } from "./capabilities"
import { Container } from "../components/utils"
import BrandDevelopment from "../content/branddevelopment.mdx"

const BrandDevelopmentPage = () => (
  <Layout>
    <SEO title="Brand Development" />
    <CapabilitiesHero bg="green" />
    <Container mt={60} pb={40}>
      <BrandDevelopment />
    </Container>
  </Layout>
)

export default BrandDevelopmentPage
