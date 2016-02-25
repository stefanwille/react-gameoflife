import {play, pause} from 'redux/modules/actionCreators'
import {default as playingReducer} from 'redux/modules/playing'

describe('(Redux Module) playing', function () {
  describe('(Reducer)', function () {
    it('Should initialize with a null', function () {
      const initialState = playingReducer(undefined, {})
      expect(initialState).to.equal(false)
    })
  })

  describe('(Action Creator) play', function () {
    it('Should be exported as a function.', function () {
      expect(play).to.be.a('function')
    })
  })

  describe('(Action Handler) PLAY', function () {
    it('Should set the state to the given interval.', function () {
      let state = playingReducer(undefined, {})
      expect(state).to.equal(false)
      state = playingReducer(state, {type: 'PLAY'})
      expect(state).to.equal(true)
    })
  })

  describe('(Action Creator) pause', function () {
    it('Should be exported as a function.', function () {
      expect(pause).to.be.a('function')
    })
  })

  describe('(Action Handler) PAUSE', function () {
    it('Should set the state to false.', function () {
      let state = true
      state = playingReducer(state, {type: 'PAUSE'})
      expect(state).to.equal(false)
    })
  })
})
