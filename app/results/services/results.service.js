class ResultsService {
  constructor ($http) {
    this.$http = $http
  }

  getResults () {
    return this.$http.get('http://localhost:9090/api/hotels').then(response => response.data)
  }

}

ResultsService.$inject = ['$http'];

export default ResultsService;
