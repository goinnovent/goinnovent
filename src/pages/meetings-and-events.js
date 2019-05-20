import React from "react"
import Layout from "../components/layout"
import { CapabilitiesHero } from "./capabilities"
import { Container } from "../components/utils"
import MeetingsEvents from "../content/meetingsevents.mdx"

const MeetingsEventsPage = () => (
  <Layout>
    <CapabilitiesHero bg="blue" />
    <Container pb={40}>
      <MeetingsEvents />
    </Container>
  </Layout>
)

export default MeetingsEventsPage
