import Hapi        from 'hapi'
import Inert       from 'inert'
import Vision      from 'vision'
import Good        from 'good'
import GoodConsole from 'good-console'
import Handlebars  from 'handlebars'

const server = new Hapi.Server();

server.connection({ port: 3000 });

server.register([
  { register: Inert },
  { register: Vision },
  { register: Good,
    options: {
      opsInterval: 5000,
      reporters: [{ reporter: GoodConsole, events: { response: '*', log: '*' }}]
    }
  }], (err) => {
    if (err) { throw err }

    server.views({
      engines: { hbs: Handlebars },
      path: './src/views'
    });

    server.route({
      method: 'GET',
      path: '/index.css',
      handler: function (request, reply) {
        reply.file('./build/index.css');
      }
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply.view('index', {
          title: `Version: ${request.server.version}`,
          domain: request.hostname
        });
      }
    });

    server.start((err) => {
      if (err) { throw err }

      console.log(`Server running at: ${server.info.uri}`);
    });
});
