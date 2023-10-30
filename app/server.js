const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../db/shoppinglist.db');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  try {
    db.all('SELECT * FROM item', (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
      } else {
        console.log('Data from the shopping list:', rows);
        res.json(rows);
      }
    });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
