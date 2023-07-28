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
