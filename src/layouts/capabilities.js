import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/utils"
import CapabilitiesHero from "../components/CapabilitiesHero"

const CapabilitiesLayout = props => {
  console.log(props.pageContext.frontmatter)
  const { color } = props.pageContext.frontmatter

  return (
    <Layout>
      <CapabilitiesHero bg={color} />
      <Container mt={60} pb={40}>
        {props.children}
      </Container>
    </Layout>
  )
}

export default CapabilitiesLayout
