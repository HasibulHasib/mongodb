const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  const url =
    "mongodb+srv://hasibcpscr:9jmgSrtw5BpUGW3@cluster0.vq4jt.mongodb.net/shop?retryWrites=true&w=majority";
  MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })

    .catch((err) => {
      console.log(err);
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  };
  throw "Database not found";
};
module.exports = mongoConnect;
module.exports = getDb;
