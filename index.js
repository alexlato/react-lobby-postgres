const express = require("express");
const app = express();
const pool = require("./db");

var cors = require("cors");
app.use(cors()); // Use this after the variable declaration
app.use(express.json()); // => req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // => req.body

//Routes//

//get a users player colors
app.get("/userscolors/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    const userColors = await pool.query(
      "SELECT * FROM userscolors WHERE userid = $1",
      [id]
    );

    res.json(userColors.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update colors

app.put("/userscolors/:id", async (req, res) => {
  try {
    console.log(req.body);

    const queryOne = await pool.query(
      "UPDATE userscolors SET color = $1 WHERE userid = $2 AND id = $3",
      [req.body[0].color, req.body[0].userid, req.body[0].id]
    );

    const queryTwo = await pool.query(
      "UPDATE userscolors SET color = $1 WHERE userid = $2 AND id = $3",
      [req.body[1].color, req.body[1].userid, req.body[1].id]
    );

    const queryThree = await pool.query(
      "UPDATE userscolors SET color = $1 WHERE userid = $2 AND id = $3",
      [req.body[2].color, req.body[2].userid, req.body[2].id]
    );

    const queryFour = await pool.query(
      "UPDATE userscolors SET color = $1 WHERE userid = $2 AND id = $3",
      [req.body[3].color, req.body[3].userid, req.body[3].id]
    );

    res.json("Colors have been updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
