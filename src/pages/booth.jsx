import React from "react"
import Layout from "../components/layout"

function BoothPage() {
  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <div
          style={{
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          <iframe
            src="https://seekbeak.com/v/grdzJgObjMB"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allowFullScreen="true"
            webkitAllowFullScreen
            mozallowfullscreen
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; xr-spatial-tracking; xr; geolocation"
          />
        </div>
      </div>
    </Layout>
  )
}

export default BoothPage
