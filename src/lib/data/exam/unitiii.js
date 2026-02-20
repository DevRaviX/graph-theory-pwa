export const unitiii_examMCQs = {
  "unit": "Unit III",
  "title": "Unit 3 - Minimum Spanning Tree (Exam Level)",
  "questions": [
    {
      "question": "A minimum spanning tree of a graph with n vertices contains how many edges?",
      "options": [
        "n",
        "n-1",
        "n+1",
        "2n"
      ],
      "correct": 1,
      "explanation": "The correct answer is n-1."
    },
    {
      "question": "Prim’s algorithm is best suited for:",
      "options": [
        "Sparse graph",
        "Dense graph",
        "Directed graph",
        "Disconnected graph"
      ],
      "correct": 1,
      "explanation": "The correct answer is Dense graph."
    },
    {
      "question": "Kruskal’s algorithm is best suited for:",
      "options": [
        "Dense graph",
        "Sparse graph",
        "Complete graph only",
        "Tree only"
      ],
      "correct": 1,
      "explanation": "The correct answer is Sparse graph."
    },
    {
      "question": "Kruskal’s algorithm selects edges based on:",
      "options": [
        "Highest weight first",
        "Random order",
        "Increasing weight order",
        "Vertex degree"
      ],
      "correct": 2,
      "explanation": "The correct answer is Increasing weight order."
    },
    {
      "question": "Prim’s algorithm grows a tree by:",
      "options": [
        "Selecting smallest edge globally",
        "Selecting smallest edge from included vertices",
        "Removing cycles",
        "Deleting vertices"
      ],
      "correct": 1,
      "explanation": "The correct answer is Selecting smallest edge from included vertices."
    },
    {
      "question": "If all edge weights are distinct, the MST is:",
      "options": [
        "Unique",
        "Multiple",
        "Impossible",
        "Disconnected"
      ],
      "correct": 0,
      "explanation": "The correct answer is Unique."
    },
    {
      "question": "If all edge weights are equal, MST:",
      "options": [
        "Is unique",
        "May not be unique",
        "Impossible",
        "Forms cycle"
      ],
      "correct": 1,
      "explanation": "The correct answer is May not be unique."
    },
    {
      "question": "Time complexity of Kruskal’s algorithm mainly depends on:",
      "options": [
        "Sorting edges",
        "DFS",
        "BFS",
        "Vertex removal"
      ],
      "correct": 0,
      "explanation": "The correct answer is Sorting edges."
    },
    {
      "question": "In Kruskal’s algorithm, cycle detection is done using:",
      "options": [
        "Stack",
        "Queue",
        "Union-Find",
        "DFS only"
      ],
      "correct": 2,
      "explanation": "The correct answer is Union-Find."
    },
    {
      "question": "Prim’s algorithm can be implemented efficiently using:",
      "options": [
        "Stack",
        "Queue",
        "Priority Queue",
        "Matrix only"
      ],
      "correct": 2,
      "explanation": "The correct answer is Priority Queue."
    },
    {
      "question": "A graph has 6 vertices. MST total edges selected are:",
      "options": [
        "6",
        "5",
        "4",
        "7"
      ],
      "correct": 1,
      "explanation": "The correct answer is 5."
    },
    {
      "question": "If a graph is disconnected, MST:",
      "options": [
        "Exists",
        "Does not exist",
        "Becomes cycle",
        "Becomes complete"
      ],
      "correct": 1,
      "explanation": "The correct answer is Does not exist."
    },
    {
      "question": "The smallest edge in a cycle is always:",
      "options": [
        "In MST",
        "Excluded from MST",
        "Optional",
        "Ignored"
      ],
      "correct": 0,
      "explanation": "The correct answer is In MST."
    },
    {
      "question": "The largest edge in a cycle is always:",
      "options": [
        "Included",
        "Excluded if alternative exists",
        "Mandatory",
        "Root edge"
      ],
      "correct": 1,
      "explanation": "The correct answer is Excluded if alternative exists."
    },
    {
      "question": "MST of a tree is:",
      "options": [
        "Tree itself",
        "Null graph",
        "Complete graph",
        "Cycle"
      ],
      "correct": 0,
      "explanation": "The correct answer is Tree itself."
    },
    {
      "question": "If two MSTs exist, their total weights are:",
      "options": [
        "Different",
        "Same",
        "Random",
        "Increasing"
      ],
      "correct": 1,
      "explanation": "The correct answer is Same."
    },
    {
      "question": "Prim’s algorithm starts with:",
      "options": [
        "Edge",
        "Vertex",
        "Cycle",
        "Face"
      ],
      "correct": 1,
      "explanation": "The correct answer is Vertex."
    },
    {
      "question": "Kruskal’s algorithm stops after selecting:",
      "options": [
        "V edges",
        "V-1 edges",
        "E edges",
        "V+1 edges"
      ],
      "correct": 1,
      "explanation": "The correct answer is V-1 edges."
    },
    {
      "question": "MST minimizes:",
      "options": [
        "Number of vertices",
        "Total weight",
        "Number of cycles",
        "Diameter"
      ],
      "correct": 1,
      "explanation": "The correct answer is Total weight."
    },
    {
      "question": "If an edge is heavier than all edges in a cycle, it:",
      "options": [
        "Must be in MST",
        "Cannot be in MST",
        "Always chosen first",
        "Forms root"
      ],
      "correct": 1,
      "explanation": "The correct answer is Cannot be in MST."
    },
    {
      "question": "Adding any non-tree edge to MST creates:",
      "options": [
        "Forest",
        "Exactly one cycle",
        "Disconnected graph",
        "Null graph"
      ],
      "correct": 1,
      "explanation": "The correct answer is Exactly one cycle."
    },
    {
      "question": "Removing any edge from MST results in:",
      "options": [
        "Cycle",
        "Disconnected graph",
        "Complete graph",
        "Forest"
      ],
      "correct": 1,
      "explanation": "The correct answer is Disconnected graph."
    },
    {
      "question": "Total weight of MST is always:",
      "options": [
        "Maximum",
        "Minimum",
        "Average",
        "Zero"
      ],
      "correct": 1,
      "explanation": "The correct answer is Minimum."
    },
    {
      "question": "If graph has V vertices and E edges, MST has:",
      "options": [
        "E edges",
        "V edges",
        "V-1 edges",
        "E-1 edges"
      ],
      "correct": 2,
      "explanation": "The correct answer is V-1 edges."
    },
    {
      "question": "Prim’s and Kruskal’s algorithm both produce:",
      "options": [
        "Different trees always",
        "Same total weight MST",
        "Cycle",
        "Disconnected graph"
      ],
      "correct": 1,
      "explanation": "The correct answer is Same total weight MST."
    }
  ]
};
