import React from 'react'
import { SingleTaskCard } from '.'
import { dummyTaskData } from '../data/dummyTaskData'

export const TaskContainer = () => {
  return (
    <React.Fragment>

      <section className='py-1 bg-green-400 rounded-md h-full text-slate-800 m-1'>
        <div className="main  rounded-md m-2">
          <div className="title bg-green-100 py-1 px-2 text-green-900 rounded-md mb-3">
            <span>
              6 Total, 2 Completed and 4 Pending
            </span>
          </div>
          <div className="singleTaskContainer">
            {dummyTaskData.map(singleDataObject => <SingleTaskCard {...singleDataObject} />)}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
