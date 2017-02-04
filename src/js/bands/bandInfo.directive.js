import bandInfoTemplate from './band-info.html';

export default app => {
  app.directive('bandInfo', bandList => {
    return {
      restrict: 'E',
      controller: $scope => {
        $scope.bands = bandList;
      },
      template: bandInfoTemplate
    }
  });
};