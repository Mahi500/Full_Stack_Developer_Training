const EventEmitter=require("events");

const eventEmitter=new EventEmitter();

eventEmitter.on("place_order",function(data){

    console.log("order_placed==",data);
})

eventEmitter.on("Order_delivered",function(data){

   console.log("location==",data);
})

eventEmitter.emit("place_order","price:300");
eventEmitter.emit("place_order","price:200");

eventEmitter.emit("Order_delivered","hyd");
eventEmitter.emit("Order_delivered","chennai");