import angular from 'angular';

export default class ResultsController {

  constructor($stateParams, $location, hotels, $filter) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.hotels = hotels;
    this.filters = { hotelName: true, stars: true, price: true };
    this.filteredHotels = hotels;

    this.currentPage = 1;
    this.maxSize = 5;
  }

  //Obtengo el objeto filter del componente sidebar
  updateFilters(data) {

    //Aplico el filtro a la coleccion de hoteles
    this.filteredHotels = this.hotels.filter(function(hotel){
      return (
        (hotel.name.indexOf(data.hotelName) >= 0) &&
        (data.stars.indexOf(0) >= 0 || data.stars.indexOf(hotel.stars) >= 0 ) &&
        (hotel.price >= data.slider.min && hotel.price <= data.slider.max)
      );
    });
  }

}

ResultsController.$inject = ['$stateParams', '$location', 'hotels','$filter'];
