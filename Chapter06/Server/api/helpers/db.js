const low = require('lowdb'),
  fileAsync = require('lowdb/lib/storages/file-async');

const db = low('db.json', {
  storage: fileAsync
});

// db.defaults({ posts: [] })
//   .write()

module.exports = {db};