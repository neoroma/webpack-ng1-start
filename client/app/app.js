import angular from 'angular'
import uiRouter from 'angular-ui-router'
import template from './app.html'
import {deal} from './components/deal/deal'

const app = angular.module('wa-starter', [uiRouter, deal.name])
  .component('app', {
    template
  })
