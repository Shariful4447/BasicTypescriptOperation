const EventEmmiter = require("events")

const myEmitter = new EventEmmiter()

// listen to events
myEmitter.on("birthday",() =>{
    console.log('Happy Day');
})
myEmitter.on("birthday",() =>{
    console.log('i will send a gift');
})
myEmitter.emit("birthday")