import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { Container } from "../components/utils"
import SEO from "../components/seo"

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

const Success = () => (
  <Layout>
    <SEO title="Thank You!" />
    <Container>
      <Flex>
        <h3>
          Thank you for reaching out! We look forward to connecting with you.
        </h3>
      </Flex>
    </Container>
  </Layout>
)

export default Success
