import app from "./app";
import config from "./config";

const PORT = config.port;

async function main() {
    try {
        app.listen(PORT, () => {
            console.log(`This server is listening on port: ${PORT}`);
        })
    } catch (error) {
        console.log("Error starting the server:", error);
    }
}

main();