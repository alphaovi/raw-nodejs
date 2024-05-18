const fs = require('fs');

// reading text asyncronusly

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
    if(err){
        throw Error("Error reading text");
    }
    
    
    // written text asyncronusly

    fs.writeFile("./texts/read2.txt",  data, "utf-8", (err) => {
        if(err){
            throw Error("Error writing problem");
        }
    })
})

console.log("testing asyncronus");