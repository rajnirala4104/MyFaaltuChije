export interface userInterface {
   name?: string,
   email?: string,
   password?: string,
   age?: number,
   hobbies?: string[],
   gender?: string,
   id?: number,
   createdOn?: string,
   updatedOn?: string
}

export interface messageBoxInterface {
   showMessageBox: boolean,
   setShowMessageBox: React.Dispatch<React.SetStateAction<boolean>>
}

export interface messageBoxPropInterface {
   message: string,
   title: string
}