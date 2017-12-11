// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: "Mark Huntjens", age: 40};
// var {age} = user; //object destructuring
// console.log(age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a2e79e1f59c1cb960bc5ae6')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a2a74f34588942d102adf30')
  }, {
    $set: {
      name: "Mark"
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then((result) => console.log(result));

  // db.close();//close connection with db server
});
