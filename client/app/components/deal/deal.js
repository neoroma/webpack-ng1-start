import angular from 'angular'
import uiRouter from 'angular-ui-router'
import template from './deal.html'
// import '!style!css!sass!./deal.scss'
import './deal.scss'

import {DealController as controller} from './deal.controller.js'

const deal = angular.module('deal', [uiRouter])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('deal', {
      url: '/deal',
      template: '<deal></deal>'
    })
  }])
  .component('deal', {
    template,
    controller,
    controllerAs: 'deal'
  })

export {deal}
