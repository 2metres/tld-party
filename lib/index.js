import Hapi        from 'hapi';
import Good        from 'good';
import GoodConsole from 'good-console';

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Hello, ${encodeURIComponent(request.params.name)]!');
  }
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: GoodConsole,
      events: { response: '*', log: '*' }
    }]
  }
}, (err) => {
  if (err) { throw err; }

  server.start((err) => {
    if (err) { throw err; }

    server.log('info', 'Server running at: ' + server.info.uri);
  });
});
