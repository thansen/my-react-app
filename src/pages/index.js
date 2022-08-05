import * as React from "react"
import { Link } from "gatsby"

import Section from "../components/Section"
import Layout from "../components/layout"
import Card from "../components/Card"
import Wave from "../components/Wave"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Complete courses about the best tools and design systems.</p>
        <Link to="/page-2/" className="Button">Watch the video</Link>
        <div className="Logos">
          <img alt="" src={require('../images/logo-sketch.png').default} width="50" />
          <img alt="" src={require('../images/logo-figma.png').default} width="50" />
          <img alt="" src={require('../images/logo-studio.png').default} width="50" />
          <img alt="" src={require('../images/logo-framer.png').default} width="50" />
          <img alt="" src={require('../images/logo-react.png').default} width="50" />
          <img alt="" src={require('../images/logo-swift.png').default} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courseS, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg').default} />
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg').default} />
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper3.jpg').default} />
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper4.jpg').default} />

        </div>
    </div>
    <Section 
          image={require('../images/wallpaper4.jpg').default}
          logo={require('../images/logo-react.png').default}
          title="Prototype"
          text="This is some body copy that should be a lot longer. I'm going to type a little more to get it going. I wonder how this styled-components stuff jives with tailwind, seems unnecessary kinda."
      />
  </Layout>
)

export default IndexPage
