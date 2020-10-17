const mysql = require("mysql");
const Env = use("Env");

const con = mysql.createConnection({
  host: Env.get("DB_HOST", "localhost"),
  port: Env.get("DB_PORT", ""),
  user: Env.get("DB_USER", "root"),
  password: Env.get("DB_PASSWORD", ""),
});

con.connect(function (err) {
  if (err) throw err;
  con.query(
    "CREATE DATABASE IF NOT EXISTS " + Env.get("DB_DATABASE", "adonis"),
    function (err, result) {
      if (err) throw err;
      console.log("Database created");
    }
  );
});
