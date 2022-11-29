const http =require('http')

const server= http.createServer((req,res)=>{
    res.write('hello world from server') 
    res.end() 
    
})

// console.log(server.listen(9091))
server.listen(9091)

