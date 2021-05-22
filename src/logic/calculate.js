import { evaluate } from 'mathjs'

/**
 * The following kinds of buttons are supported:
 *
 * - AC: clear the display.
 * - DEL: remove the last digit/operation.
 * - =: calculate the result. If the operation is not valid, "N/A" will be the result.
 * - Any other buttons: just show the operation on the display. No result being calculated.
 *
 * @param {Object} obj the state object
 * @param {String} buttonName the name of the button being pressed
 * @returns {Object} the updated state
 */
export default function calculate (obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      operation: '',
      result: ''
    }
  }
  if (buttonName === 'DEL') {
    return {
      operation: obj.operation.substring(0, obj.operation.length - 1)
    }
  }
  if (buttonName === '=') {
    if (obj.operation === '') {
      return
    }
    try {
      const result = evaluate(obj.operation.replace(/x/g, '*').replace(/÷/g, '/'))
      return { result: String(result) }
    } catch (err) {
      return {
        result: 'N/A'
      }
    }
  }
  return {
    operation: `${obj.operation}${buttonName}`
  }
}
