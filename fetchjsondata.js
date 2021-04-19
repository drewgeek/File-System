// 1. Create a script file that fetches data from JSON PLACEHOLDER POSTS
// 2. Write the JSON data gotten from the API to a file called posts.json or posts.txt
// 3. posts.json or post.txt should be in a directory file called result.
// 4. Create a github repository and push your work.

var fs = require('fs')

var http = require('http')

fs.mkdir('./result', {recursive: true}, (err) => {
    if (err) throw err;
})

http.get("http://jsonplaceholder.typicode.com/posts", function (res){
    let data = '';
    res.on('data', function (chunk) {
        data += chunk
    });
    res.on('end', () => {
        fs.writeFile('./result/posts.json', data, (err) =>{
            if (err) throw err;
        })
    });
    console.log('file created successfully')
});
