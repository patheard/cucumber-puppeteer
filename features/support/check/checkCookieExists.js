const assert = require('assert').strict;

/**
 * Checks if an cookie does, or does not, exist on the page. 
 * Throws an error if the cookie name is not defined in the document.
 * @param {String} cname Cookie name to check for.
 * @param {String} not The string "not" to negate the check (cookie value should not match).
 */
module.exports = async function(cname, not) {
 
  var cookieNameFound;
  const pageCookies = await this.page.cookies();
  const shouldCookieExist = not ? false : true;
  
  for (let index = 0; index < pageCookies.length; index++) {
    const element = pageCookies[index];
    cookieNameFound = element.name === cname;
    if(cookieNameFound){
      cookieValue = element.value ;
      break;
    } 
  }

  assert.strictEqual(cookieNameFound, shouldCookieExist , `Expected "${cname}" to ${shouldCookieExist ? 'exists' : 'not exists'}`);
};
