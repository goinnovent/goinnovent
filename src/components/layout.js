/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"

const theme = {
  colors: {
    dark: "#10161E",
    navy: "#112B4B",
    blue: "#449BD5",
    calvary: "#2A75A2",
    green: "#99CA43",
    yellow: "#F8D40A",
    white: "#fff",
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={theme}>
          <div className="page">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
