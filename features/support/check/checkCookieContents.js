const assert = require('assert').strict;

/**
 * Checks if an cookie does, or does not, exist on the page. 
 * Throws an error if the cookie name is not defined in the document.
 * @param {String} cname Cookie name to check for.
 * @param {String} cvalue Cookie value to check for.
 * @param {String} not The string "not" to negate the check (cookie value should not match).
 */
module.exports = async function(cname, cvalue, not) {

  var cookieValue; 
  var cookieNameFound;
  const pageCookies = await this.page.cookies();
  const expectedValue = cvalue === undefined ? '' : cvalue;
  const shouldValueBeEqual = not ? false : true;
  
  for (let index = 0; index < pageCookies.length; index++) {
    const element = pageCookies[index];
    cookieNameFound = element.name === cname;
    if(cookieNameFound){
      cookieValue = element.value ;
      break;
    } 
  }
  
  assert(cookieNameFound, `Error: failed the cookie '${cname}' does not exist`);
  assert.strictEqual(cookieValue === expectedValue, shouldValueBeEqual , `Expected "${cname}" to ${shouldValueBeEqual ? 'have' : 'not have'} a value of "${expectedValue}"`);
};
