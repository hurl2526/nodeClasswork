//pipes
// const fs = require('fs')

// const readStream = fs.createReadStream(__dirname + '/longLorem.txt','utf-8')
// const writeStream = fs.createWriteStream(__dirname + '/writeLorem.txt', 'utf-8')
// readStream.pipe(writeStream)//shorter way to do the above to create a new file


//passing file into localhost: browser
// const http = require('http')
// const fs = require('fs')

// const obj = {
//   name : "flo",
//   job: 'firfighter',
//   age: 200,
// }
// const server = http.createServer((req, res) => {
//   res.writeHead(400, {
//     // 'Content-Type': 'text/html'//when using html
//     'Content-Type':'application/json'
//   })
//   const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
//   // readStream.pipe(res) for html
//     res.end(JSON.stringify(obj))
// })
// server.listen(3000, () => {
//   console.log(`Listening on port 3000`)
// })

const http = require('http')
const fs = require('fs')
const obj = {
  name: 'Flo',
  job: 'Firefighter',
  age: 200,
}
const server = http.createServer((req, res) => {
  res.writeHead(400, {
    'Content-Type': 'application/json',
  })
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    readStream.pipe(res)
  }
  if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/about.html', 'utf8')
    readStream.pipe(res)
  }
  if (req.url === '/users') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })
    const readStream = fs.createReadStream(__dirname + '/users.html', 'utf8')
    res.end(JSON.stringify(obj))
  }
  //   res.end(JSON.stringify(obj))
})
server.listen(3000, () => {
  console.log(`Listening on port 3000`)
})
