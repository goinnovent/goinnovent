import React from "react"
import styled from "@emotion/styled"
import slide1 from "../hero/slide1.svg"
import slide2 from "../hero/slide2.svg"
import slide3 from "../hero/slide3.svg"

function fluidType(min, max, minView = 420, maxView = 1440) {
  return `calc(${min}px + (${max} - ${min}) * ((100vw - ${minView}px) / (${maxView} - ${minView})))`
}

const Overflow = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Wrap = styled.div`
  position: relative;
  display: flex;
  transform: translate3d(${p => p.activeIndex * -100}%, 0, 0);
  transition: all 200ms ease-out;
  width: 100%;
  margin-bottom: 10px;

  svg {
    width: 100%;
  }

  .aspectRatioSizer {
    display: grid;
  }

  .aspectRatioSizer > * {
    grid-area: 1 / 1 / 2 / 2;
  }
`

const Item = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
`

const Slide = styled.div`
  background: url(${p => p.url}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${fluidType(20, 60)};

  h2 {
    font-size: ${fluidType(40, 112)};
    color: #fff;
    margin: 0;
  }

  p {
    font-size: ${fluidType(16, 42)};
    color: #fff;
    margin: 0;
  }
`

class Slider extends React.Component {
  state = {
    activeIndex: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 4000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    const children = React.Children.toArray(this.props.children) || []
    if (this.state.activeIndex === children.length - 1) {
      this.setState({ activeIndex: 0 })
    } else {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  handleClick = val => () => {
    this.setState(prevState => ({
      activeIndex: prevState.activeIndex + val,
    }))
  }

  jump = val => () => {
    this.setState({ activeIndex: val })
  }

  render() {
    const { activeIndex } = this.state
    const children = React.Children.toArray(this.props.children) || []

    return (
      <Overflow>
        <Wrap activeIndex={activeIndex}>
          {children.map((child, index) => (
            <Item className="aspectRatioSizer" key={index}>
              <svg viewBox="0 0 1200 507" />
              {child}
            </Item>
          ))}
        </Wrap>
        {/* <Pagination>
          {children.map((child, index) => (
            <PageItem
              key={index}
              bg={child.props.bg}
              onClick={this.jump(index)}
            />
          ))}
        </Pagination> */}
      </Overflow>
    )
  }
}

const Hero = () => (
  <Wrap>
    <Slider>
      <Slide url={slide1} bg="yellow">
        <h2>Deliver.</h2>
        <p>Provide beyond expectations.</p>
      </Slide>
      <Slide url={slide2} bg="green">
        <h2>Create.</h2>
        <p>Bring into existence.</p>
      </Slide>
      <Slide url={slide3} bg="blue">
        <h2>Connect.</h2>
        <p>Establish a link.</p>
      </Slide>
    </Slider>
  </Wrap>
)

export default Hero
