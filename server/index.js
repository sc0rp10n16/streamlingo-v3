const { em } = require("framer-motion/client");
const {Server} = require("socket.io");


const io = new Server(6969, {
    cors: true
});

const nameToSocketIdmap = new Map();
const socketIdToNameMap = new Map();

io.on("connection", (socket) => {
    console.log("Socket connected", socket.id)
    socket.on('meet:join', (data)=> {
        const {name, meetId} = data;
        nameToSocketIdmap.set(name, socket.id);
        socketIdToNameMap.set(socket.id, name);
        io.to(meetId).emit("user:joined", {name, id: socket.id});
        socket.join(meetId);
        io.to(socket.id).emit('meet:join', data);
        
    });
    socket.on('user:call', ({to, offer}) => {
        io.to(to).emit("incoming:call", {from: socket.id, offer})
    });
    socket.on('call:accepted', ({to, ans}) => {
        io.to(to).emit("call:accepted", { from: socket.id, ans});
    });
});