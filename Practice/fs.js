const fs= require('fs')

fs.writeFileSync('abc.txt', 'Hello world writing using FS Module')
fs.appendFileSync('abc.txt', 'hi this is appending')
fs.appendFileSync('abc.txt', 'hi this is appending')



