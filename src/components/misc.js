import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { color } from "styled-system"

function gridCols({ flip = false, full = false }) {
  if (full) {
    return css`
      grid-template-columns: 1fr;
    `
  } else if (flip) {
    return css`
      grid-template-columns: auto 41vw;
    `
  } else {
    return css`
      grid-template-columns: 41vw auto;
    `
  }
}

function boxBg({ bg }) {
  if (typeof bg === "string") {
    return css`
      background: url(${bg}) no-repeat center center;
      background-size: cover;
    `
  }

  return null
}

const Box = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 20px 25px;
  font-weight: 700;
  font-size: 22px;
  ${boxBg};
  ${color};
`

const Grid = styled.div`
  display: grid;
  grid-template-rows: 41vw;
  grid-gap: 1em;
  margin-bottom: 1em;
  ${gridCols};

  & > ${Box}:first-child {
    margin-left: 1em;
  }

  & > ${Box}:last-child {
    margin-right: 1em;
  }
`

const MiscPage = () => (
  <div>
    <Grid>
      <Box bg="navy" color="white">
        Event Messaging
      </Box>
      <Box bg="blue" color="white">
        What is good branding?
      </Box>
    </Grid>

    <Grid flip>
      <Box bg="green" color="white">
        Lorem Ipsum Dolor Sit
      </Box>
      <Box bg="yellow" color="white">
        Amet Lorem Ipsum
      </Box>
    </Grid>

    <Grid full>
      <Box bg="navy" color="white">
        Lorem Ipsum Dolor Sit
      </Box>
    </Grid>

    <br />
    <br />

    {/* <Grid>
      <Box bg="navy" color="white" bg={zenefits}>
        Event Messaging
      </Box>
      <Box bg="blue" color="white" bg={lasVegas}>
        What is good branding?
      </Box>
    </Grid>

    <Grid flip>
      <Box bg="green" color="white" bg={thoughtspot}>
        Lorem Ipsum Dolor Sit
      </Box>
      <Box bg="yellow" color="white" bg={zenefits}>
        Amet Lorem Ipsum
      </Box>
    </Grid>

    <Grid full>
      <Box bg="navy" color="white" bg={thoughtspot}>
        Lorem Ipsum Dolor Sit
      </Box>
    </Grid> */}
  </div>
)

export { Box, Grid }
