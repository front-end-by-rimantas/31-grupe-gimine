/**
 * Skirta rasti ilgiausiai gimineje isgyvenusi asmeni, naudojamas rekursijos algoritmas
 * @param {Object[]} giminesMedis Gimines medi aprasantis objektas
 * @returns {number} Ilgiausiai gyvenusio asmens amzius
 */
function kasVyriausias(giminesMedis) {
    let maxAge = 0;

    for (const { age } of giminesMedis) {
        if (age > maxAge) {
            maxAge = age;
        }
    }

    return maxAge;
}

module.exports = kasVyriausias;