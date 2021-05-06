
//functions
let fname: string = "Lawrence";

const getName = (name: string): string => {
  return "Your name is:" + name;
}

console.log(getName(fname));


//interfaces: Enforces the use of types
//creating objects

interface IUser {
  fname: string,
  age?: number  //? makes the property optional

  getMessage(): string //Function inside an interface
}

const user: IUser = {
  fname: "Lawrence",
  age: 38,

  getMessage() {
    return 'Hello ' + fname;
  }
};

const user2: IUser = {
  fname: "Lawrence",
  getMessage() {
    return 'Hello ' + fname;
  }
};
/*
* Generic types
*/

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
}

interface StudentInterface {
  fname: string;
}

const student: StudentInterface = {
  fname: "Lawrence"
}

const reuslt = addId<StudentInterface>(student);
console.log(reuslt);