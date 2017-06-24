import template from './../views/results.template.html';

/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('results', {
      url: '/',
      template: template,
      controller: 'ResultsController',
      controllerAs: 'resultsCtrl',
      resolve: {
        hotels: (ResultsService) => {
          return ResultsService.getResults();
        }
      }
    })
}
