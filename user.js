const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbDetails = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wpt",
};

async function addDetails(user) {
  const connection = mysql.createConnection(dbDetails);
  await connection.connectAsync();
  let sql = `Insert into user (chat) values(?)`;
  await connection.queryAsync(sql, [user.chat]);
  await connection.endAsync();
  console.log("Record added");
}

async function select() {
  const connection = mysql.createConnection(dbDetails);
  await connection.connectAsync();
  let sql = `select * from user`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log("The messages are ", list);
  console.log("Record added");
  return list;
}

async function connectionCheck() {
  const connection = mysql.createConnection(dbDetails);
  await connection.connectAsync();
  console.log("connection success");
  await connection.endAsync();
}
connectionCheck();
module.exports = { addDetails, select };
