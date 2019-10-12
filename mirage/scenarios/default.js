export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.create('brewery', {
    name: 'Interstellar',
    location: '10/26/2014',
    description: 'Sci-Fi'
  });

  server.createList('brewery', 5)
  server.createList('beer', 5)
}
