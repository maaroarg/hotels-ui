import angular from 'angular';

export default class ResultsController {

  constructor($stateParams, $location, hotels) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.hotels = hotels;
    this.filters = { hotelName: true, stars: true, price: true };
    this.filtersData = {};

    this.currentPage = 1;
    this.maxSize = 5;
  }

  //Obtengo el objeto filter del componente sidebar
  updateFilters(data) {
    this.filtersData = data;
    console.log(this.filtersData);
  }

}

ResultsController.$inject = ['$stateParams', '$location', 'hotels'];
