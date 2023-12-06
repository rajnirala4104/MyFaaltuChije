// this is how we can make an ENUM
// type gender = "male" | "female" | "other"

import { gender } from "./hospitalManagment/types"

interface person {
    name: string,
    gender: gender,
    age?: number,
    hobbies?: string[],
}


const aadmi: person = {
    name: "raj nirala",
    gender: "male",
    age: 19,
    hobbies: ['guitar', 'piano', "football", "fillmography"]
}

// console.log(aadmi)


// generic interfaces
class insaan implements person {
    name: string
    gender: gender
    age: number
    constructor(name: string, gender: gender, age: number) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    public showInfo = () => {
        console.log(this.name, this.age, this.gender)
    }

}

const raj = new insaan("raj nirala", "male", 19)
raj.showInfo()