import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { color, space } from "styled-system"
import { fluidType } from "../utils"

export const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 17px;
  color: #636463;
  ${space};

  p {
    margin-top: 0;
    line-height: 1.5;
  }

  strong {
    font-weight: 700;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 10px;
  }

  li {
    margin-bottom: 4px;
  }

  img {
    display: block;
    width: 100%;
    margin: 80px auto;
    max-width: 1100px;
  }

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

function gridCols({ flip = false, full = false }) {
  if (full) {
    return css`
      grid-template-columns: 1fr;
    `
  } else if (flip) {
    return css`
      grid-template-columns: 1fr;

      @media (min-width: 620px) {
        grid-template-columns: auto 41vw;
      }
    `
  } else {
    return css`
      grid-template-columns: 1fr;

      @media (min-width: 620px) {
        grid-template-columns: 41vw auto;
      }
    `
  }
}

function boxUrl({ url }) {
  if (typeof url === "string") {
    return css`
      background: url(${url}) no-repeat center center;
      background-size: cover;
    `
  }

  return null
}

function boxChildren({ children, feature }) {
  if (feature) {
    return null
  }

  if (children && children.length > 0) {
    return css`
      padding-top: 40px;
      background-color: #535353;
      color: #fff;
      display: unset;
      text-align: left;
      align-items: unset;
      justify-content: unset;

      h6 {
        font-size: 23px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 20px;
      }

      p,
      ul,
      li {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
      }

      ul {
        margin-left: 0;
        padding-left: 1.2rem;
        margin-bottom: 20px;
      }

      li + li {
        margin-top: 1em;
      }
    `
  }
}

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 20px 25px;
  font-weight: 700;
  font-size: 22px;
  ${boxUrl};
  ${color};
  ${boxChildren};
  color: #fff;
  text-decoration: none;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  margin-bottom: 1em;
  ${gridCols};
  ${space};
  margin-left: 10px;
  margin-right: 10px;

  ${Box} {
    min-height: 41vw;
  }

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const GridHeroTop = styled.div`
  padding: 80px 20px 20px;
  display: flex;
  align-items: flex-end;
  color: #fff;
  font-size: ${fluidType(26, 45)};
  font-weight: bold;
  ${color};
`

const GridHeroBottom = styled.div`
  background-color: #535353;
  color: #fff;
  padding: 40px 20px;
  line-height: 1.5;
`

export const GridHero = ({ title, bg, ...props }) => (
  <>
    <GridHeroTop bg={bg}>{title}</GridHeroTop>
    <GridHeroBottom {...props} />
  </>
)

export const FormHeader = styled.h3`
  margin: 0 0 8px;
  font-size: 23px;
  font-weight: 700;
  color: #6d6e6d;
`

export const FormSubheader = styled.p`
  margin: 0 0 40px;
  color: #6d6e6d;
`

export const FieldGroup = styled.div`
  margin-bottom: 20px;
  display: block;
  ${space};
`

export const Button = styled.button`
  display: block;
  border: none;
  padding: 8px;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  width: 100%;
  max-width: 480px;
  -webkit-appearance: none;
  -moz-appearance: none;
  ${color};
  ${space};
`
