import { createServer } from "http";
import { app } from "./server";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 4000;

const server = createServer(app);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`PostaCI API listening on port ${PORT}`);
});

