export enum taskStatus {
  completed = "completed",
  peding = "peding",
  hold = "hold"
}

export interface SingleTaskCardProp {
  title: string,
  status: taskStatus
}

export interface taskPopupInterface {
  taskPopup: boolean,
  setTaskPopup: (STR: boolean) => void
}

export interface CLASS {
  classes: string,
  eventHandler: () => void
}

export interface dummyTaskDataInterface {
  title: string,
  status: taskStatus
}