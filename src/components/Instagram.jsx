// eslint-disable jsx-a11y/alt-text
import React, { Component } from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 25vw);
  position: relative;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Photo = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  [data-icon] {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 16px;
  }

  @media (min-width: 767px) {
    [data-icon] {
      width: 36px;
    }
  }
`

const InstaIcon = props => (
  <svg viewBox="0 0 36 36" {...props} data-icon>
    <g fill="#FFFFFE" fillRule="evenodd">
      <path d="M18.32 23.59c-3.2 0-5.79-2.59-5.79-5.79s2.59-5.8 5.79-5.8 5.8 2.6 5.8 5.8c0 3.2-2.6 5.79-5.8 5.79zm0-14.72c-4.93 0-8.93 4-8.93 8.93s4 8.93 8.93 8.93 8.93-4 8.93-8.93-4-8.93-8.93-8.93zm9.29-2.44c-1.16 0-2.09.93-2.09 2.08 0 1.16.93 2.09 2.09 2.09 1.15 0 2.08-.93 2.08-2.09 0-1.15-.93-2.08-2.08-2.08" />
      <path d="M32.48 24.82c-.08 1.7-.36 2.62-.6 3.23-.32.82-.69 1.4-1.3 2-.61.61-1.19.99-2 1.3-.61.24-1.54.53-3.23.6-1.83.09-2.38.1-7.03.1-4.64 0-5.19-.01-7.03-.1-1.69-.07-2.61-.36-3.22-.6-.82-.31-1.4-.69-2-1.3-.61-.6-.99-1.18-1.3-2-.24-.61-.53-1.53-.6-3.23-.09-1.83-.1-2.38-.1-7.02 0-4.65.01-5.2.1-7.03.07-1.7.36-2.62.6-3.23.31-.81.69-1.39 1.3-2 .6-.61 1.18-.98 2-1.3.61-.24 1.53-.52 3.22-.6 1.84-.08 2.39-.1 7.03-.1 4.65 0 5.2.02 7.03.1 1.69.08 2.62.36 3.23.6.81.32 1.39.69 2 1.3.61.61.98 1.19 1.3 2 .24.61.52 1.53.6 3.23.08 1.83.1 2.38.1 7.03 0 4.64-.02 5.19-.1 7.02zM34.8 6.41a8.33 8.33 0 0 0-2.01-3.08 8.33 8.33 0 0 0-3.08-2.01C28.61.89 27.34.6 25.49.51c-1.85-.08-2.44-.1-7.17-.1-4.72 0-5.31.02-7.17.1-1.85.09-3.11.38-4.22.81a8.493 8.493 0 0 0-3.08 2.01c-.97.96-1.56 1.93-2.01 3.08-.43 1.1-.72 2.37-.8 4.22-.09 1.85-.11 2.44-.11 7.17 0 4.72.02 5.31.11 7.17.08 1.85.37 3.11.8 4.22.45 1.14 1.04 2.11 2.01 3.08.97.97 1.94 1.56 3.08 2.01 1.11.43 2.37.72 4.22.8 1.86.09 2.45.11 7.17.11 4.73 0 5.32-.02 7.17-.11 1.85-.08 3.12-.37 4.22-.8 1.15-.45 2.12-1.04 3.08-2.01.97-.97 1.57-1.94 2.01-3.08.43-1.11.72-2.37.81-4.22.08-1.86.1-2.45.1-7.17 0-4.73-.02-5.32-.1-7.17-.09-1.85-.38-3.12-.81-4.22z" />
    </g>
  </svg>
)

class Feed extends Component {
  state = {
    photos: [],
    loaded: false,
    failed: false,
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  fetchPhotos() {
    fetch(
      "https://api.instagram.com/v1/users/self/media/recent/?access_token=5641584294.1677ed0.84e7d7e6e69449ae89169ac6caa76314"
    )
      .then(res => res.json())
      .then(({ data }) => {
        this.setState(() => ({ photos: data, loaded: true }))
      })
      .catch(e => {
        this.setState(() => ({ photos: [], loaded: false, failed: true }))
      })
  }

  render() {
    if (this.state.failed) {
      return null
    }

    if (!this.state.loaded) {
      return null
    }

    return (
      <Wrapper>
        {this.state.photos &&
          Array.isArray(this.state.photos) &&
          this.state.photos.length > 0 &&
          this.state.photos.slice(0, 8).map(photo => (
            <Photo
              key={photo.id}
              href={photo.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={photo.images.standard_resolution.url} alt="" />
              <InstaIcon />
            </Photo>
          ))}
      </Wrapper>
    )
  }
}

export default Feed
