console.log("is my js file working..")

// ------------- varName: varDataType, varName: varDataType
const addFucn = (num1:number, num2:number, nameOfTheOperation: string)=>{
    return (nameOfTheOperation +(num1+num2))
}

let n1 = 12;
let n2 = 23;
let op = "Add Result: "
console.log(addFucn(n1, n2, op))

type About = {
    naam: string;
    age: number;
    hobbies: string[];
    address?: string; //now this can be a undefine
}

const me: About = {
    naam:"Raj",
    age:18,
    hobbies:["travelling", "Playing Instument","playing football"],
    address: "Delhi"
}


console.log(me)