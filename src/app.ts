import Application from "./setup/setupApp";

const main = async () => {
  try {
    Application.startServer();
  } catch (error: any) {
    console.log(error.message);
  }
}

main();
