class SpeakerListController {
  constructor(SpeakerService) {
    this.speakerService = SpeakerService
    this.speakers = []
    this.loadData
  }

  loadData () {
    this.speakerService.getSpeakers()
      then(response => {
        this.speakers = response.data
      })
  }
}

SpeakerListController.$inject = ['SpeakerService']

export default SpeakerListController  
