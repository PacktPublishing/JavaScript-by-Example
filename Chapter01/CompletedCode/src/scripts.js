{
  "name": "todo-list",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "watch": "concurrently \"npm run serve\" \"babel src -d dist --presets=es2015 -ws\"",
    "build": "rm -rf dist && babel src -d dist --presets=es2015",
    "serve": "http-server"
  },
  "author": "Dani Akash S",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-es2015": "^6.24.1",
    "concurrently": "^3.4.0",
    "http-server": "^0.10.0"
  }
}
