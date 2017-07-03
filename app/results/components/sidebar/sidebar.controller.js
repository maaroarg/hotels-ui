import angular from 'angular';

export default class SidebarController {
  constructor($stateParams, $location) {
    this.$stateParams = $stateParams;
    this.stars = [true,false,false,false,false,false];
    this.filtersData = {
      hotelName: '',
      slider: { min: 0, max: 10000, options: { floor: 0, ceil: 15000 } },
      stars: [0]
    }
  }

  //Control de cambios en filtros
  filterAction() {
    
    //Actualizo stars
    this.filtersData.stars = [];
    this.stars.forEach((data,index) => {
      if( data ) this.filtersData.stars.push(index);
    });

    //Control de "todas las estrellas"
    if(this.filtersData.stars.length <= 0) {
      this.stars[0] = true;
      this.filtersData.stars.push(0);
    }

    this.onUpdateFilters({
      $event: this.filtersData
    });
  }

}

SidebarController.$inject = ['$stateParams'];
