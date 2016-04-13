import Hapi        from 'hapi';
import Good        from 'good';
import GoodConsole from 'good-console';
import Vision      from 'vision'
import Handlebars  from 'handlebars';

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.view('index', { title: `Version: ${request.server.version}` });
  }
});

server.register([
  {
    register: Vision,
  },
  {
    register: Good,
    options: {
      opsInterval: 5000,
      reporters: [{
        reporter: GoodConsole,
        events: { response: '*', log: '*' }
      }]
    }
  }], (err) => {
    if (err) { throw err }

    server.views({
      engines: { hbs: Handlebars },
      relativeTo: __dirname,
      path: './views'
    });

    server.start((err) => {
      if (err) { throw err }

      server.log('info', 'Server running at: ' + server.info.uri);
    }
  );
});
