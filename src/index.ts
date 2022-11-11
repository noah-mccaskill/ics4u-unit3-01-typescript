/**
 * Reverse a string
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-11-10
 */

/**
 *
 * 'Mean' is the "average" where you add up all the numbers
 *
 * @param {string} str word that gets entered
 * @returns {string} string in reverse
 */
function reverseString(str: string): string {
  if (str === '') {
    return str
  } else {
    return reverseString(str.slice(1)) + str.slice(0, 1)
  }
}

// Input
const aString = 'recursion'

// Output
console.log()
console.log(`The original string is: ${aString}`)
console.log(`The reversed string is: ${reverseString(aString)}`)

console.log('\nDone.')
