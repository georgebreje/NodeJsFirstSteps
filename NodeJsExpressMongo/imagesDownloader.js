const https = require('https');
const fs = require('fs');

const responseFile = fs.createWriteStream('response.txt')
const url ="https://sfantulsiluan.wordpress.com/2016/03/10/ieromonahul-nicolae-sakharov-iubesc-deci-exist-teologia-arhimandritului-sofronie-sakharov/" 

https.get(url,
    (resp) => {
        resp.pipe(responseFile)
        let data = '';
        
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(data);
        });
    }).on("error", (err) => {
        console.log("Error" + err.message);
    });

const locationPath = 'C:\\Documentele mele\\Carti\\Iubesc,\ deci\ exist'

const fileContent = fs.readFile("response.txt", (err, data) => {
    const fileStringContent = data.toString();
    const regex = /https:\/\/sfantulsiluanathonitul\.files\.wordpress\.com\/2016\/03\/image-\d{1,3}(?:\.\w+)?/g;
    let matches = fileStringContent.match(regex);

    for (let i = 0; i < matches.length; i++) {
        let fileName = `image${i}.jpg`;
        let file = fs.createWriteStream(`${locationPath}/${fileName}`)
        https.get(matches[i], resp => {
            resp.pipe(file);
            
            file.on("finish", () => {
                file.close();
                console.log(`Downloaded image${i} Completed`);
            });
        })
    }
});
