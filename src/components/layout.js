

import * as React from "react"

import "../styles/layout.css"

const Layout = ({ children }) => {


  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Santiago Doval
        </footer>
      </div>
    </>
  )
}

export default Layout
