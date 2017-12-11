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

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a2e5fedf59c1cb960bc5634")
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`Unable to fetch todos`, err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log(`Unable to fetch todos`, err);
  // });

  db.collection('Users').find({name: "Denise Huntjens"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Unable to fetch todos`, err);
  });

  // db.close();//close connection with db server
});
