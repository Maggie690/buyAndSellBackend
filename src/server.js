import Hapi from '@hapi/hapi'
import routes from './routes/index.js';
import { db } from './database.js'

let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    routes.forEach(route => server.route(route));

    db.connect();
    await server.start();
    console.log('Server is running.')
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server ...');

    await server.stop({ timeont: 1000 });

    db.end();
    console.log('Server stop');
    process.exit(0);
});

start();