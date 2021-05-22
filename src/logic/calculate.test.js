import calculate from './calculate'
import chai from 'chai'

/**
 * Emulate buttons being pressed sequentially.
 *
 * @param {Array} buttons a list of buttons
 * @returns {Object} the final value
 */
function pressButtons (buttons) {
  const value = {
    operation: '',
    result: ''
  }
  buttons.forEach(button => {
    Object.assign(value, calculate(value, button))
  })
  return value
}

describe('calculate', function () {
  it('test addition', async () => {
    const value = pressButtons(['6', '+', '3', '='])
    chai.expect(value).to.deep.equal({
      operation: '6+3',
      result: '9'
    })
  })

  it('test subtraction', async () => {
    const value = pressButtons(['6', '-', '3', '='])
    chai.expect(value).to.deep.equal({
      operation: '6-3',
      result: '3'
    })
  })

  it('test multiplication', async () => {
    const value = pressButtons(['6', 'x', '3', '='])
    chai.expect(value).to.deep.equal({
      operation: '6x3',
      result: '18'
    })
  })

  it('test division', async () => {
    const value = pressButtons(['6', '÷', '3', '='])
    chai.expect(value).to.deep.equal({
      operation: '6÷3',
      result: '2'
    })
  })

  it('test the AC button', async () => {
    const value = pressButtons(['6', '÷', '3', 'DEL'])
    chai.expect(value).to.deep.equal({
      operation: '6÷',
      result: ''
    })
  })

  it('test the AC button', async () => {
    const value = pressButtons(['6', '÷', '3', 'AC'])
    chai.expect(value).to.deep.equal({
      operation: '',
      result: ''
    })
  })
})
