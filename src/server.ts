import app from "./app.js";
import Config from "./config/config.js";

const PORT = Config.port;

app.listen(PORT, () => {
  console.log(`app running on localhost ${PORT}`);
});
