import angular from 'angular';

export default class ResultsController {
  constructor($stateParams, $location, hotels) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.hotels = hotels;
    this.filters = {hotelName: true, stars: true, price: true};

    this.currentPage = 1;
    this.maxSize = 5;
  }

}

ResultsController.$inject = ['$stateParams', '$location', 'hotels'];
