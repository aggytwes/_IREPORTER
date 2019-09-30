const path = require('path');
const fs = require('fs');

const server = http.createerver((req, res) => {
if (req.url === '/') {
    const welcome = {'message': 'Welcome to ireporter, iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public.'}
    res.writeHead(200, {'content-Type': 'application/json'});
    res.end(JSON.stringify(welcome));
}

if (req.url === '/api/v1/users') {
    const users = [
        {id: 1, nin:'CF2534672MN90', lname: 'twes',  fname: 'aggy', username:'aggytwes', email: 'aggytwesy@gmail.com' , password:'sassy90', location:'kampala', role:'reporter'},
        {id: 2, nin:'CM2534872MN90', lname: 'nshimiye',  fname: 'brian', username:'brian7', email: 'brnshimiye@gmail.com' , password:'sassy00', location:'mutungo', role:'admin'},
        {id: 3, nin:'CF2534671MN80', lname: 'klein',  fname: 'abigail', username:'abbykay', email: 'abbykay@gmail.com' , password:'kabbyy9', location:'ndejje', role:'reporter'},
        {id: 4, nin:'CF9382272MN90', lname: 'cymer',  fname: 'fash', username:'cymerfash', email: 'cymerfash@gmail.com' , password:'cassy50', location:'kampala', role:'reporter'},
        {id: 5, nin:'CM5625632MN10', lname: 'hans',  fname: 'mark', username:'markhans', email: 'markhans@gmail.com' , password:'hans32', location:'mukono', role:'reporter'},
    ];
    res.writeHead(200, {'content-Type': 'application/json'});
    res.end(JSON.stringify(users));
}

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('server running on port $ {PORT}'));