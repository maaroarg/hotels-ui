import angular from 'angular';

export default class SidebarController {
  constructor($stateParams, $location) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.slider = {min: 0, max: 150, options: {floor: 100, ceil: 1000}};
  }

}

SidebarController.$inject = ['$stateParams', '$location'];
