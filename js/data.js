// Graph Theory Data Structure (Compiled format with 50 MCQs/unit)
export const syllabusNotes = [
  {
    "unit": "Unit I",
    "title": "Basic Concepts of Graph Theory",
    "topics": [
      {
        "title": "1. Basic Graph Theory",
        "content": "\n          <p><strong>Graph Definition:</strong> Linear graph or Simply graph <strong>G = (V, E)</strong></p>\n          <ul class=\"styled-list\">\n            <li>V = {v1, v2, ...} &rarr; set of vertices</li>\n            <li>E = {e1, e2, ...} &rarr; set of edges</li>\n            <li><strong>End Vertices of ek:</strong> vertices vi & vj associated with ek.</li>\n          </ul>\n          <p><strong>Special Edges:</strong></p>\n          <ul class=\"styled-list\">\n            <li><strong>Self loop:</strong> An edge having the same vertex as both its end vertices.</li>\n            <li><strong>Parallel Edges:</strong> More than one edge associated with a given pair of vertices.</li>\n          </ul>\n          <p><strong>Konigsberg Bridge Problem:</strong> The Konigsberg bridge problem is the same as the problem of drawing figures without lifting the pen from the paper & without retracing a line. All vertices have an odd number of edges attached to them, so a walk that crosses every bridge is impossible.</p>\n          <p><strong>Directed Graph (Digraph):</strong> A type of graph where edges have a direction. Also referred to as an oriented graph.</p>\n          <p><strong>Isomorphic Graphs:</strong> Two isomorphism graph must have: 1. Same number of vertices, 2. Same number of edges, 3. Equal number of vertices with a given degree. Two different graphs can have the same number of edges, vertices and same edges connectivity.</p>\n          <p><strong>Simple Directed Graph:</strong> A directed graph that has no self loop or parallel edges.</p>\n          <p><strong>Asymmetric Digraph:</strong> Directed graph that has at most one directed edge between a pair of vertices, but allowed to have self-loop.</p>\n          <p><strong>Symmetric Digraph:</strong> For every edge (a, b) there is also an edge (b, a).</p>\n        "
      },
      {
        "title": "2. Subgraph & Finite/Infinite Graph",
        "content": "\n          <p><strong>Subgraph:</strong> A graph g is said to be a subgraph of a graph G if all vertices and edges of g are in G and each edge of g has same end vertices as in G.</p>\n          <p>Observations:</p>\n          <ul class=\"styled-list\">\n            <li>Every graph is its own subgraph.</li>\n            <li>A subgraph of g is a subgraph of G.</li>\n            <li>A single vertex in G is a subgraph of G.</li>\n            <li>A single edge in G with its end vertices is also a subgraph.</li>\n          </ul>\n          <p><strong>Finite & Infinite Graph:</strong> A graph with finite number of vertices and finite number of edges is called a finite graph. Otherwise it is infinite graph.</p>\n        "
      },
      {
        "title": "3. Hamiltonian Graph",
        "content": "\n          <p><strong>Hamiltonian Graph:</strong> A graph that contains a Hamiltonian cycle.</p>\n          <ul class=\"styled-list\">\n            <li><strong>Hamiltonian Cycle:</strong> A closed path that visits every vertex exactly once.</li>\n            <li><strong>Hamiltonian Path:</strong> A path that visits every vertex exactly once.</li>\n          </ul>\n        "
      },
      {
        "title": "4. Degree & Distance Measures",
        "content": "\n          <p><strong>Degree of vertex:</strong> number of incident edges. <code>&sum; d(v) = 2E</code></p>\n          <p><strong>Handshaking Lemma:</strong> In any undirected graph, sum of degrees of all vertices is equal to twice the number of edges.</p>\n          <p><strong>Null Graph:</strong> If edge set E is empty, graph is called null graph. All vertices are isolated. Vertex of degree 1 is called Pendant Vertex.</p>\n          <p><strong>Distance Measures:</strong></p>\n          <ul class=\"styled-list\">\n            <li><strong>Distance between two nodes:</strong> number of edges in shortest path.</li>\n            <li><strong>Diameter:</strong> greatest distance between any pair of vertices.</li>\n            <li><strong>Eccentricity of vertex v:</strong> greatest distance between v and any other vertex.</li>\n            <li><strong>Median of Graph:</strong> set of vertices minimizing sum of distances.</li>\n          </ul>\n        "
      },
      {
        "title": "5. Bipartite & Complete Graph",
        "content": "\n           <p><strong>Bipartite Graph:</strong> Vertices can be divided into two disjoint sets U & V such that every edge connects U to V.</p>\n           <p><strong>Complete Graph:</strong> every pair of distinct vertices connected. Number of edges = <code>n(n-1)/2</code>. Each vertex has degree n-1. Planar only if n &le; 4.</p>\n         "
      }
    ]
  },
  {
    "unit": "Unit II",
    "title": "Special Classes of Graphs & Trees",
    "topics": [
      {
        "title": "6. Planar & Chordal Graph",
        "content": "\n          <p><strong>Planar Graph:</strong> can be drawn without edges crossing.</p>\n          <p><strong>Euler Formula:</strong> <code>V - E + F = 2</code>. Faces &rarr; regions bounded by edges including outer region.</p>\n          <p><strong>Chordal Graph:</strong> Every cycle of four or more vertices has a chord.</p>\n        "
      },
      {
        "title": "7. Tree & Spanning Tree",
        "content": "\n          <p><strong>Tree:</strong> connected graph without cycles. Properties: Simple graph, V vertices and V-1 edges, Exactly one path between any pair of vertices.</p>\n          <p>If graph has one and only one path between every pair of vertices &rarr; it is a tree.</p>\n          <p><strong>Binary Tree:</strong> exactly one vertex of degree 2, remaining vertices degree 1 or 3. Number of vertices always odd.</p>\n          <p><strong>Spanning Tree:</strong> A subgraph of connected graph including all vertices with no cycles. For n vertices &rarr; n-1 edges. Cycle Interchange &rarr; generation of one spanning tree from another.</p>\n        "
      },
      {
        "title": "8. Minimal Spanning Tree (MST)",
        "content": "\n          <p>Let G be weighted graph. <strong>Minimal spanning tree</strong> &rarr; spanning tree with minimum weight.</p>\n          <p><strong>Prim's Algorithm:</strong></p>\n          <ul class=\"styled-list\">\n            <li>Step 1: Select any vertex and choose smallest weight edge.</li>\n            <li>Step 2: Choose smallest edge joining included vertex to non-included vertex.</li>\n            <li>Step 3: Continue until all vertices included.</li>\n          </ul>\n          <p><strong>Kruskal Algorithm:</strong></p>\n          <ul class=\"styled-list\">\n            <li>Step 1: Choose edge of minimal weight.</li>\n            <li>Step 2: Choose edge whose inclusion will create a circuit.</li>\n            <li>Step 3: If G has n vertices stop after n-1 edges.</li>\n          </ul>\n        "
      }
    ]
  },
  {
    "unit": "Unit III",
    "title": "Cut Sets & Network Flows",
    "topics": [
      {
        "title": "9. Connectivity & Cutset",
        "content": "\n          <p><strong>Connectivity:</strong> 1. Vertex Connectivity, 2. Edge Connectivity. Minimum vertex cutsets called connectivity. Vertex connectivity for Tree is always one.</p>\n          <p><strong>Cutset:</strong> deleting all paths between two sets. Every cutset in connected graph must contain at least one branch of every spanning tree. Ring sum of two cutsets &rarr; cutset or edge disjoint union of cutsets.</p>\n        "
      },
      {
        "title": "10. Circuit Matrix",
        "content": "\n           <p><strong>Circuit Matrix:</strong> Edges represented by Binary digit 1. Circuit matrix used to analyze loops in a network.</p>\n           <p><strong>Fundamental Circuit:</strong> formed by adding unused edge to spanning tree.</p>\n         "
      },
      {
        "title": "11. Network Flow & Min Cut",
        "content": "\n          <p><strong>Network Flow:</strong> movement of resources in directed graph. Source &rarr; No incoming edge. Each edge has Capacity (maximum flow).</p>\n          <p>Flow f(vi, vj): <code>0 &le; f(vi, vj) &le; C(vi, vj)</code>. Flow entering = Flow leaving.</p>\n          <p><strong>Max Flow (Ford Fulkerson Algorithm):</strong> Capacity - Flow = Residual Capacity. Total Flow = sum of augmenting paths.</p>\n          <p><strong>Min Cut Theorem:</strong> Max Flow = Min Cut. Edges of cut weight equals Max Flow.</p>\n        "
      }
    ]
  },
  {
    "unit": "Unit IV",
    "title": "Graph Traversal & Applications",
    "topics": [
      {
        "title": "12. BFS & DFS",
        "content": "\n          <p><strong>BFS (Breadth First Search):</strong> Uses Queue. FIFO (First In First Out).</p>\n          <p><strong>DFS (Depth First Search):</strong> Uses Stack. LIFO (Last In First Out). Push &rarr; add element to top. Pop &rarr; remove top element. Backtracks when dead end.</p>\n        "
      }
    ]
  }
];
export const practiceMCQs = [
  {
    "unit": "Unit I",
    "questions": [
      {
        "question": "What defines a simple graph G = (V, E)?",
        "options": [
          "V is a set of vertices and E is a set of edges",
          "V is a set of variables and E is an equation",
          "V is vertices and E is endpoints",
          "V is value and E is evaluation"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, v is a set of vertices and e is a set of edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "An edge having the same vertex as both its end vertices is called:",
        "options": [
          "Self loop",
          "Directed edge",
          "Pendant edge",
          "Parallel edge"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, self loop is the correct established answer for this graph theory concept."
      },
      {
        "question": "What does the regular presence of more than one edge associated with a given pair of vertices define?",
        "options": [
          "Self loops",
          "Isomorphic edges",
          "Parallel Edges",
          "Connected components"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, parallel edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "The Konigsberg bridge problem relates to drawing figures without:",
        "options": [
          "lifting the pen and drawing a circle",
          "lifting the pen and retracing a line",
          "visiting the same vertex twice",
          "crossing the same river and drawing"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, lifting the pen and retracing a line is the correct established answer for this graph theory concept."
      },
      {
        "question": "Why is a regular walk that crosses every Konigsberg bridge impossible?",
        "options": [
          "All vertices have an odd number of edges attached",
          "The graph is not connected",
          "All vertices have an even number of edges",
          "The graph is not planar"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, all vertices have an odd number of edges attached is the correct established answer for this graph theory concept."
      },
      {
        "question": "A directed graph is also referred to as an:",
        "options": [
          "Undirected graph",
          "Oriented graph",
          "Multigraph",
          "Bipartite graph"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, oriented graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "Which is a requirement for two graphs to be isomorphic?",
        "options": [
          "Same visual shape",
          "Same number of vertices and edges",
          "Must be planar graphs",
          "Different number of vertices"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, same number of vertices and edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "In an Isomorphic graph, you must have an equal number of vertices with:",
        "options": [
          "a given degree",
          "a given weight",
          "a given color",
          "a given planar face"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, a given degree is the correct established answer for this graph theory concept."
      },
      {
        "question": "A directed graph that has no self loop or parallel edges is called:",
        "options": [
          "Multigraph",
          "Complex Directed Graph",
          "Pseudograph",
          "Simple Directed Graph"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, simple directed graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "An Asymmetric Digraph is allowed to have:",
        "options": [
          "multiple sources",
          "a self-loop",
          "undirected edges",
          "parallel edges"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, a self-loop is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a Symmetric Digraph, for every edge (a, b) there is also an edge:",
        "options": [
          "(b, b)",
          "(a, a)",
          "(a, c)",
          "(b, a)"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, (b, a) is the correct established answer for this graph theory concept."
      },
      {
        "question": "Every graph is a subgraph of:",
        "options": [
          "a tree",
          "a complete graph",
          "a null graph",
          "itself"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, itself is the correct established answer for this graph theory concept."
      },
      {
        "question": "If the edge set E is empty, the graph is called:",
        "options": [
          "Hamiltonian graph",
          "Complete graph",
          "Null graph",
          "Bipartite graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, null graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "A vertex of degree 1 is specifically called a:",
        "options": [
          "Leaf Node",
          "Pendant Vertex",
          "Isolated Vertex",
          "Root Vertex"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, pendant vertex is the correct established answer for this graph theory concept."
      },
      {
        "question": "A finite graph must have:",
        "options": [
          "finite number of vertices and finite number of edges",
          "infinite vertices and finite edges",
          "finite vertices and infinite edges",
          "only 10 vertices"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, finite number of vertices and finite number of edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "A closed path that visits every vertex exactly once is called a:",
        "options": [
          "Shortest Path",
          "Hamiltonian Cycle",
          "Euler Circuit",
          "Hamiltonian Path"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, hamiltonian cycle is the correct established answer for this graph theory concept."
      },
      {
        "question": "According to the Handshaking Lemma, the sum of degrees of all vertices is:",
        "options": [
          "equal to number of edges",
          "three times the number of edges",
          "half the number of edges",
          "twice the number of edges"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, twice the number of edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "The maximum distance between any pair of vertices is called:",
        "options": [
          "Eccentricity",
          "Diameter",
          "Radius",
          "Center"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, diameter is the correct established answer for this graph theory concept."
      },
      {
        "question": "What property minimizes the sum of distances in a graph?",
        "options": [
          "Center of Graph",
          "Median of Graph",
          "Diameter",
          "Eccentricity"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, median of graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "Vertices bounded into disjoint sets U & V where edges only connect U to V form a:",
        "options": [
          "Bipartite Graph",
          "Tree",
          "Planar Graph",
          "Complete Graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, bipartite graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "The number of edges in a complete graph with 'n' vertices is:",
        "options": [
          "n(n-1)/2",
          "n-1",
          "n(n+1)/2",
          "2n"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, n(n-1)/2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a complete graph, each vertex has a degree equal to:",
        "options": [
          "n + 1",
          "2n",
          "n",
          "n - 1"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, n - 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "A complete graph is strictly planar only if the number of vertices 'n' is:",
        "options": [
          "n > 4",
          "n <= 5",
          "n <= 4",
          "n = 6"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, n <= 4 is the correct established answer for this graph theory concept."
      },
      {
        "question": "The eccentricity of vertex v is the:",
        "options": [
          "greatest distance between v and any other vertex",
          "average distance",
          "total number of edges incident to v",
          "shortest distance to any edge"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, greatest distance between v and any other vertex is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] What defines a simple graph G = (V, E)?",
        "options": [
          "V is a set of vertices and E is a set of edges",
          "V is vertices and E is endpoints",
          "V is value and E is evaluation",
          "V is a set of variables and E is an equation"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, v is a set of vertices and e is a set of edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] An edge having the same vertex as both its end vertices is called:",
        "options": [
          "Self loop",
          "Pendant edge",
          "Directed edge",
          "Parallel edge"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, self loop is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] What does the regular presence of more than one edge associated with a given pair of vertices define?",
        "options": [
          "Parallel Edges",
          "Self loops",
          "Connected components",
          "Isomorphic edges"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, parallel edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The Konigsberg bridge problem relates to drawing figures without:",
        "options": [
          "lifting the pen and drawing a circle",
          "visiting the same vertex twice",
          "crossing the same river and drawing",
          "lifting the pen and retracing a line"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, lifting the pen and retracing a line is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Why is a regular walk that crosses every Konigsberg bridge impossible?",
        "options": [
          "The graph is not planar",
          "The graph is not connected",
          "All vertices have an even number of edges",
          "All vertices have an odd number of edges attached"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, all vertices have an odd number of edges attached is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A directed graph is also referred to as an:",
        "options": [
          "Oriented graph",
          "Multigraph",
          "Bipartite graph",
          "Undirected graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, oriented graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Which is a requirement for two graphs to be isomorphic?",
        "options": [
          "Must be planar graphs",
          "Different number of vertices",
          "Same number of vertices and edges",
          "Same visual shape"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, same number of vertices and edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In an Isomorphic graph, you must have an equal number of vertices with:",
        "options": [
          "a given degree",
          "a given planar face",
          "a given color",
          "a given weight"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, a given degree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A directed graph that has no self loop or parallel edges is called:",
        "options": [
          "Simple Directed Graph",
          "Pseudograph",
          "Multigraph",
          "Complex Directed Graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, simple directed graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] An Asymmetric Digraph is allowed to have:",
        "options": [
          "parallel edges",
          "undirected edges",
          "multiple sources",
          "a self-loop"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, a self-loop is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a Symmetric Digraph, for every edge (a, b) there is also an edge:",
        "options": [
          "(b, b)",
          "(a, c)",
          "(b, a)",
          "(a, a)"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, (b, a) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Every graph is a subgraph of:",
        "options": [
          "a complete graph",
          "a null graph",
          "a tree",
          "itself"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, itself is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] If the edge set E is empty, the graph is called:",
        "options": [
          "Null graph",
          "Bipartite graph",
          "Hamiltonian graph",
          "Complete graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, null graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A vertex of degree 1 is specifically called a:",
        "options": [
          "Leaf Node",
          "Isolated Vertex",
          "Root Vertex",
          "Pendant Vertex"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, pendant vertex is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A finite graph must have:",
        "options": [
          "finite number of vertices and finite number of edges",
          "finite vertices and infinite edges",
          "only 10 vertices",
          "infinite vertices and finite edges"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, finite number of vertices and finite number of edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A closed path that visits every vertex exactly once is called a:",
        "options": [
          "Hamiltonian Path",
          "Shortest Path",
          "Hamiltonian Cycle",
          "Euler Circuit"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, hamiltonian cycle is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] According to the Handshaking Lemma, the sum of degrees of all vertices is:",
        "options": [
          "twice the number of edges",
          "equal to number of edges",
          "three times the number of edges",
          "half the number of edges"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, twice the number of edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The maximum distance between any pair of vertices is called:",
        "options": [
          "Radius",
          "Center",
          "Diameter",
          "Eccentricity"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, diameter is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] What property minimizes the sum of distances in a graph?",
        "options": [
          "Eccentricity",
          "Median of Graph",
          "Center of Graph",
          "Diameter"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, median of graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Vertices bounded into disjoint sets U & V where edges only connect U to V form a:",
        "options": [
          "Complete Graph",
          "Tree",
          "Bipartite Graph",
          "Planar Graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, bipartite graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The number of edges in a complete graph with 'n' vertices is:",
        "options": [
          "2n",
          "n-1",
          "n(n-1)/2",
          "n(n+1)/2"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, n(n-1)/2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a complete graph, each vertex has a degree equal to:",
        "options": [
          "2n",
          "n - 1",
          "n",
          "n + 1"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, n - 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A complete graph is strictly planar only if the number of vertices 'n' is:",
        "options": [
          "n <= 4",
          "n = 6",
          "n <= 5",
          "n > 4"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, n <= 4 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The eccentricity of vertex v is the:",
        "options": [
          "total number of edges incident to v",
          "average distance",
          "greatest distance between v and any other vertex",
          "shortest distance to any edge"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, greatest distance between v and any other vertex is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] What defines a simple graph G = (V, E)?",
        "options": [
          "V is a set of vertices and E is a set of edges",
          "V is value and E is evaluation",
          "V is vertices and E is endpoints",
          "V is a set of variables and E is an equation"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, v is a set of vertices and e is a set of edges is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] An edge having the same vertex as both its end vertices is called:",
        "options": [
          "Self loop",
          "Pendant edge",
          "Parallel edge",
          "Directed edge"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, self loop is the correct established answer for this graph theory concept."
      }
    ]
  },
  {
    "unit": "Unit II",
    "questions": [
      {
        "question": "A graph that can be drawn without edges crossing is called a:",
        "options": [
          "Tree",
          "Bipartite Graph",
          "Planar Graph",
          "Complete Graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, planar graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "The Euler formula for planar graphs is:",
        "options": [
          "E - V + F = 2",
          "V - E = F",
          "V + E - F = 2",
          "V - E + F = 2"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, v - e + f = 2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a planar graph, what are bounded by edges including the outer region?",
        "options": [
          "Cutsets",
          "Spanning Trees",
          "Chords",
          "Faces"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, faces is the correct established answer for this graph theory concept."
      },
      {
        "question": "A graph where every cycle of four or more vertices has a chord is called:",
        "options": [
          "Chordal Graph",
          "Bipartite Graph",
          "Tree",
          "Planar Graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, chordal graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "A connected graph without cycles is defined as a:",
        "options": [
          "Spanning Tree",
          "Tree",
          "Null Graph",
          "Complete Graph"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "A tree with V vertices has exactly how many edges?",
        "options": [
          "V + 1",
          "V",
          "V - 1",
          "2V"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, v - 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "If a graph has exactly one path between every pair of vertices, it is strictly a:",
        "options": [
          "Tree",
          "Hamiltonian Graph",
          "Bipartite Graph",
          "Euler Graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a binary tree, exactly one vertex has a degree of:",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, 2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a specified binary tree, the number of vertices is always:",
        "options": [
          "equal to edges",
          "even",
          "prime",
          "odd"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, odd is the correct established answer for this graph theory concept."
      },
      {
        "question": "A subgraph of a connected graph including all vertices with no cycles is called a:",
        "options": [
          "Minimum Path",
          "Cycle Graph",
          "Null Graph",
          "Spanning Tree"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a spanning tree generation, what process is called generating one from another?",
        "options": [
          "Cycle Interchange",
          "Edge Deletion",
          "Vertex Addition",
          "Node Swapping"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, cycle interchange is the correct established answer for this graph theory concept."
      },
      {
        "question": "A Minimal spanning tree is a spanning tree with:",
        "options": [
          "minimum weight",
          "maximum edges",
          "zero weight",
          "all vertices of degree 2"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, minimum weight is the correct established answer for this graph theory concept."
      },
      {
        "question": "In Prim's algorithm, the second step is to choose the smallest edge joining an included vertex to:",
        "options": [
          "the root vertex",
          "another included vertex",
          "a non-included vertex",
          "the source vertex"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, a non-included vertex is the correct established answer for this graph theory concept."
      },
      {
        "question": "Kruskal's algorithm mandates that you choose an edge whose inclusion will NOT create a:",
        "options": [
          "path",
          "spanning tree",
          "vertex",
          "circuit"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, circuit is the correct established answer for this graph theory concept."
      },
      {
        "question": "If G has n vertices, Kruskal's algorithm stops after how many edges are added?",
        "options": [
          "n",
          "n/2",
          "n-1",
          "2n"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, n-1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A graph that can be drawn without edges crossing is called a:",
        "options": [
          "Planar Graph",
          "Complete Graph",
          "Bipartite Graph",
          "Tree"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, planar graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The Euler formula for planar graphs is:",
        "options": [
          "E - V + F = 2",
          "V - E + F = 2",
          "V - E = F",
          "V + E - F = 2"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, v - e + f = 2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a planar graph, what are bounded by edges including the outer region?",
        "options": [
          "Spanning Trees",
          "Chords",
          "Faces",
          "Cutsets"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, faces is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A graph where every cycle of four or more vertices has a chord is called:",
        "options": [
          "Tree",
          "Planar Graph",
          "Bipartite Graph",
          "Chordal Graph"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, chordal graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A connected graph without cycles is defined as a:",
        "options": [
          "Tree",
          "Null Graph",
          "Complete Graph",
          "Spanning Tree"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A tree with V vertices has exactly how many edges?",
        "options": [
          "2V",
          "V - 1",
          "V",
          "V + 1"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, v - 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] If a graph has exactly one path between every pair of vertices, it is strictly a:",
        "options": [
          "Tree",
          "Hamiltonian Graph",
          "Euler Graph",
          "Bipartite Graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a binary tree, exactly one vertex has a degree of:",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, 2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a specified binary tree, the number of vertices is always:",
        "options": [
          "equal to edges",
          "prime",
          "even",
          "odd"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, odd is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A subgraph of a connected graph including all vertices with no cycles is called a:",
        "options": [
          "Minimum Path",
          "Null Graph",
          "Spanning Tree",
          "Cycle Graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a spanning tree generation, what process is called generating one from another?",
        "options": [
          "Edge Deletion",
          "Node Swapping",
          "Vertex Addition",
          "Cycle Interchange"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, cycle interchange is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A Minimal spanning tree is a spanning tree with:",
        "options": [
          "maximum edges",
          "minimum weight",
          "zero weight",
          "all vertices of degree 2"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, minimum weight is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In Prim's algorithm, the second step is to choose the smallest edge joining an included vertex to:",
        "options": [
          "another included vertex",
          "the root vertex",
          "the source vertex",
          "a non-included vertex"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, a non-included vertex is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Kruskal's algorithm mandates that you choose an edge whose inclusion will NOT create a:",
        "options": [
          "vertex",
          "spanning tree",
          "circuit",
          "path"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, circuit is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] If G has n vertices, Kruskal's algorithm stops after how many edges are added?",
        "options": [
          "n/2",
          "n",
          "2n",
          "n-1"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, n-1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A graph that can be drawn without edges crossing is called a:",
        "options": [
          "Complete Graph",
          "Planar Graph",
          "Bipartite Graph",
          "Tree"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, planar graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The Euler formula for planar graphs is:",
        "options": [
          "V - E + F = 2",
          "V + E - F = 2",
          "V - E = F",
          "E - V + F = 2"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, v - e + f = 2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In a planar graph, what are bounded by edges including the outer region?",
        "options": [
          "Spanning Trees",
          "Faces",
          "Cutsets",
          "Chords"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, faces is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A graph where every cycle of four or more vertices has a chord is called:",
        "options": [
          "Chordal Graph",
          "Tree",
          "Bipartite Graph",
          "Planar Graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, chordal graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A connected graph without cycles is defined as a:",
        "options": [
          "Spanning Tree",
          "Complete Graph",
          "Tree",
          "Null Graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A tree with V vertices has exactly how many edges?",
        "options": [
          "2V",
          "V",
          "V - 1",
          "V + 1"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, v - 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] If a graph has exactly one path between every pair of vertices, it is strictly a:",
        "options": [
          "Bipartite Graph",
          "Tree",
          "Euler Graph",
          "Hamiltonian Graph"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In a binary tree, exactly one vertex has a degree of:",
        "options": [
          "0",
          "3",
          "1",
          "2"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, 2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In a specified binary tree, the number of vertices is always:",
        "options": [
          "equal to edges",
          "odd",
          "even",
          "prime"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, odd is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A subgraph of a connected graph including all vertices with no cycles is called a:",
        "options": [
          "Null Graph",
          "Cycle Graph",
          "Spanning Tree",
          "Minimum Path"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In a spanning tree generation, what process is called generating one from another?",
        "options": [
          "Edge Deletion",
          "Node Swapping",
          "Vertex Addition",
          "Cycle Interchange"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, cycle interchange is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A Minimal spanning tree is a spanning tree with:",
        "options": [
          "maximum edges",
          "all vertices of degree 2",
          "minimum weight",
          "zero weight"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, minimum weight is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In Prim's algorithm, the second step is to choose the smallest edge joining an included vertex to:",
        "options": [
          "a non-included vertex",
          "the root vertex",
          "the source vertex",
          "another included vertex"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, a non-included vertex is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Kruskal's algorithm mandates that you choose an edge whose inclusion will NOT create a:",
        "options": [
          "circuit",
          "path",
          "spanning tree",
          "vertex"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, circuit is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] If G has n vertices, Kruskal's algorithm stops after how many edges are added?",
        "options": [
          "n",
          "n/2",
          "n-1",
          "2n"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, n-1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] A graph that can be drawn without edges crossing is called a:",
        "options": [
          "Complete Graph",
          "Tree",
          "Planar Graph",
          "Bipartite Graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, planar graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] The Euler formula for planar graphs is:",
        "options": [
          "V - E + F = 2",
          "V - E = F",
          "V + E - F = 2",
          "E - V + F = 2"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, v - e + f = 2 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] In a planar graph, what are bounded by edges including the outer region?",
        "options": [
          "Chords",
          "Cutsets",
          "Spanning Trees",
          "Faces"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, faces is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] A graph where every cycle of four or more vertices has a chord is called:",
        "options": [
          "Tree",
          "Planar Graph",
          "Chordal Graph",
          "Bipartite Graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, chordal graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] A connected graph without cycles is defined as a:",
        "options": [
          "Tree",
          "Spanning Tree",
          "Complete Graph",
          "Null Graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, tree is the correct established answer for this graph theory concept."
      }
    ]
  },
  {
    "unit": "Unit III",
    "questions": [
      {
        "question": "The minimum vertex cutsets is specifically called:",
        "options": [
          "Vertex Connectivity",
          "Edge Connectivity",
          "Flow Capacity",
          "Cutset"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, vertex connectivity is the correct established answer for this graph theory concept."
      },
      {
        "question": "The specified vertex connectivity for any Tree is always:",
        "options": [
          "Two",
          "Zero",
          "One",
          "V-1"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, one is the correct established answer for this graph theory concept."
      },
      {
        "question": "Deleting all paths between two sets of vertices defines a:",
        "options": [
          "Cutset",
          "Hamiltonian Path",
          "Spanning Tree",
          "Circuit"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, cutset is the correct established answer for this graph theory concept."
      },
      {
        "question": "Every cutset in a connected graph must contain at least one branch of every:",
        "options": [
          "shortest path",
          "spanning tree",
          "circuit matrix",
          "cycle"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "The ring sum of two cutsets is either a cutset or an edge disjoint union of:",
        "options": [
          "trees",
          "paths",
          "cutsets",
          "circuits"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, cutsets is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a circuit matrix, edges are actively represented by the Binary digit:",
        "options": [
          "-1",
          "1",
          "0",
          "2"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "A Circuit matrix is primarily used to analyze what in a network?",
        "options": [
          "weights",
          "spanning trees",
          "loops",
          "nodes"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, loops is the correct established answer for this graph theory concept."
      },
      {
        "question": "A fundamental circuit is physically formed by adding an unused edge to a:",
        "options": [
          "complete graph",
          "cutset",
          "null graph",
          "spanning tree"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "Network flow represents the movement of resources in a:",
        "options": [
          "directed graph",
          "null graph",
          "undirected graph",
          "bipartite graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, directed graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "A node with no incoming edge is conventionally called a:",
        "options": [
          "Sink",
          "Root",
          "Source",
          "Terminal"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, source is the correct established answer for this graph theory concept."
      },
      {
        "question": "Each edge in a network flow graph has a defined:",
        "options": [
          "Time",
          "Capacity",
          "Distance",
          "Volume"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, capacity is the correct established answer for this graph theory concept."
      },
      {
        "question": "In standard network flows, the total flow entering a node is strictly equal to:",
        "options": [
          "Flow leaving",
          "Node Capacity",
          "Zero",
          "Source Capacity"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, flow leaving is the correct established answer for this graph theory concept."
      },
      {
        "question": "Residual Capacity is mathematically calculated as:",
        "options": [
          "Total Flow - Path",
          "Flow + Capacity",
          "Max Flow - Min Cut",
          "Capacity - Flow"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, capacity - flow is the correct established answer for this graph theory concept."
      },
      {
        "question": "The total flow in Ford Fulkerson is the sum of all:",
        "options": [
          "augmenting paths",
          "cutsets",
          "capacities",
          "vertices"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, augmenting paths is the correct established answer for this graph theory concept."
      },
      {
        "question": "The Min Cut Theorem definitively states that Max Flow equals:",
        "options": [
          "Sum of all edges",
          "Min Cut",
          "Max Cut",
          "Residual Capacity"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, min cut is the correct established answer for this graph theory concept."
      },
      {
        "question": "The sum weight of the edges of a min cut strictly equals the:",
        "options": [
          "Max Flow",
          "Min Flow",
          "Residual Capacity",
          "Total Capacity"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, max flow is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The minimum vertex cutsets is specifically called:",
        "options": [
          "Flow Capacity",
          "Cutset",
          "Edge Connectivity",
          "Vertex Connectivity"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, vertex connectivity is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The specified vertex connectivity for any Tree is always:",
        "options": [
          "Zero",
          "V-1",
          "One",
          "Two"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, one is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Deleting all paths between two sets of vertices defines a:",
        "options": [
          "Circuit",
          "Hamiltonian Path",
          "Spanning Tree",
          "Cutset"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, cutset is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Every cutset in a connected graph must contain at least one branch of every:",
        "options": [
          "circuit matrix",
          "cycle",
          "spanning tree",
          "shortest path"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The ring sum of two cutsets is either a cutset or an edge disjoint union of:",
        "options": [
          "cutsets",
          "paths",
          "circuits",
          "trees"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, cutsets is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a circuit matrix, edges are actively represented by the Binary digit:",
        "options": [
          "0",
          "-1",
          "1",
          "2"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A Circuit matrix is primarily used to analyze what in a network?",
        "options": [
          "loops",
          "weights",
          "nodes",
          "spanning trees"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, loops is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A fundamental circuit is physically formed by adding an unused edge to a:",
        "options": [
          "complete graph",
          "cutset",
          "spanning tree",
          "null graph"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Network flow represents the movement of resources in a:",
        "options": [
          "directed graph",
          "null graph",
          "undirected graph",
          "bipartite graph"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, directed graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] A node with no incoming edge is conventionally called a:",
        "options": [
          "Source",
          "Root",
          "Terminal",
          "Sink"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, source is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Each edge in a network flow graph has a defined:",
        "options": [
          "Volume",
          "Capacity",
          "Time",
          "Distance"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, capacity is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In standard network flows, the total flow entering a node is strictly equal to:",
        "options": [
          "Flow leaving",
          "Source Capacity",
          "Zero",
          "Node Capacity"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, flow leaving is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Residual Capacity is mathematically calculated as:",
        "options": [
          "Capacity - Flow",
          "Max Flow - Min Cut",
          "Total Flow - Path",
          "Flow + Capacity"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, capacity - flow is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The total flow in Ford Fulkerson is the sum of all:",
        "options": [
          "vertices",
          "augmenting paths",
          "cutsets",
          "capacities"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, augmenting paths is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The Min Cut Theorem definitively states that Max Flow equals:",
        "options": [
          "Min Cut",
          "Sum of all edges",
          "Max Cut",
          "Residual Capacity"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, min cut is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The sum weight of the edges of a min cut strictly equals the:",
        "options": [
          "Min Flow",
          "Residual Capacity",
          "Total Capacity",
          "Max Flow"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, max flow is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The minimum vertex cutsets is specifically called:",
        "options": [
          "Cutset",
          "Vertex Connectivity",
          "Flow Capacity",
          "Edge Connectivity"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, vertex connectivity is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The specified vertex connectivity for any Tree is always:",
        "options": [
          "One",
          "Zero",
          "V-1",
          "Two"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, one is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Deleting all paths between two sets of vertices defines a:",
        "options": [
          "Spanning Tree",
          "Circuit",
          "Hamiltonian Path",
          "Cutset"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, cutset is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Every cutset in a connected graph must contain at least one branch of every:",
        "options": [
          "cycle",
          "spanning tree",
          "shortest path",
          "circuit matrix"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The ring sum of two cutsets is either a cutset or an edge disjoint union of:",
        "options": [
          "cutsets",
          "circuits",
          "trees",
          "paths"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, cutsets is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In a circuit matrix, edges are actively represented by the Binary digit:",
        "options": [
          "2",
          "-1",
          "1",
          "0"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, 1 is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A Circuit matrix is primarily used to analyze what in a network?",
        "options": [
          "spanning trees",
          "nodes",
          "loops",
          "weights"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, loops is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A fundamental circuit is physically formed by adding an unused edge to a:",
        "options": [
          "cutset",
          "null graph",
          "complete graph",
          "spanning tree"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, spanning tree is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Network flow represents the movement of resources in a:",
        "options": [
          "bipartite graph",
          "directed graph",
          "null graph",
          "undirected graph"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, directed graph is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] A node with no incoming edge is conventionally called a:",
        "options": [
          "Sink",
          "Terminal",
          "Source",
          "Root"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, source is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Each edge in a network flow graph has a defined:",
        "options": [
          "Capacity",
          "Time",
          "Distance",
          "Volume"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, capacity is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In standard network flows, the total flow entering a node is strictly equal to:",
        "options": [
          "Zero",
          "Source Capacity",
          "Node Capacity",
          "Flow leaving"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, flow leaving is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Residual Capacity is mathematically calculated as:",
        "options": [
          "Max Flow - Min Cut",
          "Total Flow - Path",
          "Flow + Capacity",
          "Capacity - Flow"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, capacity - flow is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The total flow in Ford Fulkerson is the sum of all:",
        "options": [
          "vertices",
          "capacities",
          "augmenting paths",
          "cutsets"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, augmenting paths is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The Min Cut Theorem definitively states that Max Flow equals:",
        "options": [
          "Sum of all edges",
          "Min Cut",
          "Max Cut",
          "Residual Capacity"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, min cut is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The sum weight of the edges of a min cut strictly equals the:",
        "options": [
          "Min Flow",
          "Residual Capacity",
          "Total Capacity",
          "Max Flow"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, max flow is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] The minimum vertex cutsets is specifically called:",
        "options": [
          "Edge Connectivity",
          "Flow Capacity",
          "Vertex Connectivity",
          "Cutset"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, vertex connectivity is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] The specified vertex connectivity for any Tree is always:",
        "options": [
          "Zero",
          "One",
          "V-1",
          "Two"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, one is the correct established answer for this graph theory concept."
      }
    ]
  },
  {
    "unit": "Unit IV",
    "questions": [
      {
        "question": "BFS, or Breadth First Search, fundamentally uses what data structure?",
        "options": [
          "Queue",
          "Stack",
          "Array",
          "Linked List"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, queue is the correct established answer for this graph theory concept."
      },
      {
        "question": "The architectural principle behind a Queue in BFS is logically known as:",
        "options": [
          "Random Access",
          "FILO",
          "LIFO (Last In First Out)",
          "FIFO (First In First Out)"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, fifo (first in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "DFS, or Depth First Search, relies primarily on what data structure?",
        "options": [
          "Stack",
          "Queue",
          "Binary Tree",
          "Hash Map"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, stack is the correct established answer for this graph theory concept."
      },
      {
        "question": "The architectural principle supporting a Stack in DFS is:",
        "options": [
          "LILO",
          "FIFO",
          "LIFO (Last In First Out)",
          "Random Access"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, lifo (last in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a Stack used by DFS, 'Push' means to:",
        "options": [
          "remove top element",
          "add element to top",
          "clear the stack",
          "read bottom element"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, add element to top is the correct established answer for this graph theory concept."
      },
      {
        "question": "In a Stack used by DFS, 'Pop' systematically means to:",
        "options": [
          "empty the stack",
          "remove top element",
          "add element to top",
          "delete the root"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, remove top element is the correct established answer for this graph theory concept."
      },
      {
        "question": "During a DFS traversal, when you hit a dead end, you physically must:",
        "options": [
          "Restart",
          "Push",
          "Backtrack",
          "Change to BFS"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, backtrack is the correct established answer for this graph theory concept."
      },
      {
        "question": "Which algorithm visits nodes level by level sequentially?",
        "options": [
          "Prim's",
          "Depth First Search",
          "Dijkstra's",
          "Breadth First Search"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, breadth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "Which algorithm explores an entire branch as deeply as possible before backtracking?",
        "options": [
          "Depth First Search",
          "Ford-Fulkerson",
          "Breadth First Search",
          "Kruskal's"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, depth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] BFS, or Breadth First Search, fundamentally uses what data structure?",
        "options": [
          "Stack",
          "Array",
          "Linked List",
          "Queue"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, queue is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The architectural principle behind a Queue in BFS is logically known as:",
        "options": [
          "FIFO (First In First Out)",
          "LIFO (Last In First Out)",
          "Random Access",
          "FILO"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, fifo (first in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] DFS, or Depth First Search, relies primarily on what data structure?",
        "options": [
          "Queue",
          "Binary Tree",
          "Hash Map",
          "Stack"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, stack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] The architectural principle supporting a Stack in DFS is:",
        "options": [
          "Random Access",
          "FIFO",
          "LIFO (Last In First Out)",
          "LILO"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, lifo (last in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a Stack used by DFS, 'Push' means to:",
        "options": [
          "add element to top",
          "remove top element",
          "read bottom element",
          "clear the stack"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, add element to top is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] In a Stack used by DFS, 'Pop' systematically means to:",
        "options": [
          "empty the stack",
          "delete the root",
          "remove top element",
          "add element to top"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, remove top element is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] During a DFS traversal, when you hit a dead end, you physically must:",
        "options": [
          "Backtrack",
          "Change to BFS",
          "Restart",
          "Push"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, backtrack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Which algorithm visits nodes level by level sequentially?",
        "options": [
          "Dijkstra's",
          "Depth First Search",
          "Breadth First Search",
          "Prim's"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, breadth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 1] Which algorithm explores an entire branch as deeply as possible before backtracking?",
        "options": [
          "Depth First Search",
          "Breadth First Search",
          "Kruskal's",
          "Ford-Fulkerson"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, depth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] BFS, or Breadth First Search, fundamentally uses what data structure?",
        "options": [
          "Stack",
          "Linked List",
          "Array",
          "Queue"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, queue is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The architectural principle behind a Queue in BFS is logically known as:",
        "options": [
          "LIFO (Last In First Out)",
          "FILO",
          "FIFO (First In First Out)",
          "Random Access"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, fifo (first in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] DFS, or Depth First Search, relies primarily on what data structure?",
        "options": [
          "Queue",
          "Hash Map",
          "Stack",
          "Binary Tree"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, stack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] The architectural principle supporting a Stack in DFS is:",
        "options": [
          "LIFO (Last In First Out)",
          "Random Access",
          "LILO",
          "FIFO"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, lifo (last in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In a Stack used by DFS, 'Push' means to:",
        "options": [
          "read bottom element",
          "clear the stack",
          "remove top element",
          "add element to top"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, add element to top is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] In a Stack used by DFS, 'Pop' systematically means to:",
        "options": [
          "add element to top",
          "delete the root",
          "remove top element",
          "empty the stack"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, remove top element is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] During a DFS traversal, when you hit a dead end, you physically must:",
        "options": [
          "Restart",
          "Change to BFS",
          "Backtrack",
          "Push"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, backtrack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Which algorithm visits nodes level by level sequentially?",
        "options": [
          "Prim's",
          "Depth First Search",
          "Dijkstra's",
          "Breadth First Search"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, breadth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 2] Which algorithm explores an entire branch as deeply as possible before backtracking?",
        "options": [
          "Depth First Search",
          "Ford-Fulkerson",
          "Breadth First Search",
          "Kruskal's"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, depth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] BFS, or Breadth First Search, fundamentally uses what data structure?",
        "options": [
          "Linked List",
          "Array",
          "Stack",
          "Queue"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, queue is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] The architectural principle behind a Queue in BFS is logically known as:",
        "options": [
          "FILO",
          "FIFO (First In First Out)",
          "LIFO (Last In First Out)",
          "Random Access"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, fifo (first in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] DFS, or Depth First Search, relies primarily on what data structure?",
        "options": [
          "Queue",
          "Hash Map",
          "Binary Tree",
          "Stack"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, stack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] The architectural principle supporting a Stack in DFS is:",
        "options": [
          "FIFO",
          "LILO",
          "LIFO (Last In First Out)",
          "Random Access"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, lifo (last in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] In a Stack used by DFS, 'Push' means to:",
        "options": [
          "add element to top",
          "remove top element",
          "read bottom element",
          "clear the stack"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, add element to top is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] In a Stack used by DFS, 'Pop' systematically means to:",
        "options": [
          "empty the stack",
          "delete the root",
          "add element to top",
          "remove top element"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, remove top element is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] During a DFS traversal, when you hit a dead end, you physically must:",
        "options": [
          "Push",
          "Restart",
          "Backtrack",
          "Change to BFS"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, backtrack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] Which algorithm visits nodes level by level sequentially?",
        "options": [
          "Prim's",
          "Depth First Search",
          "Dijkstra's",
          "Breadth First Search"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, breadth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 3] Which algorithm explores an entire branch as deeply as possible before backtracking?",
        "options": [
          "Ford-Fulkerson",
          "Breadth First Search",
          "Depth First Search",
          "Kruskal's"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, depth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] BFS, or Breadth First Search, fundamentally uses what data structure?",
        "options": [
          "Linked List",
          "Queue",
          "Stack",
          "Array"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, queue is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] The architectural principle behind a Queue in BFS is logically known as:",
        "options": [
          "FILO",
          "Random Access",
          "LIFO (Last In First Out)",
          "FIFO (First In First Out)"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, fifo (first in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] DFS, or Depth First Search, relies primarily on what data structure?",
        "options": [
          "Binary Tree",
          "Hash Map",
          "Stack",
          "Queue"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, stack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] The architectural principle supporting a Stack in DFS is:",
        "options": [
          "Random Access",
          "LIFO (Last In First Out)",
          "FIFO",
          "LILO"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, lifo (last in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] In a Stack used by DFS, 'Push' means to:",
        "options": [
          "remove top element",
          "read bottom element",
          "add element to top",
          "clear the stack"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, add element to top is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] In a Stack used by DFS, 'Pop' systematically means to:",
        "options": [
          "empty the stack",
          "remove top element",
          "add element to top",
          "delete the root"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, remove top element is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] During a DFS traversal, when you hit a dead end, you physically must:",
        "options": [
          "Change to BFS",
          "Restart",
          "Backtrack",
          "Push"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, backtrack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] Which algorithm visits nodes level by level sequentially?",
        "options": [
          "Breadth First Search",
          "Depth First Search",
          "Dijkstra's",
          "Prim's"
        ],
        "correct": 0,
        "explanation": "As per the syllabus notes, breadth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 4] Which algorithm explores an entire branch as deeply as possible before backtracking?",
        "options": [
          "Ford-Fulkerson",
          "Depth First Search",
          "Kruskal's",
          "Breadth First Search"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, depth first search is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 5] BFS, or Breadth First Search, fundamentally uses what data structure?",
        "options": [
          "Linked List",
          "Stack",
          "Queue",
          "Array"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, queue is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 5] The architectural principle behind a Queue in BFS is logically known as:",
        "options": [
          "FILO",
          "LIFO (Last In First Out)",
          "Random Access",
          "FIFO (First In First Out)"
        ],
        "correct": 3,
        "explanation": "As per the syllabus notes, fifo (first in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 5] DFS, or Depth First Search, relies primarily on what data structure?",
        "options": [
          "Binary Tree",
          "Stack",
          "Queue",
          "Hash Map"
        ],
        "correct": 1,
        "explanation": "As per the syllabus notes, stack is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 5] The architectural principle supporting a Stack in DFS is:",
        "options": [
          "LILO",
          "Random Access",
          "LIFO (Last In First Out)",
          "FIFO"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, lifo (last in first out) is the correct established answer for this graph theory concept."
      },
      {
        "question": "[Variant 5] In a Stack used by DFS, 'Push' means to:",
        "options": [
          "remove top element",
          "read bottom element",
          "add element to top",
          "clear the stack"
        ],
        "correct": 2,
        "explanation": "As per the syllabus notes, add element to top is the correct established answer for this graph theory concept."
      }
    ]
  }
];

// Exam Mode Data Structure (Compiled from JSON files)
export const examMCQs = [
  {
    "unit": "Unit I",
    "title": "Unit 1 - Graph Theory Basics (Exam Level)",
    "questions": [
      {
        "question": "If a graph has 10 vertices and 15 edges, what is the sum of degrees?",
        "options": [
          "15",
          "30",
          "20",
          "10"
        ],
        "correct": 1,
        "explanation": "The correct answer is 30."
      },
      {
        "question": "In a simple graph with 8 vertices, maximum possible edges are:",
        "options": [
          "28",
          "56",
          "16",
          "8"
        ],
        "correct": 0,
        "explanation": "The correct answer is 28."
      },
      {
        "question": "A vertex with degree zero is called:",
        "options": [
          "Pendant",
          "Isolated",
          "Root",
          "Leaf"
        ],
        "correct": 1,
        "explanation": "The correct answer is Isolated."
      },
      {
        "question": "If a graph has exactly two vertices of odd degree, then it has:",
        "options": [
          "Euler Circuit",
          "Euler Path",
          "Hamiltonian Path",
          "Tree"
        ],
        "correct": 1,
        "explanation": "The correct answer is Euler Path."
      },
      {
        "question": "In a complete graph K₅, number of edges is:",
        "options": [
          "10",
          "20",
          "5",
          "15"
        ],
        "correct": 0,
        "explanation": "The correct answer is 10."
      },
      {
        "question": "Which complete graph is non-planar?",
        "options": [
          "K3",
          "K4",
          "K5",
          "K2"
        ],
        "correct": 2,
        "explanation": "The correct answer is K5."
      },
      {
        "question": "A bipartite graph cannot contain:",
        "options": [
          "Even cycle",
          "Odd cycle",
          "Path",
          "Tree"
        ],
        "correct": 1,
        "explanation": "The correct answer is Odd cycle."
      },
      {
        "question": "In a graph with V vertices, minimum edges required for connectivity is:",
        "options": [
          "V",
          "V-1",
          "V+1",
          "2V"
        ],
        "correct": 1,
        "explanation": "The correct answer is V-1."
      },
      {
        "question": "In planar graph, if V=6 and E=9, number of faces F is:",
        "options": [
          "5",
          "4",
          "3",
          "2"
        ],
        "correct": 0,
        "explanation": "The correct answer is 5."
      },
      {
        "question": "If sum of degrees is odd, then:",
        "options": [
          "Graph possible",
          "Graph impossible",
          "Tree",
          "Null graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Graph impossible."
      },
      {
        "question": "A tree is minimally:",
        "options": [
          "Connected",
          "Cyclic",
          "Weighted",
          "Planar only"
        ],
        "correct": 0,
        "explanation": "The correct answer is Connected."
      },
      {
        "question": "Removing any edge from a tree results in:",
        "options": [
          "Cycle",
          "Disconnected graph",
          "Complete graph",
          "Null graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Disconnected graph."
      },
      {
        "question": "Adding one edge to a tree creates:",
        "options": [
          "Cycle",
          "Null graph",
          "Forest",
          "Disconnected graph"
        ],
        "correct": 0,
        "explanation": "The correct answer is Cycle."
      },
      {
        "question": "Number of vertices of odd degree in any graph is:",
        "options": [
          "Odd",
          "Even",
          "Zero",
          "Prime"
        ],
        "correct": 1,
        "explanation": "The correct answer is Even."
      },
      {
        "question": "Two graphs are isomorphic if they have:",
        "options": [
          "Same vertices only",
          "Same edges only",
          "Same structure",
          "Same weights"
        ],
        "correct": 2,
        "explanation": "The correct answer is Same structure."
      },
      {
        "question": "A simple graph cannot have:",
        "options": [
          "Vertices",
          "Edges",
          "Self loop",
          "Degree"
        ],
        "correct": 2,
        "explanation": "The correct answer is Self loop."
      },
      {
        "question": "Distance between adjacent vertices is:",
        "options": [
          "0",
          "1",
          "2",
          "Depends"
        ],
        "correct": 1,
        "explanation": "The correct answer is 1."
      },
      {
        "question": "If all vertices have degree 2, graph must be:",
        "options": [
          "Tree",
          "Cycle",
          "Complete",
          "Null"
        ],
        "correct": 1,
        "explanation": "The correct answer is Cycle."
      },
      {
        "question": "Maximum edges in bipartite graph with sets m and n:",
        "options": [
          "m+n",
          "mn",
          "m-n",
          "m²+n²"
        ],
        "correct": 1,
        "explanation": "The correct answer is mn."
      },
      {
        "question": "A connected graph with V vertices and V edges must contain:",
        "options": [
          "Tree",
          "Exactly one cycle",
          "No cycle",
          "Null graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Exactly one cycle."
      },
      {
        "question": "Eccentricity of a vertex is:",
        "options": [
          "Minimum distance",
          "Maximum distance from vertex",
          "Degree",
          "Face count"
        ],
        "correct": 1,
        "explanation": "The correct answer is Maximum distance from vertex."
      },
      {
        "question": "Diameter of tree equals:",
        "options": [
          "Shortest path",
          "Longest path",
          "Sum of degrees",
          "n-1"
        ],
        "correct": 1,
        "explanation": "The correct answer is Longest path."
      },
      {
        "question": "If a graph has no cycles, it is:",
        "options": [
          "Tree or Forest",
          "Complete graph",
          "Cycle graph",
          "Directed only"
        ],
        "correct": 0,
        "explanation": "The correct answer is Tree or Forest."
      },
      {
        "question": "Parallel edges are allowed in:",
        "options": [
          "Simple graph",
          "Multigraph",
          "Tree",
          "Null graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Multigraph."
      },
      {
        "question": "K3,3 is:",
        "options": [
          "Planar",
          "Non-planar",
          "Tree",
          "Cycle"
        ],
        "correct": 1,
        "explanation": "The correct answer is Non-planar."
      },
      {
        "question": "A connected acyclic graph is:",
        "options": [
          "Tree",
          "Cycle",
          "Complete",
          "Bipartite only"
        ],
        "correct": 0,
        "explanation": "The correct answer is Tree."
      },
      {
        "question": "Number of edges in tree with 20 vertices:",
        "options": [
          "20",
          "19",
          "21",
          "18"
        ],
        "correct": 1,
        "explanation": "The correct answer is 19."
      },
      {
        "question": "Subgraph must contain:",
        "options": [
          "All edges",
          "Subset of vertices and edges",
          "All vertices",
          "All cycles"
        ],
        "correct": 1,
        "explanation": "The correct answer is Subset of vertices and edges."
      },
      {
        "question": "In null graph, number of edges is:",
        "options": [
          "0",
          "1",
          "V-1",
          "Depends"
        ],
        "correct": 0,
        "explanation": "The correct answer is 0."
      },
      {
        "question": "Degree sum formula is also known as:",
        "options": [
          "Euler formula",
          "Handshaking lemma",
          "Min cut theorem",
          "Prim's rule"
        ],
        "correct": 1,
        "explanation": "The correct answer is Handshaking lemma."
      }
    ]
  },
  {
    "unit": "Unit II",
    "title": "Unit 2 - Trees & Spanning Trees (Exam Level)",
    "questions": [
      {
        "question": "A tree with 15 vertices has how many edges?",
        "options": [
          "15",
          "14",
          "13",
          "16"
        ],
        "correct": 1,
        "explanation": "The correct answer is 14."
      },
      {
        "question": "If a connected graph has n vertices and n-1 edges, then it is:",
        "options": [
          "Cycle",
          "Tree",
          "Complete graph",
          "Bipartite only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Tree."
      },
      {
        "question": "A tree always has at least how many pendant vertices?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correct": 1,
        "explanation": "The correct answer is 2."
      },
      {
        "question": "In a tree, between any two vertices there exists:",
        "options": [
          "At least two paths",
          "Exactly one path",
          "No path",
          "Cycle"
        ],
        "correct": 1,
        "explanation": "The correct answer is Exactly one path."
      },
      {
        "question": "Adding one edge to a tree creates:",
        "options": [
          "Forest",
          "Exactly one cycle",
          "Two cycles",
          "Disconnected graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Exactly one cycle."
      },
      {
        "question": "Removing any edge from a tree results in:",
        "options": [
          "Cycle",
          "Disconnected graph",
          "Complete graph",
          "Null graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Disconnected graph."
      },
      {
        "question": "A graph with n vertices and no cycles but not connected is called:",
        "options": [
          "Tree",
          "Forest",
          "Complete graph",
          "Circuit"
        ],
        "correct": 1,
        "explanation": "The correct answer is Forest."
      },
      {
        "question": "The diameter of a tree is:",
        "options": [
          "Shortest path",
          "Longest simple path",
          "Degree sum",
          "n-1 always"
        ],
        "correct": 1,
        "explanation": "The correct answer is Longest simple path."
      },
      {
        "question": "If a tree has 8 vertices of degree 1 and all others degree 3, number of vertices is:",
        "options": [
          "10",
          "12",
          "14",
          "16"
        ],
        "correct": 2,
        "explanation": "The correct answer is 14."
      },
      {
        "question": "Sum of degrees in a tree with n vertices is:",
        "options": [
          "n",
          "n-1",
          "2(n-1)",
          "2n"
        ],
        "correct": 2,
        "explanation": "The correct answer is 2(n-1)."
      },
      {
        "question": "In a binary tree (as per notes), exactly how many vertices have degree 2?",
        "options": [
          "0",
          "1",
          "2",
          "Depends"
        ],
        "correct": 1,
        "explanation": "The correct answer is 1."
      },
      {
        "question": "Number of vertices in such binary tree is always:",
        "options": [
          "Even",
          "Odd",
          "Prime",
          "Multiple of 4"
        ],
        "correct": 1,
        "explanation": "The correct answer is Odd."
      },
      {
        "question": "A spanning tree of graph with 20 vertices contains how many edges?",
        "options": [
          "20",
          "19",
          "18",
          "21"
        ],
        "correct": 1,
        "explanation": "The correct answer is 19."
      },
      {
        "question": "Number of spanning trees in a complete graph K3 is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 2,
        "explanation": "The correct answer is 3."
      },
      {
        "question": "A spanning tree must include:",
        "options": [
          "All edges",
          "All vertices",
          "Only cycles",
          "Only leaves"
        ],
        "correct": 1,
        "explanation": "The correct answer is All vertices."
      },
      {
        "question": "A tree is minimally connected means:",
        "options": [
          "Removing any vertex disconnects",
          "Removing any edge disconnects",
          "Adding edge disconnects",
          "Always cyclic"
        ],
        "correct": 1,
        "explanation": "The correct answer is Removing any edge disconnects."
      },
      {
        "question": "If a graph is minimally connected, then it is:",
        "options": [
          "Complete graph",
          "Tree",
          "Cycle",
          "Forest"
        ],
        "correct": 1,
        "explanation": "The correct answer is Tree."
      },
      {
        "question": "Height of a tree is defined as:",
        "options": [
          "Number of vertices",
          "Maximum level",
          "Total edges",
          "Degree sum"
        ],
        "correct": 1,
        "explanation": "The correct answer is Maximum level."
      },
      {
        "question": "Path length in tree equals:",
        "options": [
          "Number of vertices",
          "Sum of levels of pendant vertices",
          "Degree sum",
          "Diameter"
        ],
        "correct": 1,
        "explanation": "The correct answer is Sum of levels of pendant vertices."
      },
      {
        "question": "Maximum number of edges in a forest with n vertices and k components:",
        "options": [
          "n-k",
          "n+k",
          "n-1",
          "k-1"
        ],
        "correct": 0,
        "explanation": "The correct answer is n-k."
      },
      {
        "question": "If graph has exactly one path between every pair of vertices, it is:",
        "options": [
          "Cycle",
          "Tree",
          "Complete graph",
          "Bipartite only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Tree."
      },
      {
        "question": "A leaf node in a tree has degree:",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correct": 1,
        "explanation": "The correct answer is 1."
      },
      {
        "question": "Number of vertices of degree 1 in a tree with 1 vertex of degree 3 and rest degree 1:",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct": 1,
        "explanation": "The correct answer is 3."
      },
      {
        "question": "Removing a vertex from tree can produce:",
        "options": [
          "Cycle",
          "Disconnected graph",
          "Complete graph",
          "Null graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Disconnected graph."
      },
      {
        "question": "A spanning tree of weighted graph ignores:",
        "options": [
          "Weights",
          "Vertices",
          "Connectivity",
          "Edges"
        ],
        "correct": 0,
        "explanation": "The correct answer is Weights."
      },
      {
        "question": "Number of edges added to connect k components:",
        "options": [
          "k-1",
          "k",
          "n-1",
          "n+k"
        ],
        "correct": 0,
        "explanation": "The correct answer is k-1."
      },
      {
        "question": "In any tree, number of vertices of odd degree is:",
        "options": [
          "Odd",
          "Even",
          "Zero",
          "One"
        ],
        "correct": 1,
        "explanation": "The correct answer is Even."
      },
      {
        "question": "A tree with 1 vertex has edges:",
        "options": [
          "1",
          "0",
          "2",
          "Undefined"
        ],
        "correct": 1,
        "explanation": "The correct answer is 0."
      },
      {
        "question": "Total possible spanning trees increases with:",
        "options": [
          "Vertices",
          "Edges",
          "Connectivity",
          "All of these"
        ],
        "correct": 3,
        "explanation": "The correct answer is All of these."
      },
      {
        "question": "A spanning tree is:",
        "options": [
          "Independent graph",
          "Subset of connected graph",
          "Cycle graph",
          "Disconnected graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Subset of connected graph."
      }
    ]
  },
  {
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
  },
  {
    "unit": "Unit IV",
    "title": "Unit 4 - Cutset & Circuit Matrix (Exam Level)",
    "questions": [
      {
        "question": "A cutset in a connected graph is a set of edges whose removal:",
        "options": [
          "Creates a cycle",
          "Disconnects the graph",
          "Reduces degree",
          "Creates spanning tree"
        ],
        "correct": 1,
        "explanation": "The correct answer is Disconnects the graph."
      },
      {
        "question": "Every cutset in a connected graph must contain at least:",
        "options": [
          "One vertex",
          "One branch of every spanning tree",
          "One cycle",
          "Two edges"
        ],
        "correct": 1,
        "explanation": "The correct answer is One branch of every spanning tree."
      },
      {
        "question": "The smallest cutset of a graph determines:",
        "options": [
          "Degree",
          "Connectivity",
          "Diameter",
          "Planarity"
        ],
        "correct": 1,
        "explanation": "The correct answer is Connectivity."
      },
      {
        "question": "Edge connectivity of a tree is:",
        "options": [
          "0",
          "1",
          "2",
          "n-1"
        ],
        "correct": 1,
        "explanation": "The correct answer is 1."
      },
      {
        "question": "Vertex connectivity of a tree is:",
        "options": [
          "0",
          "1",
          "2",
          "n-1"
        ],
        "correct": 1,
        "explanation": "The correct answer is 1."
      },
      {
        "question": "Ring sum (⊕) of two cutsets results in:",
        "options": [
          "Always a cycle",
          "Another cutset or edge-disjoint union of cutsets",
          "Null graph",
          "Complete graph"
        ],
        "correct": 1,
        "explanation": "The correct answer is Another cutset or edge-disjoint union of cutsets."
      },
      {
        "question": "Circuit matrix represents:",
        "options": [
          "Vertices",
          "Edges participation in circuits",
          "Degree",
          "Connectivity only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Edges participation in circuits."
      },
      {
        "question": "In circuit matrix, entries are usually:",
        "options": [
          "Real numbers",
          "Binary (0,1)",
          "Negative numbers",
          "Prime numbers"
        ],
        "correct": 1,
        "explanation": "The correct answer is Binary (0,1)."
      },
      {
        "question": "Number of fundamental circuits in a graph equals:",
        "options": [
          "V-1",
          "E-V+1",
          "V+E",
          "E+1"
        ],
        "correct": 1,
        "explanation": "The correct answer is E-V+1."
      },
      {
        "question": "Fundamental circuit is formed by:",
        "options": [
          "Removing edge from tree",
          "Adding a non-tree edge to spanning tree",
          "Deleting vertex",
          "Adding vertex"
        ],
        "correct": 1,
        "explanation": "The correct answer is Adding a non-tree edge to spanning tree."
      },
      {
        "question": "If graph has V=8 and E=12, number of fundamental circuits:",
        "options": [
          "4",
          "5",
          "3",
          "6"
        ],
        "correct": 1,
        "explanation": "The correct answer is 5."
      },
      {
        "question": "Cutset matrix represents:",
        "options": [
          "Vertex degrees",
          "Edges in cutsets",
          "Faces",
          "Weights"
        ],
        "correct": 1,
        "explanation": "The correct answer is Edges in cutsets."
      },
      {
        "question": "If removing a set of edges does not disconnect graph, that set is:",
        "options": [
          "Cutset",
          "Not a cutset",
          "Cycle",
          "Spanning tree"
        ],
        "correct": 1,
        "explanation": "The correct answer is Not a cutset."
      },
      {
        "question": "In tree, total fundamental circuits are:",
        "options": [
          "0",
          "1",
          "n-1",
          "n"
        ],
        "correct": 0,
        "explanation": "The correct answer is 0."
      },
      {
        "question": "A bridge in graph is:",
        "options": [
          "Edge in cycle",
          "Edge whose removal disconnects graph",
          "Vertex",
          "Face"
        ],
        "correct": 1,
        "explanation": "The correct answer is Edge whose removal disconnects graph."
      },
      {
        "question": "If a graph has no cut edges, it is:",
        "options": [
          "Tree",
          "2-edge connected",
          "Disconnected",
          "Forest"
        ],
        "correct": 1,
        "explanation": "The correct answer is 2-edge connected."
      },
      {
        "question": "Circuit matrix rank equals:",
        "options": [
          "V-1",
          "E-V+1",
          "V+E",
          "E"
        ],
        "correct": 1,
        "explanation": "The correct answer is E-V+1."
      },
      {
        "question": "Cutset rank equals:",
        "options": [
          "V-1",
          "E-V+1",
          "V+E",
          "E"
        ],
        "correct": 0,
        "explanation": "The correct answer is V-1."
      },
      {
        "question": "Total number of branches in spanning tree equals:",
        "options": [
          "E",
          "V-1",
          "V",
          "E-V"
        ],
        "correct": 1,
        "explanation": "The correct answer is V-1."
      },
      {
        "question": "Circuit matrix and cutset matrix are:",
        "options": [
          "Independent",
          "Orthogonal over GF(2)",
          "Equal",
          "Unrelated"
        ],
        "correct": 1,
        "explanation": "The correct answer is Orthogonal over GF(2)."
      }
    ]
  },
  {
    "unit": "Unit V",
    "title": "Unit 5 - Network Flow & Max Flow Min Cut (Exam Level)",
    "questions": [
      {
        "question": "In a flow network, source is a vertex with:",
        "options": [
          "No outgoing edges",
          "No incoming edges",
          "Equal in and out flow",
          "Maximum degree"
        ],
        "correct": 1,
        "explanation": "The correct answer is No incoming edges."
      },
      {
        "question": "Sink is a vertex with:",
        "options": [
          "No outgoing edges",
          "No incoming edges",
          "Cycle",
          "Maximum capacity"
        ],
        "correct": 0,
        "explanation": "The correct answer is No outgoing edges."
      },
      {
        "question": "Flow on an edge must satisfy:",
        "options": [
          "f > capacity",
          "0 ≤ f ≤ capacity",
          "f < 0",
          "f unlimited"
        ],
        "correct": 1,
        "explanation": "The correct answer is 0 ≤ f ≤ capacity."
      },
      {
        "question": "Flow conservation applies to:",
        "options": [
          "Source only",
          "Sink only",
          "Intermediate vertices",
          "All vertices"
        ],
        "correct": 2,
        "explanation": "The correct answer is Intermediate vertices."
      },
      {
        "question": "Residual capacity of edge is:",
        "options": [
          "Capacity + Flow",
          "Capacity - Flow",
          "Flow - Capacity",
          "Capacity only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Capacity - Flow."
      },
      {
        "question": "An augmenting path is:",
        "options": [
          "Shortest path",
          "Path with positive residual capacity",
          "Cycle",
          "Tree path"
        ],
        "correct": 1,
        "explanation": "The correct answer is Path with positive residual capacity."
      },
      {
        "question": "Bottleneck capacity of a path is:",
        "options": [
          "Maximum capacity edge",
          "Minimum residual capacity in path",
          "Sum of capacities",
          "Average capacity"
        ],
        "correct": 1,
        "explanation": "The correct answer is Minimum residual capacity in path."
      },
      {
        "question": "Ford-Fulkerson algorithm terminates when:",
        "options": [
          "All vertices visited",
          "No augmenting path exists",
          "All edges used",
          "Graph disconnected"
        ],
        "correct": 1,
        "explanation": "The correct answer is No augmenting path exists."
      },
      {
        "question": "Maximum flow equals:",
        "options": [
          "Maximum capacity",
          "Minimum cut capacity",
          "Total edges",
          "Total vertices"
        ],
        "correct": 1,
        "explanation": "The correct answer is Minimum cut capacity."
      },
      {
        "question": "If capacities are integers, Ford-Fulkerson produces:",
        "options": [
          "Fractional flow",
          "Integer flow",
          "Infinite loop",
          "Cycle"
        ],
        "correct": 1,
        "explanation": "The correct answer is Integer flow."
      },
      {
        "question": "Edmonds-Karp algorithm uses:",
        "options": [
          "DFS",
          "BFS",
          "Stack",
          "Heap"
        ],
        "correct": 1,
        "explanation": "The correct answer is BFS."
      },
      {
        "question": "Time complexity of Edmonds-Karp is:",
        "options": [
          "O(VE)",
          "O(VE²)",
          "O(E)",
          "O(V²)"
        ],
        "correct": 1,
        "explanation": "The correct answer is O(VE²)."
      },
      {
        "question": "In max-flow problem, cut divides graph into:",
        "options": [
          "Two disjoint sets S and T",
          "Three sets",
          "Cycle",
          "Tree"
        ],
        "correct": 0,
        "explanation": "The correct answer is Two disjoint sets S and T."
      },
      {
        "question": "Capacity of cut equals:",
        "options": [
          "Sum of capacities crossing from S to T",
          "Total edges",
          "Degree sum",
          "Residual flow"
        ],
        "correct": 0,
        "explanation": "The correct answer is Sum of capacities crossing from S to T."
      },
      {
        "question": "If max flow is 20, min cut capacity is:",
        "options": [
          "Less than 20",
          "Greater than 20",
          "20",
          "Undefined"
        ],
        "correct": 2,
        "explanation": "The correct answer is 20."
      },
      {
        "question": "Flow value is equal to:",
        "options": [
          "Total outgoing flow from source",
          "Total edges",
          "Total vertices",
          "Total residual"
        ],
        "correct": 0,
        "explanation": "The correct answer is Total outgoing flow from source."
      },
      {
        "question": "If no path from source to sink exists, max flow is:",
        "options": [
          "1",
          "0",
          "Infinity",
          "n-1"
        ],
        "correct": 1,
        "explanation": "The correct answer is 0."
      },
      {
        "question": "Backward edges in residual graph represent:",
        "options": [
          "Unused capacity",
          "Ability to reduce flow",
          "New edges",
          "Cut edges"
        ],
        "correct": 1,
        "explanation": "The correct answer is Ability to reduce flow."
      },
      {
        "question": "If residual capacity is zero, edge is:",
        "options": [
          "Fully saturated",
          "Unused",
          "Removed",
          "Disconnected"
        ],
        "correct": 0,
        "explanation": "The correct answer is Fully saturated."
      },
      {
        "question": "Maximum possible flow is limited by:",
        "options": [
          "Minimum capacity edge",
          "Minimum cut",
          "Total vertices",
          "Degree"
        ],
        "correct": 1,
        "explanation": "The correct answer is Minimum cut."
      },
      {
        "question": "In a network with single path S-A-T with capacities 5 and 3, max flow is:",
        "options": [
          "5",
          "3",
          "8",
          "2"
        ],
        "correct": 1,
        "explanation": "The correct answer is 3."
      },
      {
        "question": "If two parallel paths have capacities 4 and 6, max flow is:",
        "options": [
          "6",
          "4",
          "10",
          "2"
        ],
        "correct": 2,
        "explanation": "The correct answer is 10."
      },
      {
        "question": "Residual graph is constructed using:",
        "options": [
          "Original graph only",
          "Capacity and current flow",
          "Tree",
          "Cycle"
        ],
        "correct": 1,
        "explanation": "The correct answer is Capacity and current flow."
      },
      {
        "question": "If capacity of every cut is at least 15, max flow is:",
        "options": [
          "<15",
          "15",
          ">15",
          "Undefined"
        ],
        "correct": -1,
        "explanation": "The correct answer is ≥15."
      },
      {
        "question": "Ford-Fulkerson may fail to terminate if capacities are:",
        "options": [
          "Integers",
          "Rational numbers",
          "Irrational numbers",
          "Positive"
        ],
        "correct": 2,
        "explanation": "The correct answer is Irrational numbers."
      },
      {
        "question": "In residual graph, reverse edge capacity equals:",
        "options": [
          "Original capacity",
          "Current flow",
          "Zero always",
          "Infinity"
        ],
        "correct": 1,
        "explanation": "The correct answer is Current flow."
      },
      {
        "question": "If an augmenting path has bottleneck 7, flow increases by:",
        "options": [
          "1",
          "7",
          "Minimum edge weight",
          "Sum"
        ],
        "correct": 1,
        "explanation": "The correct answer is 7."
      },
      {
        "question": "A minimum cut partitions vertices such that:",
        "options": [
          "Source and sink separated",
          "Cycle created",
          "Tree formed",
          "Disconnected"
        ],
        "correct": 0,
        "explanation": "The correct answer is Source and sink separated."
      },
      {
        "question": "If max flow equals 0, then:",
        "options": [
          "No path from S to T",
          "Graph complete",
          "Cycle exists",
          "Tree"
        ],
        "correct": 0,
        "explanation": "The correct answer is No path from S to T."
      },
      {
        "question": "Max-flow min-cut theorem states:",
        "options": [
          "Max flow ≥ Min cut",
          "Max flow ≤ Min cut",
          "Max flow = Min cut",
          "Unrelated"
        ],
        "correct": 2,
        "explanation": "The correct answer is Max flow = Min cut."
      }
    ]
  },
  {
    "unit": "Unit VI",
    "title": "Unit 6 - BFS & DFS (Exam Level)",
    "questions": [
      {
        "question": "BFS traversal uses which data structure?",
        "options": [
          "Stack",
          "Queue",
          "Priority Queue",
          "Heap"
        ],
        "correct": 1,
        "explanation": "The correct answer is Queue."
      },
      {
        "question": "DFS traversal uses which data structure?",
        "options": [
          "Queue",
          "Stack",
          "Heap",
          "Linked list"
        ],
        "correct": 1,
        "explanation": "The correct answer is Stack."
      },
      {
        "question": "BFS follows which principle?",
        "options": [
          "LIFO",
          "FIFO",
          "Greedy",
          "Divide & Conquer"
        ],
        "correct": 1,
        "explanation": "The correct answer is FIFO."
      },
      {
        "question": "DFS follows which principle?",
        "options": [
          "FIFO",
          "LIFO",
          "Dynamic Programming",
          "Greedy"
        ],
        "correct": 1,
        "explanation": "The correct answer is LIFO."
      },
      {
        "question": "Time complexity of BFS is:",
        "options": [
          "O(V)",
          "O(E)",
          "O(V+E)",
          "O(VE)"
        ],
        "correct": 2,
        "explanation": "The correct answer is O(V+E)."
      },
      {
        "question": "Time complexity of DFS is:",
        "options": [
          "O(V)",
          "O(E)",
          "O(V+E)",
          "O(V²)"
        ],
        "correct": 2,
        "explanation": "The correct answer is O(V+E)."
      },
      {
        "question": "BFS is used to find:",
        "options": [
          "Longest path",
          "Shortest path in unweighted graph",
          "MST",
          "Cutset"
        ],
        "correct": 1,
        "explanation": "The correct answer is Shortest path in unweighted graph."
      },
      {
        "question": "DFS is useful for:",
        "options": [
          "Level order traversal",
          "Cycle detection",
          "Finding min cut",
          "Sorting edges only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Cycle detection."
      },
      {
        "question": "In BFS, nodes are explored:",
        "options": [
          "Depth-wise",
          "Level-wise",
          "Randomly",
          "Backward"
        ],
        "correct": 1,
        "explanation": "The correct answer is Level-wise."
      },
      {
        "question": "In DFS, backtracking occurs when:",
        "options": [
          "Queue empty",
          "Stack empty",
          "No unvisited adjacent vertex",
          "Cycle detected"
        ],
        "correct": 2,
        "explanation": "The correct answer is No unvisited adjacent vertex."
      },
      {
        "question": "Which traversal can be implemented recursively easily?",
        "options": [
          "BFS",
          "DFS",
          "Both equally",
          "Neither"
        ],
        "correct": 1,
        "explanation": "The correct answer is DFS."
      },
      {
        "question": "BFS requires extra memory proportional to:",
        "options": [
          "Height of tree",
          "Maximum width of graph",
          "Edges only",
          "Vertices only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Maximum width of graph."
      },
      {
        "question": "DFS requires extra memory proportional to:",
        "options": [
          "Width",
          "Depth of graph",
          "Edges",
          "Faces"
        ],
        "correct": 1,
        "explanation": "The correct answer is Depth of graph."
      },
      {
        "question": "BFS on tree produces:",
        "options": [
          "DFS tree",
          "Level order tree",
          "Cycle",
          "Cutset"
        ],
        "correct": 1,
        "explanation": "The correct answer is Level order tree."
      },
      {
        "question": "DFS traversal order depends on:",
        "options": [
          "Vertex degrees only",
          "Order of adjacency list",
          "Weights",
          "Faces"
        ],
        "correct": 1,
        "explanation": "The correct answer is Order of adjacency list."
      },
      {
        "question": "In disconnected graph, BFS must be applied:",
        "options": [
          "Once only",
          "From each unvisited vertex",
          "From source only",
          "Not possible"
        ],
        "correct": 1,
        "explanation": "The correct answer is From each unvisited vertex."
      },
      {
        "question": "DFS can detect:",
        "options": [
          "Only shortest path",
          "Cycles",
          "Only MST",
          "Only cutsets"
        ],
        "correct": 1,
        "explanation": "The correct answer is Cycles."
      },
      {
        "question": "BFS always finds shortest path in:",
        "options": [
          "Weighted graph",
          "Unweighted graph",
          "Directed graph only",
          "Tree only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Unweighted graph."
      },
      {
        "question": "Which traversal is preferred for topological sorting?",
        "options": [
          "BFS",
          "DFS",
          "Prim",
          "Kruskal"
        ],
        "correct": 1,
        "explanation": "The correct answer is DFS."
      },
      {
        "question": "Stack overflow risk is higher in:",
        "options": [
          "BFS",
          "DFS recursive",
          "Queue",
          "Heap"
        ],
        "correct": 1,
        "explanation": "The correct answer is DFS recursive."
      },
      {
        "question": "BFS tree height represents:",
        "options": [
          "Maximum depth from source",
          "Diameter",
          "MST weight",
          "Cut capacity"
        ],
        "correct": 0,
        "explanation": "The correct answer is Maximum depth from source."
      },
      {
        "question": "DFS can be used to find:",
        "options": [
          "Connected components",
          "Minimum cut",
          "Max flow",
          "Planarity only"
        ],
        "correct": 0,
        "explanation": "The correct answer is Connected components."
      },
      {
        "question": "In BFS, first visited node after source is:",
        "options": [
          "Deepest node",
          "Any adjacent node",
          "Leaf only",
          "Root only"
        ],
        "correct": 1,
        "explanation": "The correct answer is Any adjacent node."
      },
      {
        "question": "Which traversal is better for shortest path in maze?",
        "options": [
          "DFS",
          "BFS",
          "Prim",
          "Kruskal"
        ],
        "correct": 1,
        "explanation": "The correct answer is BFS."
      },
      {
        "question": "DFS produces a spanning tree known as:",
        "options": [
          "Level tree",
          "DFS tree",
          "MST",
          "Cut tree"
        ],
        "correct": 1,
        "explanation": "The correct answer is DFS tree."
      }
    ]
  }
];
