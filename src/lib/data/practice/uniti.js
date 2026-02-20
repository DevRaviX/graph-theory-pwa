export const uniti_practiceMCQs = {
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
      "explanation": "\n          <p>By formal mathematical definition, a <strong>Graph \\( G \\)</strong> is an ordered pair \\( G = (V, E) \\) comprising:</p>\n          <ul class=\"styled-list\">\n            <li>\\( V \\): a set of <strong>vertices</strong> (or nodes), e.g., \\( V = \\{v_1, v_2, v_3\\} \\)</li>\n            <li>\\( E \\): a set of <strong>edges</strong> (or links), which are pairs of vertices, e.g., \\( E = \\{\\{v_1, v_2\\}, \\{v_2, v_3\\}\\} \\).</li>\n          </ul>\n          <p>A \"simple\" graph strictly prohibits multiple edges between the same two nodes and self-loops (an edge connecting a vertex to itself).</p>\n          <div class=\"mermaid\">\n            graph LR\n              v1((v1)) --- v2((v2))\n              v2 --- v3((v3))\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: A simple graph \\( G \\) with \\( |V| = 3 \\) and \\( |E| = 2 \\).</p>\n        "
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
      "explanation": "\n          <p>A <strong>Self Loop</strong> (or simply loop) is an edge that connects a vertex to itself. Mathematically, it's an edge \\( e \\) whose endpoints are a multiset \\( \\{v, v\\} \\).</p>\n          <p>Important properties of self-loops:</p>\n          <ul class=\"styled-list\">\n            <li>They add <strong>2</strong> to the degree of the vertex \\( v \\) in an undirected graph.</li>\n            <li>Simple graphs, by definition, <em>cannot</em> contain self-loops.</li>\n          </ul>\n          <div class=\"mermaid\">\n            graph TD\n              A((v1)) -->|loop| A\n          </div>\n        "
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
      "explanation": "\n          <p><strong>Parallel Edges</strong> (or multiple edges) are two or more edges that are incident to the exact same two vertices. A graph containing parallel edges is called a <strong>Multigraph</strong>.</p>\n          <div class=\"mermaid\">\n            graph LR\n              v1((v1)) -- \"e1\" --> v2((v2))\n              v1 -- \"e2\" --> v2\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: A multigraph with parallel edges \\( e_1 \\) and \\( e_2 \\) between \\( v_1 \\) and \\( v_2 \\).</p>\n          <p>In terms of adjacency matrices, parallel edges would result in matrix entry \\( A_{ij} > 1 \\).</p>\n        "
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
      "explanation": "\n      <p> The <strong> Königsberg Bridge Problem</strong> (solved by Euler in 1736) asked if it was possible to walk through the city and cross each of its 7 bridges exactly once.This is equivalent to drawing a continuous curve without lifting the pen(tracing the graph) and without retracing any line(using any edge more than once).</p>\n  <ul class=\"styled-list\">\n    <li>An <strong>Eulerian Path</strong> visits every edge exactly once.</li>\n    <li>Euler proved that a connected graph has an Eulerian cycle if and only if <em>every vertex has an even degree</em>.</li>\n  </ul>\n        "
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
      "explanation": "\n  <p> In the Königsberg bridge graph, the four landmasses form vertices, and the bridges form edges.Let the vertices be \\(A, B, C, D \\).Their degrees are:</p>\n          <ul class=\"styled-list\">\n            <li>\\( d(A) = 3 \\)</li>\n            <li>\\( d(B) = 3 \\)</li>\n            <li>\\( d(C) = 3 \\)</li>\n            <li>\\( d(D) = 5 \\)</li>\n          </ul>\n          <p>Since <strong>all vertices have an odd degree</strong>, the graph does not possess an Eulerian path. An Eulerian path can exist only if there are exactly 0 or 2 vertices of odd degree.</p>\n        "
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
      "explanation": "\n  <p> A <strong> Directed Graph</strong> (or digraph) is a set of vertices and a set of directed edges.Because the edges have a specific orientation(a starting node and an ending node), it is synonymous with the term <strong> Oriented Graph</strong>.</p>\n    <p>Mathematically, edges in a digraph are ordered pairs \\( (u, v) \\), distinguishing them from the unordered sets \\( \\{u, v\\} \\) in an undirected graph.</p>\n"
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
      "explanation": "\n  <p> Two graphs \\(G_1 \\) and \\(G_2 \\) are <strong> isomorphic</strong> if there exists a bijection(one - to - one mapping) between their vertex sets that preserves adjacency.</p>\n          <p>For two graphs to be isomorphic, they <em>must</em> have the same parameters:</p>\n          <ul class=\"styled-list\">\n            <li>Same number of vertices \\( |V_1| = |V_2| \\)</li>\n            <li>Same number of edges \\( |E_1| = |E_2| \\)</li>\n            <li>Same degree sequence (number of vertices with a given degree)</li>\n          </ul>\n          <p>Note: Visual shape makes no difference in graph theory.</p>\n"
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
      "explanation": "\n  <p> The <strong> degree sequence</strong> is a crucial invariant for graph isomorphism.It is a list of the degrees of all vertices in a graph, typically written in non - increasing order.E.g., \\((3, 2, 2, 1) \\).</p>\n    <p>If Graph \\( A \\) has two vertices of degree 3, and Graph \\( B \\) has only one vertex of degree 3, they <em>cannot</em> be isomorphic, regardless of having the same total number of vertices and edges.</p>\n"
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
      "explanation": "\n  <p> A <strong> Simple Directed Graph</strong> is a digraph where:</p>\n          <ul class=\"styled-list\">\n            <li>Between any two nodes \\( u \\) and \\( v \\), there is at most one directed edge \\( (u, v) \\).</li>\n            <li>There are no loops \\( (v, v) \\).</li>\n          </ul>\n          <p>Note: Edges \\( (u, v) \\) and \\( (v, u) \\) are distinct and can exist together in a simple directed graph, as they imply different direction flows, not parallel edges in the same direction.</p>\n"
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
      "explanation": "\n  <p> An <strong> Asymmetric Digraph</strong> is a directed graph where if there is an edge \\((u, v) \\), there cannot be an edge \\((v, u) \\). In mathematical terms, the adjacency relation is asymmetric.</p>\n    <p>It acts like a tournament graph. However, by definition, <em>self-loops</em> \\( (v, v) \\) are technically allowed depending on the strictness of the asymmetric definition used, as a single node directing to itself doesn't violate the \"at most one direction\" between distinct nodes rule.</p>\n"
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
      "explanation": "\n          <p>A <strong>Symmetric Digraph</strong> ensures bi-directional travel. Mathematically, for every directed edge \\( (a, b) \\) in the edge set \\( E \\), the reverse edge \\( (b, a) \\) must also exist in \\( E \\).</p>\n          <div class=\"mermaid\">\n            graph LR\n              A((a)) --> B((b))\n              A <--> B\n          </div>\n        "
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
      "explanation": "\n  <p> A graph \\(H = (V_H, E_H) \\) is a <strong> subgraph</strong> of \\(G = (V_G, E_G) \\) if \\(V_H \\subseteq V_G \\) and \\(E_H \\subseteq E_G \\).</p>\n    <p>Since any set is a subset of itself (\\( V_G \\subseteq V_G \\) and \\( E_G \\subseteq E_G \\)), it logically holds that every graph \\( G \\) is a subgraph of itself.</p>\n"
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
      "explanation": "\n  <p> A <strong> Null Graph</strong> (or empty graph) is a graph \\(G = (V, E) \\) where the edge set is entirely empty, i.e., \\(E = \\emptyset \\).</p>\n    <p>All vertices in a null graph have a degree of 0, meaning they are all <strong>isolated vertices</strong>.</p>\n"
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
      "explanation": "\n  <p> In graph theory, a vertex with a degree exactly equal to 1 is called a <strong> Pendant Vertex</strong>.</p>\n    <ul class=\"styled-list\">\n      <li><strong>Degree 0:</strong> Isolated Vertex.</li>\n      <li><strong>Degree 1:</strong> Pendant Vertex (often called a leaf in the restricted context of trees).</li>\n    </ul>\n"
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
      "explanation": "\n  <p> By definition, a <strong> Finite Graph</strong> \\(G = (V, E) \\) is a graph where both the vertex set \\(V \\) and the edge set \\(E \\) have a finite number of elements: \\( | V | < \\infty \\) and \\( | E | < \\infty \\).</p>\n    <p>Conversely, an infinite graph has an infinite number of vertices or edges, or both.</p>\n"
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
      "explanation": "\n  <p> A <strong> Hamiltonian Cycle</strong> (or Hamiltonian Circuit) is a cycle in an undirected or directed graph that visits every <em> vertex</em> exactly once and returns to the starting vertex.</p>\n    <ul class=\"styled-list\">\n      <li><strong>Hamiltonian Path:</strong> Visits every vertex exactly once but does not need to return to the start.</li>\n      <li><strong>Euler Circuit:</strong> Visits every <em>edge</em> exactly once.</li>\n    </ul>\n"
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
      "explanation": "\n  <p> The <strong> Handshaking Lemma</strong> states that for any undirected graph \\(G = (V, E) \\), the sum of the degrees of all its vertices is exactly twice the number of edges:</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( \\sum_{v \\in V} \\text{deg}(v) = 2|E| \\)</p>\n          <p>Every edge connected to two vertices contributes 1 to the degree of each, adding exactly 2 to the total sum.</p>\n"
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
      "explanation": "\n  <p> Distance measures in a connected graph:</p>\n    <ul class=\"styled-list\">\n      <li><strong>Distance \\( d(u, v) \\):</strong> Length of the shortest path between nodes.</li>\n      <li><strong>Eccentricity \\( \\epsilon(u) \\):</strong> The greatest distance from \\( u \\) to any other node (\\( \\max_v d(u,v) \\)).</li>\n      <li><strong>Diameter:</strong> The maximum eccentricity of any vertex in the graph. I.e., the \"longest shortest path\" between any two nodes.</li>\n    </ul>\n"
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
      "explanation": "\n  <p> The <strong> Median of a Graph</strong> is the set of all vertices \\(v \\) that minimize the total sum of distances to all other vertices in the graph:</p>\n          <p class=\"text-center font-bold text-white mt-2 mb-2\">\\( \\sum_{u \\in V} d(v, u) \\)</p>\n          <p>This is often used in facility location problems to find the optimal spot that minimizes overall travel time/distance for all users.</p>\n"
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
      "explanation": "\n  <p> A <strong> Bipartite Graph</strong> is a graph whose vertices can be divided into two disjoint and independent sets \\(U \\) and \\(V \\) such that every edge connects a vertex in \\(U \\) to one in \\(V \\).</p>\n    <p>Crucial Property: A graph is bipartite if and only if it contains <strong>no cycles of odd length</strong>.</p>\n"
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
      "explanation": "\n  <p> In a <strong> Complete Graph(\\(K_n \\))</strong>, every single vertex is connected to every other vertex.For \\(n \\) vertices, each vertex connects to the remaining \\(n - 1 \\) vertices.</p>\n          <p>The total number of edges is given by the combination formula \\( \\binom{n}{2} \\):</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( |E| = \\frac{n(n-1)}{2} \\)</p>\n"
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
      "explanation": "\n  <p> Because every vertex in a Complete Graph \\(K_n \\) connects to <em> every other</em> node exactly once, and a node cannot connect to itself(since it's a simple graph), it must have exactly \\( n-1 \\) edges connected to it.</p>\n    <p> Thus, for all \\(v \\in V \\), \\(\\text{ deg } (v) = n - 1 \\). Such a graph is also called a <strong> (n - 1) - regular graph</strong>.</p>\n      "
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
      "explanation": "\n      <p> A graph is <strong> Planar</strong> if it can be drawn on a 2D plane without any edges crossing.For complete graphs \\(K_n \\):</p>\n        <ul class=\"styled-list\">\n          <li>\\( K_1, K_2, K_3 \\) (triangle), and \\( K_4 \\) (tetrahedron projection) are all planar.</li>\n          <li>\\( K_5 \\) is the smallest complete graph that is <strong>non-planar</strong>. According to Kuratowski's Theorem, any graph containing a subdivision of \\( K_5 \\) or \\( K_{3, 3} \\) is non-planar.</li>\n        </ul>\n"
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
      "explanation": "\n  <p> The <strong> Eccentricity $\\epsilon(v)$</strong> of a vertex \\(v \\) is the maximum distance from \\(v \\) to all other vertices in the graph.</p>\n          <p class=\"text-center font-bold text-white mt-2 mb-2\">\\( \\epsilon(v) = \\max_{u \\in V} d(v, u) \\)</p>\n          <p>It essentially answers: \"If I start at \\( v \\), how far away is the furthest possible node?\"</p>\n"
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
      "explanation": "\n          <p>By formal mathematical definition, a <strong>Graph \\( G \\)</strong> is an ordered pair \\( G = (V, E) \\) comprising:</p>\n          <ul class=\"styled-list\">\n            <li>\\( V \\): a set of <strong>vertices</strong> (or nodes), e.g., \\( V = \\{v_1, v_2, v_3\\} \\)</li>\n            <li>\\( E \\): a set of <strong>edges</strong> (or links), which are pairs of vertices, e.g., \\( E = \\{\\{v_1, v_2\\}, \\{v_2, v_3\\}\\} \\).</li>\n          </ul>\n          <p>A \"simple\" graph strictly prohibits multiple edges between the same two nodes and self-loops (an edge connecting a vertex to itself).</p>\n          <div class=\"mermaid\">\n            graph LR\n              v1((v1)) --- v2((v2))\n              v2 --- v3((v3))\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: A simple graph \\( G \\) with \\( |V| = 3 \\) and \\( |E| = 2 \\).</p>\n        "
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
      "explanation": "\n          <p>A <strong>Self Loop</strong> (or simply loop) is an edge that connects a vertex to itself. Mathematically, it's an edge \\( e \\) whose endpoints are a multiset \\( \\{v, v\\} \\).</p>\n          <p>Important properties of self-loops:</p>\n          <ul class=\"styled-list\">\n            <li>They add <strong>2</strong> to the degree of the vertex \\( v \\) in an undirected graph.</li>\n            <li>Simple graphs, by definition, <em>cannot</em> contain self-loops.</li>\n          </ul>\n          <div class=\"mermaid\">\n            graph TD\n              A((v1)) -->|loop| A\n          </div>\n        "
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
      "explanation": "\n          <p><strong>Parallel Edges</strong> (or multiple edges) are two or more edges that are incident to the exact same two vertices. A graph containing parallel edges is called a <strong>Multigraph</strong>.</p>\n          <div class=\"mermaid\">\n            graph LR\n              v1((v1)) -- \"e1\" --> v2((v2))\n              v1 -- \"e2\" --> v2\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: A multigraph with parallel edges \\( e_1 \\) and \\( e_2 \\) between \\( v_1 \\) and \\( v_2 \\).</p>\n          <p>In terms of adjacency matrices, parallel edges would result in matrix entry \\( A_{ij} > 1 \\).</p>\n        "
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
      "explanation": "\n      <p> The <strong> Königsberg Bridge Problem</strong> (solved by Euler in 1736) asked if it was possible to walk through the city and cross each of its 7 bridges exactly once.This is equivalent to drawing a continuous curve without lifting the pen (tracing the graph) and without retracing any line (using any edge more than once).</p>\n  <ul class=\"styled-list\">\n    <li>An <strong>Eulerian Path</strong> visits every edge exactly once.</li>\n    <li>Euler proved that a connected graph has an Eulerian cycle if and only if <em>every vertex has an even degree</em>.</li>\n  </ul>\n        "
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
      "explanation": "\n  <p> In the Königsberg bridge graph, the four landmasses form vertices, and the bridges form edges.Let the vertices be \\(A, B, C, D \\).Their degrees are:</p>\n          <ul class=\"styled-list\">\n            <li>\\( d(A) = 3 \\)</li>\n            <li>\\( d(B) = 3 \\)</li>\n            <li>\\( d(C) = 3 \\)</li>\n            <li>\\( d(D) = 5 \\)</li>\n          </ul>\n          <p>Since <strong>all vertices have an odd degree</strong>, the graph does not possess an Eulerian path. An Eulerian path can exist only if there are exactly 0 or 2 vertices of odd degree.</p>\n        "
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
      "explanation": "\n  <p> A <strong> Directed Graph</strong> (or digraph) is a set of vertices and a set of directed edges. Because the edges have a specific orientation (a starting node and an ending node), it is synonymous with the term <strong> Oriented Graph</strong>.</p>\n    <p>Mathematically, edges in a digraph are ordered pairs \\( (u, v) \\), distinguishing them from the unordered sets \\( \\{u, v\\} \\) in an undirected graph.</p>\n"
    },
    {
      "question": "[Variant 1] Which is a requirement for two graphs to be isomorphic?",
      "options": [
        "Must be planar graphs",
        "Different number of vertices",
        "Same visual shape",
        "Same number of vertices and edges"
      ],
      "correct": 3,
      "explanation": "\n  <p>Two graphs \\(G_1 \\) and \\(G_2 \\) are <strong> isomorphic</strong> if there exists a bijection (one-to-one mapping) between their vertex sets that preserves adjacency.</p>\n          <p>For two graphs to be isomorphic, they <em>must</em> have the same parameters:</p>\n          <ul class=\"styled-list\">\n            <li>Same number of vertices \\( |V_1| = |V_2| \\)</li>\n            <li>Same number of edges \\( |E_1| = |E_2| \\)</li>\n            <li>Same degree sequence (number of vertices with a given degree)</li>\n          </ul>\n          <p>Note: Visual shape makes no difference in graph theory.</p>\n"
    },
    {
      "question": "[Variant 1] In an Isomorphic graph, you must have an equal number of vertices with:",
      "options": [
        "a given degree",
        "a given weight",
        "a given planar face",
        "a given color"
      ],
      "correct": 0,
      "explanation": "\n  <p>The <strong> degree sequence</strong> is a crucial invariant for graph isomorphism. It is a list of the degrees of all vertices in a graph, typically written in non-increasing order. E.g., \\((3, 2, 2, 1) \\).</p>\n    <p>If Graph \\( A \\) has two vertices of degree 3, and Graph \\( B \\) has only one vertex of degree 3, they <em>cannot</em> be isomorphic, regardless of having the same total number of vertices and edges.</p>\n"
    },
    {
      "question": "[Variant 1] A directed graph that has no self loop or parallel edges is called:",
      "options": [
        "Pseudograph",
        "Simple Directed Graph",
        "Complex Directed Graph",
        "Multigraph"
      ],
      "correct": 1,
      "explanation": "\n  <p>A <strong> Simple Directed Graph</strong> is a digraph where:</p>\n          <ul class=\"styled-list\">\n            <li>Between any two nodes \\( u \\) and \\( v \\), there is at most one directed edge \\( (u, v) \\).</li>\n            <li>There are no loops \\( (v, v) \\).</li>\n          </ul>\n          <p>Note: Edges \\( (u, v) \\) and \\( (v, u) \\) are distinct and can exist together in a simple directed graph, as they imply different direction flows, not parallel edges in the same direction.</p>\n"
    },
    {
      "question": "[Variant 1] An Asymmetric Digraph is allowed to have:",
      "options": [
        "undirected edges",
        "multiple sources",
        "a self-loop",
        "parallel edges"
      ],
      "correct": 2,
      "explanation": "\n  <p>An <strong> Asymmetric Digraph</strong> is a directed graph where if there is an edge \\((u, v) \\), there cannot be an edge \\((v, u) \\). In mathematical terms, the adjacency relation is asymmetric.</p>\n    <p>It acts like a tournament graph. However, by strict definitions, <em>self-loops</em> \\( (v, v) \\) are generally allowed, as a single node directing to itself doesn't explicitly violate the \"at most one direction\" between <em>distinct</em> nodes rule.</p>\n"
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
      "explanation": "\n  <p>A graph \\(H = (V_H, E_H) \\) is a <strong> subgraph</strong> of \\(G = (V_G, E_G) \\) if \\(V_H \\subseteq V_G \\) and \\(E_H \\subseteq E_G \\).</p>\n    <p>Since any set is trivially a subset of itself (\\( V_G \\subseteq V_G \\) and \\( E_G \\subseteq E_G \\)), it logically holds that every graph \\( G \\) is a subgraph of itself.</p>\n"
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
      "explanation": "\n  <p>A <strong> Null Graph</strong> (or empty graph) is a graph \\(G = (V, E) \\) where the edge set is entirely empty: \\(E = \\emptyset \\).</p>\n    <p>All vertices in a null graph have a degree of 0, meaning they are all <strong>isolated vertices</strong>.</p>\n"
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
      "explanation": "\n  <p>In graph theory, a vertex with a degree exactly equal to 1 is called a <strong> Pendant Vertex</strong>.</p>\n    <ul class=\"styled-list\">\n      <li><strong>Degree 0:</strong> Isolated Vertex.</li>\n      <li><strong>Degree 1:</strong> Pendant Vertex (often referred to as a leaf specifically when discussing trees).</li>\n    </ul>\n"
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
      "explanation": "\n  <p>By formal definition, a <strong> Finite Graph</strong> \\(G = (V, E) \\) is a graph where both the vertex set \\(V \\) and the edge set \\(E \\) contain a finite number of elements: \\( | V | < \\infty \\) and \\( | E | < \\infty \\).</p>\n"
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
      "explanation": "\n  <p>A <strong> Hamiltonian Cycle</strong> (or Hamiltonian Circuit) is a cycle in an undirected or directed graph that visits every <em> vertex</em> exactly once and returns to the starting vertex.</p>\n    <ul class=\"styled-list\">\n      <li><strong>Hamiltonian Path:</strong> Visits every vertex exactly once but does not need to return to the start.</li>\n      <li><strong>Euler Circuit:</strong> Visits every <em>edge</em> exactly once.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>The <strong> Handshaking Lemma</strong> states that for any undirected graph \\(G = (V, E) \\), the sum of the degrees of all its vertices is exactly twice the number of edges:</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( \\sum_{v \\in V} \\text{deg}(v) = 2|E| \\)</p>\n          <p>Every edge connected to two vertices contributes 1 to the degree of each, adding exactly 2 to the total sum.</p>\n"
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
      "explanation": "\n  <p>Distance measures in a connected graph:</p>\n    <ul class=\"styled-list\">\n      <li><strong>Distance \\( d(u, v) \\):</strong> Length of the shortest path between nodes.</li>\n      <li><strong>Eccentricity \\( \\epsilon(u) \\):</strong> The greatest distance from \\( u \\) to any other node.</li>\n      <li><strong>Diameter:</strong> The maximum eccentricity of any vertex in the graph. I.e., the \"longest shortest path\" between any two nodes.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>The <strong> Median of a Graph</strong> is the set of all vertices \\(v \\) that minimize the total sum of distances to all other vertices in the graph:</p>\n          <p class=\"text-center font-bold text-white mt-2 mb-2\">\\( \\sum_{u \\in V} d(v, u) \\)</p>\n          <p>This is often used in facility location problems to find the optimal spot that minimizes overall travel time/distance for all users.</p>\n"
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
      "explanation": "\n  <p>A <strong> Bipartite Graph</strong> is a graph whose vertices can be divided into two disjoint and independent sets \\(U \\) and \\(V \\) such that every edge connects a vertex in \\(U \\) to one in \\(V \\).</p>\n    <p>Crucial Property: A graph is bipartite if and only if it contains <strong>no cycles of odd length</strong>.</p>\n"
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
      "explanation": "\n  <p>In a <strong> Complete Graph (\\(K_n\\))</strong>, every single vertex is connected to every other vertex. For \\(n\\) vertices, each vertex connects to the remaining \\(n - 1\\) vertices.</p>\n          <p>The total number of edges is given by the combination formula \\( \\binom{n}{2} \\):</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( |E| = \\frac{n(n-1)}{2} \\)</p>\n"
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
      "explanation": "\n  <p>Because every vertex in a Complete Graph \\(K_n \\) connects to <em> every other</em> node exactly once, and a node cannot connect to itself (since it's a simple graph), it must have exactly \\( n-1 \\) edges connected to it.</p>\n    <p> Thus, for all \\(v \\in V \\), \\(\\text{ deg } (v) = n - 1 \\). Such a graph is also called a <strong> (n - 1)-regular graph</strong>.</p>\n      "
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
      "explanation": "\n      <p>A graph is <strong> Planar</strong> if it can be drawn on a 2D plane without any edges crossing. For complete graphs \\(K_n \\):</p>\n        <ul class=\"styled-list\">\n          <li>\\( K_1, K_2, K_3 \\) (triangle), and \\( K_4 \\) (tetrahedron projection) are all planar.</li>\n          <li>\\( K_5 \\) is the smallest complete graph that is <strong>non-planar</strong>. According to Kuratowski's Theorem, any graph containing a subdivision of \\( K_5 \\) or \\( K_{3, 3} \\) is non-planar.</li>\n        </ul>\n"
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
      "explanation": "\n  <p>The <strong> Eccentricity \\(\\epsilon(v)\\)</strong> of a vertex \\(v\\) is the maximum distance from \\(v\\) to all other vertices in the graph.</p>\n          <p class=\"text-center font-bold text-white mt-2 mb-2\">\\( \\epsilon(v) = \\max_{u \\in V} d(v, u) \\)</p>\n          <p>It essentially answers: \"If I start at \\( v \\), how far away is the furthest possible node?\"</p>\n"
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
};
