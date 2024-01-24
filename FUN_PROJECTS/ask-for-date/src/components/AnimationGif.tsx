import React from 'react'

interface props {
  srcPath: string
  classes?: string
}

export const AnimationGif: React.FC<props> = (props) => {
  return (
    <React.Fragment>
      <div>
        <img src={props.srcPath} className={props.classes} alt="date" />
      </div>
    </React.Fragment>
  )
}
