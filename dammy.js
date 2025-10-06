const fs = require('fs')

// Create file
/*
fs.writeFile('hello.txt',"Hi",(err)=>{
    if(err){
        console.log("Error ",err)
    }
    console.log("Successfully file Created")
})
*/
// Update file
/*
fs.writeFile('hello.txt',"Hi,everyOne",(err)=>{
    if(err){
        console.log("Error ",err)
    }
    console.log("Successfully file Updated")
})
*/
// Appent file
/*
fs.appendFile('hello.txt',"\nHow are all",(err)=>{
    if(err){
        console.log("Error ",err)
    }     
    console.log("Successfully file Added")    
})
*/
// Read File

// fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("Error to read the file",err)
//     }
//     else{
//         // console.log("data ->\n",data)
//         /*
//           data ->
//           Hi,everyOne
//           How are all
//         */
//         // This is having string type
//         console.log(data.split('\n'))
//         // [ 'Hi,everyOne', 'How are all' ]
//     }
// })

// Delete file

fs.unlink('hello.txt',(er)=>{
    if(er){
        console.log("Error to Delete",er)
    }
    console.log("Deleted Sucessfully")
})