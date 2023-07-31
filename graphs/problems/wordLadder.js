var ladderLength = function(beginWord, endWord, wordList) {
    //breath first search
    //distance from fist word
    //finding links

    const findConnections = (word, wordSet) => {
        let results = [];
        const aASCII = "a".charCodeAt(0);

        for(let i = 0; i < word.length; i++) {
            const firstHalf = word.substring(0, i);
            const lastHalf = word.substring(i + 1);
            for(let j = 0; j < 26; j++) {
                const nextWord = firstHalf + String.fromCharCode(aASCII + j) + lastHalf;
                if(wordSet.has(nextWord)) {
                    results.push(nextWord)
                }
            }
        }
        console.log(results)
        return results;
    }

    const wordSet = new Set(wordList);
    const queue = [beginWord];
    let distance = 0;

    while(queue.length > 0) {
        distance++;
        let N = queue.length
        while(N--) {
            const word = queue.shift();
            const connections = findConnections
            (word, wordSet);

            for(let i = 0; i < connections.length; i++) {
                const nextWord = connections[i];
                if(nextWord === endWord) {
                    return distance + 1;
                }
                queue.push(nextWord)
                wordSet.delete(nextWord)
        }

        }
    }
    return 0;
}

let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]

console.log(ladderLength(beginWord, endWord, wordList));
