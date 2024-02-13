import React from "react"

export enum taskStatus {
  completed = "completed",
  pending = "pending",
  hold = "hold"
}
export interface taskInterface {
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

export interface JsxELement {
  element: React.ComponentType
}