// // var minimumEffortPath = function(heights) {

// // };

// var minimumEffortPath = function(heights) {
//     const m = heights.length;
//     const n = heights[0].length;
//     const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

//     // Helper function to perform depth-first search with a given threshold.
//     const dfs = (i, j, threshold, visited) => {
//       if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
//         return false;
//       }

//       visited[i][j] = true;

//       if (i === m - 1 && j === n - 1) {
//         return true;
//       }

//       for (const [dx, dy] of directions) {
//         const x = i + dx;
//         const y = j + dy;

//         if (x >= 0 && x < m && y >= 0 && y < n) {
//           const effort = Math.abs(heights[i][j] - heights[x][y]);

//           if (effort <= threshold && dfs(x, y, threshold, visited)) {
//             return true;
//           }
//         }
//       }

//       return false;
//     };

//     // Binary search for the minimum effort value using DFS.
//     let left = 0;
//     let right = 1000000; // This is an arbitrary large value; adjust it as needed.
//     while (left < right) {
//       const mid = Math.floor((left + right) / 2);
//       const visited = Array.from({ length: m }, () => Array(n).fill(false));

//       if (dfs(0, 0, mid, visited)) {
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     }

//     return left;
//   };



var minimumEffortPath = function(heights) {
    // Obtenemos el número de filas y columnas del grid de alturas
    const m = heights.length;
    const n = heights[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Función auxiliar para realizar una búsqueda en profundidad con un umbral dado.
    const dfs = (i, j, threshold, visited) => {
      // Comprobamos si estamos fuera de los límites del grid o si ya hemos visitado esta celda
      if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
        return false; // Si es así, devolvemos falso (no podemos continuar)
      }

      visited[i][j] = true; // Marcamos la celda actual como visitada

      // Si hemos llegado a la celda de destino (esquina inferior derecha), devolvemos verdadero
      //basecase
      if (i === m - 1 && j === n - 1) {
        return true;
      }

      // Exploramos todas las direcciones posibles
      for (const [dx, dy] of directions) {
        const x = i + dx; // Nueva coordenada x
        const y = j + dy; // Nueva coordenada y

        // Comprobamos si la nueva celda está dentro de los límites del grid
        if (x >= 0 && x < m && y >= 0 && y < n) {
          const effort = Math.abs(heights[i][j] - heights[x][y]); // Diferencia de alturas

          // Si el esfuerzo es menor o igual al umbral y podemos llegar a la celda de destino desde aquí,
          // continuamos explorando en esa dirección.
          if (effort <= threshold && dfs(x, y, threshold, visited)) {
            console.log(visited)
            return true;
          }
        }
      }

      return false; // Si no podemos llegar a la celda de destino desde aquí, devolvemos falso.
    };

    // Búsqueda binaria del valor mínimo de esfuerzo utilizando DFS.
    let left = 0; // Valor mínimo posible de esfuerzo (parte inferior del rango)
    let right = 1000000; // Valor máximo posible de esfuerzo (parte superior del rango)
                          // Este valor es arbitrariamente grande; ajústalo según tu caso específico.
    while (left < right) {
      const mid = Math.floor((left + right) / 2); // Punto medio del rango de búsqueda
      const visited = Array.from({ length: m }, () => Array(n).fill(false)); // Matriz de celdas visitadas

      // Realizamos una búsqueda en profundidad con el umbral "mid" para ver si podemos alcanzar
      // la celda de destino con ese esfuerzo.
      if (dfs(0, 0, mid, visited)) {
        // console.log(visited)
        right = mid; // Si es posible, ajustamos la parte superior del rango al valor medio actual.
      } else {
        left = mid + 1; // Si no es posible, ajustamos la parte inferior del rango al valor medio + 1.
      }
    }

    return left; // Al finalizar el bucle, devolvemos el valor mínimo de esfuerzo encontrado.
  };





let heights = [[1,2,2],[3,8,2],[5,3,5]]
console.log(minimumEffortPath(heights))// Output: 2

// heights = [[1,2,3],[3,8,4],[5,3,5]]
// console.log(minimumEffortPath(heights))//Output: 1

// heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
// console.log(minimumEffortPath(heights))// Output: 0
