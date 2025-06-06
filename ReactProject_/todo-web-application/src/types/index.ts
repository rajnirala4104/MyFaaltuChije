
export interface taskInterface {
  taskTitle: string,
  taskDescription: string,
  taskStatus: boolean
}

export interface InputTaskPopupContextInterface {
  isInputTaskOn:boolean,
  setIsInputTaskOn:React.Dispatch<React.SetStateAction<boolean>>
}
