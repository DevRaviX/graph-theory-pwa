export const unitii_practiceMCQs = {
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
      "explanation": "\n  <p>A graph \\(G\\) is called a <strong> Planar Graph</strong> if it can be drawn in a plane such that no two of its edges intersect or cross each other anywhere except at their endpoints (vertices).</p>\n          <div class=\"mermaid\">\n            graph LR\n              A((A)) --- B((B))\n              A --- C((C))\n              A --- D((D))\n              B --- C\n              B --- D\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: \\( K_4 \\) drawn as a planar graph without any intersecting edges.</p>\n"
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
      "explanation": "\n  <p><strong>Euler's Formula</strong> for connected planar graphs states that the number of vertices (\\(v\\)), minus the number of edges (\\(e\\)), plus the number of faces (\\(f\\)) is always equal to 2.</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( v - e + f = 2 \\)</p>\n          <p>For example, a cube graph has 8 vertices, 12 edges, and 6 faces: \\( 8 - 12 + 6 = 2 \\).</p>\n"
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
      "explanation": "\n  <p>In a planar graph drawing, the regions bounded by the edges are called <strong> Faces</strong> (or regions).</p>\n    <ul class=\"styled-list\">\n      <li><strong>Interior Faces:</strong> Bounded by cycles of edges.</li>\n      <li><strong>Exterior Face:</strong> The single unbounded region encompassing the entire graph graph. It is always counted as \\( 1 \\) face in Euler's formula.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>A <strong> Chordal Graph</strong> is a graph in which every cycle of length 4 or greater has at least one <em>chord</em>. A chord is an edge connecting two non-adjacent nodes in a cycle.</p>\n    <p>Because of this property, chordal graphs cannot contain any induced cycles larger than a triangle (\\( C_3 \\)). They are also known as triangulated graphs.</p>\n"
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
      "explanation": "\n  <p>A <strong> Tree</strong> is an undirected graph that strictly satisfies two conditions:</p>\n          <ol class=\"styled-list\">\n            <li>It is <strong>connected</strong> (a path exists between any two nodes).</li>\n            <li>It is <strong>acyclic</strong> (contains no cycles or loops).</li>\n          </ol>\n          <p>A disconnected acyclic graph is called a <em>Forest</em> (a collection of disjoint trees).</p>\n"
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
      "explanation": "\n  <p>One of the fundamental theorems of trees states that any tree \\( T \\) with \\( n \\) vertices will always contain exactly \\( n - 1 \\) edges.</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( |E| = |V| - 1 \\)</p>\n          <p>Adding just one edge to a tree will inevitably create exactly one cycle, while removing any edge will disconnect the tree into a forest.</p>\n"
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
      "explanation": "\n  <p>This is a defining property of a <strong> Tree</strong>. In a tree, every pair of vertices is connected by a <em>unique</em> simple path.</p>\n    <p>If there were more than one path between any two nodes, those two paths would form a cycle, meaning it couldn't be a tree. If there were zero paths, it wouldn't be connected.</p>\n"
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
      "explanation": "\n  <p>In a strict (or proper) binary tree, where every internal node has exactly two children, the <strong>root node</strong> is the only node that has a degree of exactly 2 (its two children).</p>\n    <ul class=\"styled-list\">\n      <li><strong>Internal Nodes:</strong> Degree 3 (1 parent + 2 children)</li>\n      <li><strong>Leaf Nodes:</strong> Degree 1 (1 parent)</li>\n    </ul>\n"
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
      "explanation": "\n  <p>For any strictly binary tree (full binary tree), the total number of vertices \\( V \\) is always <strong>odd</strong>.</p>\n    <p>This is because if there are \\( L \\) leaf nodes, the number of internal nodes is \\( L - 1 \\). Therefore, the total number of nodes is \\( V = L + (L - 1) = 2L - 1 \\), which is mathematically always an odd integer.</p>\n"
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
      "explanation": "\n  <p>A <strong> Spanning Tree</strong> \\( T \\) of an undirected graph \\( G \\) is a subgraph that is a tree which includes all of the vertices of \\( G \\), with a minimum possible number of edges.</p>\n    <ul class=\"styled-list\">\n      <li>It must be connected.</li>\n      <li>It must contain no cycles.</li>\n      <li>It must span (cover) every node.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>The process of obtaining a new spanning tree from a given spanning tree by adding an edge (which creates a cycle) and then removing a different edge from that cycle is called a <strong> Cycle Interchange</strong>.</p>\n    <p>This is the fundamental operation that algorithms like Kruskal's or Prim's implicitly traverse when looking for the Minimum Spanning Tree (MST).</p>\n"
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
      "explanation": "\n  <p>In an edge-weighted graph, a <strong> Minimum Spanning Tree (MST)</strong> is a spanning tree whose sum of edge weights is as small as possible.</p>\n    <p>If \\( w(e) \\) is the weight of an edge \\( e \\), the MST minimizes the total weight \\( W(T) = \\sum_{e \\in T} w(e) \\).</p>\n"
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
      "explanation": "\n  <p>Prim's algorithm \"grows\" the minimum spanning tree from a starting vertex. At each step, it looks at all the vertices it has already reached, looks at all the edges connecting them to vertices it <strong>has not yet reached</strong>, and incorporates the cheapest such edge.</p>\n    <p>Choosing an edge that joins two already-included vertices would create a cycle, violating the tree property.</p>\n"
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
      "explanation": "\n  <p>Kruskal's algorithm builds the MST by sorting all edges from lowest weight to highest weight. It iterates through them, adding them to the growing forest.</p>\n    <p>The critical condition is that an edge is only added if it connects two previously disconnected components. If it connects two nodes that are already in the same component, it would form a <strong>circuit (or cycle)</strong>, so that edge must be skipped.</p>\n"
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
      "explanation": "\n  <p>As established earlier, every tree with \\( n \\) vertices must have exactly \\( n - 1 \\) edges. Since Kruskal's algorithm's goal is to build a spanning tree for the entire graph \\( G \\), it inherently looks for exactly \\( n - 1 \\) edges.</p>\n    <p>Once it successfully includes \\( n - 1 \\) edges without forming any cycles, the algorithm terminates, knowing the MST is complete.</p>\n"
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
      "explanation": "\n  <p>A graph \\(G\\) is called a <strong> Planar Graph</strong> if it can be drawn in a plane such that no two of its edges intersect or cross each other anywhere except at their endpoints (vertices).</p>\n          <div class=\"mermaid\">\n            graph LR\n              A((A)) --- B((B))\n              A --- C((C))\n              A --- D((D))\n              B --- C\n              B --- D\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: \\( K_4 \\) drawn as a planar graph without any intersecting edges.</p>\n"
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
      "explanation": "\n  <p><strong>Euler's Formula</strong> for connected planar graphs states that the number of vertices (\\(v\\)), minus the number of edges (\\(e\\)), plus the number of faces (\\(f\\)) is always equal to 2.</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( v - e + f = 2 \\)</p>\n          <p>For example, a cube graph has 8 vertices, 12 edges, and 6 faces: \\( 8 - 12 + 6 = 2 \\).</p>\n"
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
      "explanation": "\n  <p>In a planar graph drawing, the regions bounded by the edges are called <strong> Faces</strong> (or regions).</p>\n    <ul class=\"styled-list\">\n      <li><strong>Interior Faces:</strong> Bounded by cycles of edges.</li>\n      <li><strong>Exterior Face:</strong> The single unbounded region encompassing the entire graph graph. It is always counted as \\( 1 \\) face in Euler's formula.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>A <strong> Chordal Graph</strong> is a graph in which every cycle of length 4 or greater has at least one <em>chord</em>. A chord is an edge connecting two non-adjacent nodes in a cycle.</p>\n    <p>Because of this property, chordal graphs cannot contain any induced cycles larger than a triangle (\\( C_3 \\)). They are also known as triangulated graphs.</p>\n"
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
      "explanation": "\n  <p>A <strong> Tree</strong> is an undirected graph that strictly satisfies two conditions:</p>\n          <ol class=\"styled-list\">\n            <li>It is <strong>connected</strong> (a path exists between any two nodes).</li>\n            <li>It is <strong>acyclic</strong> (contains no cycles or loops).</li>\n          </ol>\n          <p>A disconnected acyclic graph is called a <em>Forest</em> (a collection of disjoint trees).</p>\n"
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
      "explanation": "\n  <p>One of the fundamental theorems of trees states that any tree \\( T \\) with \\( n \\) vertices will always contain exactly \\( n - 1 \\) edges.</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( |E| = |V| - 1 \\)</p>\n          <p>Adding just one edge to a tree will inevitably create exactly one cycle, while removing any edge will disconnect the tree into a forest.</p>\n"
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
      "explanation": "\n  <p>This is a defining property of a <strong> Tree</strong>. In a tree, every pair of vertices is connected by a <em>unique</em> simple path.</p>\n    <p>If there were more than one path between any two nodes, those two paths would form a cycle, meaning it couldn't be a tree. If there were zero paths, it wouldn't be connected.</p>\n"
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
      "explanation": "\n  <p>In a strict (or proper) binary tree, where every internal node has exactly two children, the <strong>root node</strong> is the only node that has a degree of exactly 2 (its two children).</p>\n    <ul class=\"styled-list\">\n      <li><strong>Internal Nodes:</strong> Degree 3 (1 parent + 2 children)</li>\n      <li><strong>Leaf Nodes:</strong> Degree 1 (1 parent)</li>\n    </ul>\n"
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
      "explanation": "\n  <p>For any strictly binary tree (full binary tree), the total number of vertices \\( V \\) is always <strong>odd</strong>.</p>\n    <p>This is because if there are \\( L \\) leaf nodes, the number of internal nodes is \\( L - 1 \\). Therefore, the total number of nodes is \\( V = L + (L - 1) = 2L - 1 \\), which is mathematically always an odd integer.</p>\n"
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
      "explanation": "\n  <p>A <strong> Spanning Tree</strong> \\( T \\) of an undirected graph \\( G \\) is a subgraph that is a tree which includes all of the vertices of \\( G \\), with a minimum possible number of edges.</p>\n    <ul class=\"styled-list\">\n      <li>It must be connected.</li>\n      <li>It must contain no cycles.</li>\n      <li>It must span (cover) every node.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>The process of obtaining a new spanning tree from a given spanning tree by adding an edge (which creates a cycle) and then removing a different edge from that cycle is called a <strong> Cycle Interchange</strong>.</p>\n    <p>This is the fundamental operation that algorithms like Kruskal's or Prim's implicitly traverse when looking for the Minimum Spanning Tree (MST).</p>\n"
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
      "explanation": "\n  <p>In an edge-weighted graph, a <strong> Minimum Spanning Tree (MST)</strong> is a spanning tree whose sum of edge weights is as small as possible.</p>\n    <p>If \\( w(e) \\) is the weight of an edge \\( e \\), the MST minimizes the total weight \\( W(T) = \\sum_{e \\in T} w(e) \\).</p>\n"
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
      "explanation": "\n  <p>Prim's algorithm \"grows\" the minimum spanning tree from a starting vertex. At each step, it looks at all the vertices it has already reached, looks at all the edges connecting them to vertices it <strong>has not yet reached</strong>, and incorporates the cheapest such edge.</p>\n    <p>Choosing an edge that joins two already-included vertices would create a cycle, violating the tree property.</p>\n"
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
      "explanation": "\n  <p>Kruskal's algorithm builds the MST by sorting all edges from lowest weight to highest weight. It iterates through them, adding them to the growing forest.</p>\n    <p>The critical condition is that an edge is only added if it connects two previously disconnected components. If it connects two nodes that are already in the same component, it would form a <strong>circuit (or cycle)</strong>, so that edge must be skipped.</p>\n"
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
      "explanation": "\n  <p>As established earlier, every tree with \\( n \\) vertices must have exactly \\( n - 1 \\) edges. Since Kruskal's algorithm's goal is to build a spanning tree for the entire graph \\( G \\), it inherently looks for exactly \\( n - 1 \\) edges.</p>\n    <p>Once it successfully includes \\( n - 1 \\) edges without forming any cycles, the algorithm terminates, knowing the MST is complete.</p>\n"
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
      "explanation": "\n  <p>A graph \\(G\\) is called a <strong> Planar Graph</strong> if it can be drawn in a plane such that no two of its edges intersect or cross each other anywhere except at their endpoints (vertices).</p>\n          <div class=\"mermaid\">\n            graph LR\n              A((A)) --- B((B))\n              A --- C((C))\n              A --- D((D))\n              B --- C\n              B --- D\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: \\( K_4 \\) drawn as a planar graph without any intersecting edges.</p>\n"
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
      "explanation": "\n  <p><strong>Euler's Formula</strong> for connected planar graphs states that the number of vertices (\\(v\\)), minus the number of edges (\\(e\\)), plus the number of faces (\\(f\\)) is always equal to 2.</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( v - e + f = 2 \\)</p>\n          <p>For example, a cube graph has 8 vertices, 12 edges, and 6 faces: \\( 8 - 12 + 6 = 2 \\).</p>\n"
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
      "explanation": "\n  <p>In a planar graph drawing, the regions bounded by the edges are called <strong> Faces</strong> (or regions).</p>\n    <ul class=\"styled-list\">\n      <li><strong>Interior Faces:</strong> Bounded by cycles of edges.</li>\n      <li><strong>Exterior Face:</strong> The single unbounded region encompassing the entire graph graph. It is always counted as \\( 1 \\) face in Euler's formula.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>A <strong> Chordal Graph</strong> is a graph in which every cycle of length 4 or greater has at least one <em>chord</em>. A chord is an edge connecting two non-adjacent nodes in a cycle.</p>\n    <p>Because of this property, chordal graphs cannot contain any induced cycles larger than a triangle (\\( C_3 \\)). They are also known as triangulated graphs.</p>\n"
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
      "explanation": "\n  <p>A <strong> Tree</strong> is an undirected graph that strictly satisfies two conditions:</p>\n          <ol class=\"styled-list\">\n            <li>It is <strong>connected</strong> (a path exists between any two nodes).</li>\n            <li>It is <strong>acyclic</strong> (contains no cycles or loops).</li>\n          </ol>\n          <p>A disconnected acyclic graph is called a <em>Forest</em> (a collection of disjoint trees).</p>\n"
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
      "explanation": "\n  <p>One of the fundamental theorems of trees states that any tree \\( T \\) with \\( n \\) vertices will always contain exactly \\( n - 1 \\) edges.</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( |E| = |V| - 1 \\)</p>\n          <p>Adding just one edge to a tree will inevitably create exactly one cycle, while removing any edge will disconnect the tree into a forest.</p>\n"
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
      "explanation": "\n  <p>This is a defining property of a <strong> Tree</strong>. In a tree, every pair of vertices is connected by a <em>unique</em> simple path.</p>\n    <p>If there were more than one path between any two nodes, those two paths would form a cycle, meaning it couldn't be a tree. If there were zero paths, it wouldn't be connected.</p>\n"
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
      "explanation": "\n  <p>In a strict (or proper) binary tree, where every internal node has exactly two children, the <strong>root node</strong> is the only node that has a degree of exactly 2 (its two children).</p>\n    <ul class=\"styled-list\">\n      <li><strong>Internal Nodes:</strong> Degree 3 (1 parent + 2 children)</li>\n      <li><strong>Leaf Nodes:</strong> Degree 1 (1 parent)</li>\n    </ul>\n"
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
      "explanation": "\n  <p>For any strictly binary tree (full binary tree), the total number of vertices \\( V \\) is always <strong>odd</strong>.</p>\n    <p>This is because if there are \\( L \\) leaf nodes, the number of internal nodes is \\( L - 1 \\). Therefore, the total number of nodes is \\( V = L + (L - 1) = 2L - 1 \\), which is mathematically always an odd integer.</p>\n"
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
      "explanation": "\n  <p>A <strong> Spanning Tree</strong> \\( T \\) of an undirected graph \\( G \\) is a subgraph that is a tree which includes all of the vertices of \\( G \\), with a minimum possible number of edges.</p>\n    <ul class=\"styled-list\">\n      <li>It must be connected.</li>\n      <li>It must contain no cycles.</li>\n      <li>It must span (cover) every node.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>The process of obtaining a new spanning tree from a given spanning tree by adding an edge (which creates a cycle) and then removing a different edge from that cycle is called a <strong> Cycle Interchange</strong>.</p>\n    <p>This is the fundamental operation that algorithms like Kruskal's or Prim's implicitly traverse when looking for the Minimum Spanning Tree (MST).</p>\n"
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
      "explanation": "\n  <p>In an edge-weighted graph, a <strong> Minimum Spanning Tree (MST)</strong> is a spanning tree whose sum of edge weights is as small as possible.</p>\n    <p>If \\( w(e) \\) is the weight of an edge \\( e \\), the MST minimizes the total weight \\( W(T) = \\sum_{e \\in T} w(e) \\).</p>\n"
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
      "explanation": "\n  <p>Prim's algorithm \"grows\" the minimum spanning tree from a starting vertex. At each step, it looks at all the vertices it has already reached, looks at all the edges connecting them to vertices it <strong>has not yet reached</strong>, and incorporates the cheapest such edge.</p>\n    <p>Choosing an edge that joins two already-included vertices would create a cycle, violating the tree property.</p>\n"
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
      "explanation": "\n  <p>Kruskal's algorithm builds the MST by sorting all edges from lowest weight to highest weight. It iterates through them, adding them to the growing forest.</p>\n    <p>The critical condition is that an edge is only added if it connects two previously disconnected components. If it connects two nodes that are already in the same component, it would form a <strong>circuit (or cycle)</strong>, so that edge must be skipped.</p>\n"
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
      "explanation": "\n  <p>As established earlier, every tree with \\( n \\) vertices must have exactly \\( n - 1 \\) edges. Since Kruskal's algorithm's goal is to build a spanning tree for the entire graph \\( G \\), it inherently looks for exactly \\( n - 1 \\) edges.</p>\n    <p>Once it successfully includes \\( n - 1 \\) edges without forming any cycles, the algorithm terminates, knowing the MST is complete.</p>\n"
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
      "explanation": "\n  <p>A graph \\(G\\) is called a <strong> Planar Graph</strong> if it can be drawn in a plane such that no two of its edges intersect or cross each other anywhere except at their endpoints (vertices).</p>\n          <div class=\"mermaid\">\n            graph LR\n              A((A)) --- B((B))\n              A --- C((C))\n              A --- D((D))\n              B --- C\n              B --- D\n          </div>\n          <p class=\"text-xs text-slate-400 mt-2 italic text-center\">Figure: \\( K_4 \\) drawn as a planar graph without any intersecting edges.</p>\n"
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
      "explanation": "\n  <p><strong>Euler's Formula</strong> for connected planar graphs states that the number of vertices (\\(v\\)), minus the number of edges (\\(e\\)), plus the number of faces (\\(f\\)) is always equal to 2.</p>\n          <p class=\"text-center font-bold text-white text-lg mt-2 mb-2\">\\( v - e + f = 2 \\)</p>\n          <p>For example, a cube graph has 8 vertices, 12 edges, and 6 faces: \\( 8 - 12 + 6 = 2 \\).</p>\n"
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
      "explanation": "\n  <p>In a planar graph drawing, the regions bounded by the edges are called <strong> Faces</strong> (or regions).</p>\n    <ul class=\"styled-list\">\n      <li><strong>Interior Faces:</strong> Bounded by cycles of edges.</li>\n      <li><strong>Exterior Face:</strong> The single unbounded region encompassing the entire graph graph. It is always counted as \\( 1 \\) face in Euler's formula.</li>\n    </ul>\n"
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
      "explanation": "\n  <p>A <strong> Chordal Graph</strong> is a graph in which every cycle of length 4 or greater has at least one <em>chord</em>. A chord is an edge connecting two non-adjacent nodes in a cycle.</p>\n    <p>Because of this property, chordal graphs cannot contain any induced cycles larger than a triangle (\\( C_3 \\)). They are also known as triangulated graphs.</p>\n"
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
      "explanation": "\n  <p>A <strong> Tree</strong> is an undirected graph that strictly satisfies two conditions:</p>\n          <ol class=\"styled-list\">\n            <li>It is <strong>connected</strong> (a path exists between any two nodes).</li>\n            <li>It is <strong>acyclic</strong> (contains no cycles or loops).</li>\n          </ol>\n          <p>A disconnected acyclic graph is called a <em>Forest</em> (a collection of disjoint trees).</p>\n"
    }
  ]
};
