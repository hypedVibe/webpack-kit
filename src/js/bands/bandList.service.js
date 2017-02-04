export default app => {
  app.factory('bandList', () => {
    return [
      {name: 'Swag', formed: 1996},
      {name: 'Sudo', formed: 2017}
    ];
  })
};