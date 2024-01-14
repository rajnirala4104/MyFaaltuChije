import React, { Fragment } from 'react'
import { AddSection, Footer, Hero, StepSection } from '../sections'

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <StepSection />
      <AddSection />
      <Footer />
    </Fragment>
  )
}
