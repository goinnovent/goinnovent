import React, { useState } from "react"
import { Dialog } from "@reach/dialog"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import PlayIcon from "../images/play"

function boxUrl({ url }) {
  if (typeof url === "string") {
    return css`
      background: url(${url}) no-repeat center center;
      background-size: cover;
    `
  }

  return null
}

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  padding: 10px;
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  text-decoration: none;
  ${boxUrl}
  height: 45vw;

  @media (min-width: 767px) {
    margin-top: 20px;
    padding: 20px;
  }
`

const Play = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  [data-play-icon] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }

  @media (min-width: 767px) {
    [data-play-icon] {
      width: 100px;
      height: 100px;
    }
  }
`

function GridVideo(props) {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <Box onClick={() => setShowDialog(true)} url={props.url}>
      <Play>
        <PlayIcon data-play-icon />
      </Play>
      <Dialog isOpen={showDialog} onDismiss={() => setShowDialog(false)}>
        <div className="video-wrapper">
          <svg viewBox="0 0 16 9" />
          <div className="content">
            <iframe
              src={`https://player.vimeo.com/video/${props.id}?autoplay=1`}
              width="640"
              height="360"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
        </div>
        <button
          className="dialog-close-button"
          onClick={() => setShowDialog(false)}
        >
          <span aria-hidden>×</span>
        </button>
      </Dialog>
    </Box>
  )
}

export default GridVideo
