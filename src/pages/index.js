import React from "react"
import './index.css'

import Banner from '../components/Banner'
import Card from '../components/Card'

const IndexPage = () => (
  <React.Fragment>
    <Banner/>
    <div className="container">
    <Card/>
    <Card right/>
    <Card/>
    <Card right/>
    <Card/>
    <Card right/>
    </div>
  </React.Fragment>
)

export default IndexPage
