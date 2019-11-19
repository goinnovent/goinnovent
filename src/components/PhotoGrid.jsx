import React from "react"
import styled from "@emotion/styled"
import teamData from "../teamData"
import { get, space } from "styled-system"
import { fluidType } from "../utils"

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 25vw);
  grid-gap: 10px;
  ${space};
  margin-left: 10px;
  margin-right: 10px;

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 25vw);
  }
`

const PhotoMeta = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  background: ${p => get(`colors.${p.bgHover}`, "#aaa")(p)};
  transform: translateY(10px);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;

  @media (min-width: 767px) {
    padding: 30px;
  }

  h6,
  p {
    margin: 0;
    font-size: ${fluidType(16, 23)};
    color: #fff;
  }

  h6 {
    font-weight: 700;
  }
`

const PhotoWrap = styled.span`
  display: block;
  width: 80%;
  height: 80%;

  svg {
    width: 100%;
    height: 100%;
  }
`

const Photo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${p => get(`colors.${p.bg}`, "#aaa")(p)};
  overflow: hidden;

  &:hover {
    background: ${p => get(`colors.${p.bgHover}`, "#aaa")(p)};

    ${PhotoMeta} {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

const GridItem = ({ name, title, svg: Comp, ...props }) => (
  <Photo {...props}>
    <PhotoWrap>
      <Comp />
    </PhotoWrap>
    <PhotoMeta {...props}>
      <h6>{name}</h6>
      <p>{title}</p>
    </PhotoMeta>
  </Photo>
)

export default props => (
  <PhotoGrid {...props}>
    {teamData.map(item => (
      <GridItem key={item.name} {...item} />
    ))}
  </PhotoGrid>
)
