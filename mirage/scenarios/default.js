export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  // server.create('brewery', {
  //   name: 'Interstellar',
  //   location: '10/26/2014',
  //   description: 'Sci-Fi'
  // });

  // server.createList('brewery', 5)
  // server.createList('beer', 5)

  let brewery = server.create('brewery', {name: 'testing brewery '});
  server.create('beer', {
    name: 'random beer',
    type: 'IPA',
    alcoholPercentage: 123,
    brewery: brewery
  });

  let brewery2 = server.create('brewery', {name: 'testing brewery2 '});
  server.create('beer', {
    name: 'random beer2',
    type: 'IPA',
    alcoholPercentage: 123,
    brewery: brewery2
  });

  let brewery3 = server.create('brewery', {name: 'testing brewery3 '});
  server.create('beer', {
    name: 'random beer3',
    type: 'IPA',
    alcoholPercentage: 123,
    brewery: brewery3
  });

  // server.createList('brewery', 5).forEach(brewery => {
  //   server.createList('beer', 5, { brewery })
  // });
}
