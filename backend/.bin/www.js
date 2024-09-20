const app = require("../");

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
