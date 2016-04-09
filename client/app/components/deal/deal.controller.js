class DealController {
  constructor($element) {
    console.log('constucting deal controller')

    this.message = 'Hi'
    this.element = $element
  }

  add(one, two) {
    console.log('adding', one, two, +(new Date()))
    return this.result = (one + two)
  }

  $onInit() {
    console.log('initializing deal controller')
    console.log(this.heil)

    console.log(this)
  }

  $onDestroy() {
    console.log('trashing deal controller')
  }
}

DealController.$inject = ['$element']

export {DealController}
