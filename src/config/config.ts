import dotenv from "dotenv";

// load env into process.env
dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
}

const Config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
};

export default Config;
