import React from "react"
import styled from "@emotion/styled"
import { space } from "styled-system"
import Amerisource from "../logos/amerisource"
import Avia from "../logos/avia"
import Compliant from "../logos/compliant"
import Ifpw from "../logos/ifpw"
import Realpage from "../logos/realpage"
import Zenefits from "../logos/zenefits"
import GNP from "../logos/gnp"
import Vectra from "../logos/vectra"

const RowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  ${RowWrap} + ${RowWrap} {
    margin-top: 0px;
  }
`

const LogoWrap = styled.div`
  flex: 1;
  display: block;
  ${space};

  svg {
    width: 100%;
  }
`

const Logos = () => (
  <Wrap>
    <RowWrap>
      <LogoWrap>
        <Amerisource />
      </LogoWrap>
      <LogoWrap>
        <Avia />
      </LogoWrap>
      <LogoWrap>
        <Ifpw />
      </LogoWrap>
      <LogoWrap>
        <Vectra />
      </LogoWrap>
    </RowWrap>

    <RowWrap>
      <LogoWrap>
        <Compliant />
      </LogoWrap>
      <LogoWrap>
        <Realpage />
      </LogoWrap>
      <LogoWrap>
        <Zenefits />
      </LogoWrap>
      <LogoWrap>
        <GNP />
      </LogoWrap>
    </RowWrap>
  </Wrap>
)

export default Logos
