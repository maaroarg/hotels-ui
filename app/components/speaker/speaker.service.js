class SpeakerService {
  constructor ($http) {
    this.$http = $http
  }

  getSpeakers () {
    return this.$http.get('/api/speakers').then(response => response.data)
  }

  getSpeaker (id) {
    return this.$http.get(`/api/speakers/${id}`).then(response => response.data)
  }
}

SpeakerService.$inject = ['$http']

export default SpeakerService
