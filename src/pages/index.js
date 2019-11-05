import React from "react"

import Container from "@material-ui/core/Container"

import Banner from "../components/Banner"
import Card from "../components/Card"

const IndexPage = () => (
  <React.Fragment>
    <Banner />
    <Container>
      <Card />
      <Card right />
      <Card />
      <Card right />
      <Card />
      <Card right />
    </Container>
  </React.Fragment>
)

export default IndexPage
