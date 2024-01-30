import React, { useContext } from 'react'
import { TaskInfoProvider } from '../context'
import { CloseIcon } from '../icons/CloseIcon'

export const TaskPopupComp = () => {

  const { taskPopup, setTaskPopup } = useContext(TaskInfoProvider)

  return (
    <React.Fragment>
      <div className='fixed top-0 w-full h-screen bg-[rgba(0,0,0,0.49)] flex justify-center items-center '>
        <div className='bg-white relative rounded-lg shadow-lg w-[76%] h-[60%] flex justify-center items-center'>
          <CloseIcon classes={'text-2xl absolute top-[2%] left-[86%] cursor-pointer text-green-900 hover:text-green-800'} eventHandler={() => setTaskPopup(!taskPopup)} />
        </div>
      </div>
    </React.Fragment>
  )
}
