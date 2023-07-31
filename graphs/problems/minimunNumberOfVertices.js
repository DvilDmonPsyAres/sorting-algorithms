const findSmallesSetOfVertices = (n, edges) => {
    const hasFrom = {};
    const ans = [];
    for(const path of edges) {
        // console.log(path)                    // [0,1]
        //llenar objecto hasfrom  con hasfrom[path[1]] = 1
        hasFrom[path[1]] = true; // hasFrom = {1 : true }
    }
     console.log(hasFrom)
    for(let i = 0; i < n; i++) {

        if(!(i in hasFrom)) {
            ans.push(i)
            console.log(ans)
        }
    }
    return `respuesta: ${ans}`;
}
let n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]

console.log(findSmallesSetOfVertices(n, edges));
console.log('problem2')
n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]

console.log(findSmallesSetOfVertices(n, edges));


var findSmallestSetOfVertices = function(n, edges) {
    // empty obj for paths to nodes
    let reachable = {};
    // empty arr for answer
    let result = [];
    //iterate over edges destination path and add to paths with a reacheble value
    for(path of edges) {
        // add paths to reachable
        reachable[path[1]] = true;
    }
    //iterate over paths searching no reacheble values
    for(let i = 0; i < n; i++) {
        //if nodes is not in reachable object push to result arr;
        if(!(i in reachable)) {
            result.push(i)
        }
    }
    //return no reachable nodes.
    return result;
};
