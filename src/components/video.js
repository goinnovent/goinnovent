import React, { useState } from "react"
import styled from "@emotion/styled"
import { Dialog } from "@reach/dialog"
import homevideo from "../images/home-video.png"
import PlayIcon from "../images/play"

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  img {
    width: 100%;
  }

  [data-play-icon] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 40px;

    [data-play-icon] {
      width: 100px;
      height: 100px;
    }
  }
`

const Video = () => {
  const [showDialog, setShowDialog] = useState(false)
  return (
    <Wrap onClick={() => setShowDialog(true)}>
      <img src={homevideo} alt="" />
      <PlayIcon data-play-icon />
      <Dialog isOpen={showDialog} onDismiss={() => setShowDialog(false)}>
        <div className="video-wrapper">
          <svg viewBox="0 0 16 9" />
          <div className="content">
            <iframe
              src={`https://player.vimeo.com/video/322915073?autoplay=1`}
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
              title="vimeo video"
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
    </Wrap>
  )
}

export default Video
