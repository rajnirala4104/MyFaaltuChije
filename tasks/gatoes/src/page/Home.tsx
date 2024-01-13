import React, { Fragment } from 'react'
import { AddSection, Hero, StepSection } from '../sections'

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <StepSection />
      <AddSection />
    </Fragment>
  )
}
