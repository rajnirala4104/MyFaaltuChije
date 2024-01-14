import { Fragment } from 'react'
import { SetpCard } from '../components'
import { _StepsData } from '../data/StepsData'

export const StepSection = () => {
  return (
    <Fragment>
      <section className='w-full h-screen flex items-center flex-col justify-center bg-white'>
        <div className="title w-full  flex justify-center">
          <span className='text-3xl font-semibold my-6'>
            How <span className='text-[#F66754]'>Gatoes</span> works?
          </span>
        </div>
        <div className="stepsCardContainer flex w-[80%] justify-evenly h-[70%] items-start pt-10">
          {
            _StepsData.map(singleData => <SetpCard step={singleData.step} img={singleData.img} description={singleData.description} />)
          }
        </div>
      </section>
    </Fragment>
  )
}
