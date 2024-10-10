const fs = require('fs');

fs.readFile('./start.txt', 'utf-8', (err, data) => {
    console.log(data);
    fs.readFile(`./${data}.txt`, 'utf-8', (err, data1) => {
        console.log(data1);
        // console.log(err); //null value assign means no error is occur
        fs.readFile('./append.txt', 'utf-8', (err,data2) => {
            console.log(data2);
            fs.writeFile('./output.txt', `${data1}\n\n${data2}\n\nDate created ${new Date()}`, () => {
                console.log('File written successfully');
                
            })
        })
        
    })
})