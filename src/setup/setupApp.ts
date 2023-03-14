import express, { Express } from 'express';

import envConfig from "../config/enviromentVariables";


class Application {
  private app: Express;

  constructor() {
    this.app = express();
  } 

  setupApp = () => {
    this.app.listen(envConfig.port, () => {
      console.log("Wohnnormade server started on: " + envConfig.api_url);
    });
  }

  startServer = () => {
    this.setupApp();
  }
}

export default new Application();
