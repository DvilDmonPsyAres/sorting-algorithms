/*997. Find the Town Judge
Easy
5.7K
459
Companies
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.



Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
*/

//count times each citizen exists in the array and compare if the trusted one in the obj is trusted for all citizens - himself vote
const findJudge = function(n, trust) {
    if(n === 1) return 1;  // n = 2

    const inMap = {};
    const outMap = {};

    for(const i of trust) {
        const[outer, inner] = i;  // outer : 1  inner: 2
        //if exist plus 1 if not equals to 1
        outMap[outer] = outMap[outer] ? outMap[outer] + 1 : 1; //outMap = {1: 1}
        inMap[inner] = inMap[inner] ? inMap[inner] + 1 : 1; //inMap = {2: 1}
    }

    for(let i = 1; i <= n; i++) {// i = 1
        console.log(`i: = ${i}`)
        console.log(`outMap ${i} === ${outMap[i]}`)
        console.log(`in Map ${i} === ${inMap[i]}`)
        console.log(`expect outMap i === undefined && inmap[i] === ${n-1}`)
        console.log("outmap", outMap)
        console.log("inmap", inMap)
        if(!outMap[i] && inMap[i] === n -1) {
            return i;
        }
    }
    return -1
};

console.log("test 1")
let n = 2, trust = [[1,2]]
console.log(findJudge(n, trust))//Output: 2

console.log("test 2")
n = 3, trust = [[1,3],[2,3]]
console.log(findJudge(n, trust))//Output: 3

console.log("test 3")
n = 3, trust = [[1,3],[2,3],[3,1]]
console.log(findJudge(n, trust))//Output: -1
