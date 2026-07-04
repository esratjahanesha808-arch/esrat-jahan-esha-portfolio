import { createServer } from 'vite';

async function startServer() {
  try {
    const server = await createServer({
      configFile: './vite.config.ts',
      server: {
        port: 3000,
        host: true,
      },
    });

    await server.listen();
    server.printUrls();
    console.log('Vite Dev Server is running at http://localhost:3000');
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();
