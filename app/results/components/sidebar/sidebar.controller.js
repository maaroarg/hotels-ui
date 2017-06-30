import angular from 'angular';

export default class SidebarController {
  constructor($stateParams, $location) {
    this.$stateParams = $stateParams;
    this.filtersData = {
      hotelName: '',
      slider: { min: 0, max: 150, options: { floor: 100, ceil: 1000 } },
      stars: { st0: true, st5: false, st4: false, st3: false, st2: false, st1: false }
    }
  }

  //Control de cambios en filtros
  filterAction() {
    this.onUpdateFilters({
      $event: this.filtersData
    });
  }

}

SidebarController.$inject = ['$stateParams'];
