import React from "react"
import styled from "@emotion/styled"
import { color } from "styled-system"
import { fluidType } from "../utils"

const Wrapper = styled.div`
  min-height: ${fluidType(160, 292)};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  ${color};

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Title = styled.h3`
  display: block;
  margin: 0;
  color: #fff;
  font-size: ${fluidType(34, 65)};
  font-weight: bold;
`

function SmallHero({ title, children, ...props }) {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

export default SmallHero
