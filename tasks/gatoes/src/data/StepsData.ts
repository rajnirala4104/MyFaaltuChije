import { allImage } from "../assets"

export interface steps {
  step: number,
  img: string,
  description: string
}

export const _StepsData: steps[] = [
  {
    step: 1,
    img: allImage.step1,
    description: "Order your favourite food at your home"
  },
  {
    step: 2,
    img: allImage.step2,
    description: "Choose from the best restaurants around you"
  },
  {
    step: 3,
    img: allImage.step3,
    description: "Fast delivery at your doorstep"
  },

]