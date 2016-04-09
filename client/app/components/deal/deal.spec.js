import {deal} from './deal'
import {DealController} from './deal.controller'

describe('Deal', () => {
  let $rootScope
  let makeController

  beforeEach(window.module(deal.name))

  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_
    makeController = (injectables) => {
      return new DealController(injectables)
    }
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(deal.name).toBe('deal')
    })
  })

  describe('controller', ()=> {
    let controller

    beforeEach(()=> {
      controller = makeController()
    })

    it('should have add method', ()=> {
      expect(controller.add).toBeDefined()
      expect(typeof controller.add).toBe('function')
    })

    describe('add method', () => {
      it('should add numbers', ()=> {
        expect(controller.add(1, 1)).toBe(2)
      })

    })
  })

})
