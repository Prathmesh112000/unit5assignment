type user={
    // name:string,
    id:number,
    salary?:number,
    age:number
    name:string
}



type teacher={
    id:number,
    name:string,
    subject?:string,
    students?:number
}




const abc:user={
   
    id:1234,
    salary:8,
    age:21,
    name:"abc"
} 

const def:user={
   
    id:12345,
    salary:1,
    age:2,
    name:"def"
} 
const ghi:user={
   
    id:20,
    salary:0,
    age:12,
    name:"ghi"
} 



const ab=[def,abc,ghi]
function sorts(arr:user[],ex:keyof user){
    arr.sort((a:any,b:any)=>{return a[ex]-b[ex]})
    // // return ts
    return arr
    
}

// const wq=sorts(a,"id")
// console.log(wq)
console.log(sorts(ab,"id"))




