import Hapi from '@hapi/hapi'
import routes from '../routes';
const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    routes.forEach(route => server.route(route));
    
    // server.route({
    //     method: 'POST',
    //     path: '/hello',
    //     handler: (req, h) => {
    //         const payload = req.payload;
    //         const name = payload.name;
    //         return `Hello ${name}`;
    //     }
    // });
    //http://localhost:8000/hello

    await server.start();
    console.log('Server is running.')
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

start();