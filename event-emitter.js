const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// listener

myEmitter.on("birthday", () => {
    console.log("Happy Birthday to you");
});

myEmitter.on("birthday", (gift) => {
    console.log(`Gift sended ${gift}`);
})

myEmitter.emit("birthday", "watch")
