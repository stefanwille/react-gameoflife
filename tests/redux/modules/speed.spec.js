import {setSpeed} from 'redux/modules/actionCreators'
import {default as speedReducer, INITIAL_SPEED} from 'redux/modules/speed'

describe('(Redux Module) speed', function () {
  describe('(Reducer)', function () {
    it('Should initialize with a given number', function () {
      const initialState = speedReducer(undefined, {})
      expect(initialState).to.equal(INITIAL_SPEED)
    })
  })

  describe('(Action Creator) setSpeed', function () {
    it('Should be exported as a function.', function () {
      expect(setSpeed).to.be.a('function')
    })
  })

  describe('(Action Handler) SET_SPEED', function () {
    it('Should set the state to the given speed.', function () {
      let state = speedReducer(undefined, {})
      expect(state).to.equal(INITIAL_SPEED)
      state = speedReducer(state, {type: 'SET_SPEED', payload: 80})
      expect(state).to.equal(80)
    })
  })
})
