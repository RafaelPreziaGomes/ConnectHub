// import the app
const app = require("./app");

app.listen((port = process.env.PORT || 3000), () => {
  console.log(`Server running at http://localhost:${port}/`);
});
