const graph1 = {
    T: ['V'],
    U: ['V'],
    V:[]
};

const graph2 = {
    X: ['Y'],
    Y: ['Z'],
    Z: ['X']
}

const graph3 = {
    A: ['B', 'C', 'E'],
    B: [],
    C: ['B', 'D'],
    D: [],
    E: ['A'],
    F: ['E']
}

const graph1SETS = {
    T: new Set(['V']),
    U: new Set(['V']),
    V: new Set([]),
  };

  const graph2SETS = {
    X: new Set(['Y']),
    Y: new Set(['Z']),
    Z: new Set(['X']),
  };

  const graph3SETS = {
    A: new Set(['B', 'C', 'E']),
    B: new Set([]),
    C: new Set(['B', 'D']),
    D: new Set([]),
    E: new Set(['A']),
    F: new Set(['E']),
  };
