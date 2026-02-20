// ============================================================
//  ENHANCED syllabusNotes — Graph Theory & Network Analysis
//  Features: Mermaid diagrams, rich HTML, color-coded tables,
//  context-aware <img> placeholders, and deep explanations.
// ============================================================

export const syllabusNotes = [
  // ═══════════════════════════════════════════════════════════
  //  UNIT I — Fundamentals & Key Metrics
  // ═══════════════════════════════════════════════════════════
  {
    "unit": "Unit I",
    "title": "Fundamentals & Key Metrics",
    "topics": [
      {
        "title": "1. Fundamentals of Graph Theory",
        "content": `
          <!-- ─── INTRO BANNER ─────────────────────────────────── -->
          <div class="bg-gradient-to-r from-sky-900/60 to-indigo-900/60 border border-sky-500/40 rounded-xl p-4 mb-6">
            <p class="text-sky-300 font-semibold text-base mb-1">📌 Why Graph Theory?</p>
            <p class="text-slate-300 text-sm leading-relaxed">
              Graph Theory is the mathematical backbone of Computer Networks, Social Networks, Route Planning (GPS), Circuit Design, and Compiler Construction.
              Every time you use Google Maps, WhatsApp, or LinkedIn — graphs are silently working underneath.
            </p>
          </div>

          <!-- ─── BASIC DEFINITIONS ─────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-2 mb-3">🔷 Basic Definitions</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/60 border border-sky-700/40 rounded-lg p-3">
              <p class="text-sky-300 font-semibold mb-1">Linear Graph  <code class="text-xs text-yellow-300">G = (V, E)</code></p>
              <p class="text-slate-300 text-sm">A graph consists of a non-empty set of <strong class="text-white">vertices (V)</strong> and a set of <strong class="text-white">edges (E)</strong> connecting pairs of vertices.</p>
            </div>
            <div class="bg-slate-800/60 border border-purple-700/40 rounded-lg p-3">
              <p class="text-purple-300 font-semibold mb-1">Incidence</p>
              <p class="text-slate-300 text-sm">An edge \\(e_k = (v_i, v_j)\\) is said to be <em>incident</em> on both vertices \\(v_i\\) and \\(v_j\\). These are called the <strong class="text-white">end vertices</strong> of \\(e_k\\).</p>
            </div>
            <div class="bg-slate-800/60 border border-emerald-700/40 rounded-lg p-3">
              <p class="text-emerald-300 font-semibold mb-1">Parallel Edges (Multi-edges)</p>
              <p class="text-slate-300 text-sm">Two or more edges connecting the <strong class="text-white">same pair of vertices</strong>. A graph with parallel edges is called a <em>multigraph</em>.</p>
            </div>
            <div class="bg-slate-800/60 border border-rose-700/40 rounded-lg p-3">
              <p class="text-rose-300 font-semibold mb-1">Self-Loop</p>
              <p class="text-slate-300 text-sm">An edge where both end vertices are <strong class="text-white">the same vertex</strong>. Contributes <strong class="text-white">2</strong> to the degree of that vertex.</p>
            </div>
          </div>

          <!-- ─── MERMAID: ANATOMY OF A GRAPH ───────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 1 — Anatomy of a Graph (Parallel Edge + Self-Loop)</p>
            <div class="mermaid">
graph LR
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#2d1b4e,stroke:#a78bfa,color:#fff

    A["v₁"] -- "e₁ (normal edge)" --> B["v₂"]
    A -- "e₂ (parallel)" --> B
    B -- "e₃" --> C["v₃"]
    C -- "e₄ (self-loop)" --> C
    D["v₄ (isolated)"]
            </div>
            <p class="text-xs text-slate-500 mt-2 italic">↑ v₁-v₂ share a parallel edge pair; v₃ has a self-loop; v₄ is isolated (degree 0)</p>
          </div>

          <!-- ─── DEGREE CONCEPT ────────────────────────────────── -->
          <div class="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 mb-4">
            <p class="text-amber-300 font-semibold text-sm mb-1">⚡ Degree of a Vertex <code>deg(v)</code></p>
            <p class="text-slate-300 text-sm">The degree of a vertex is the number of edges incident to it. A self-loop counts as <strong class="text-yellow-300">2</strong>.</p>
            <ul class="mt-2 space-y-1 text-sm text-slate-300">
              <li>→ <strong class="text-white">Even-degree vertex:</strong> vertex with even number of edges</li>
              <li>→ <strong class="text-white">Odd-degree vertex:</strong> vertex with odd number of edges</li>
              <li>→ <strong class="text-white">Isolated vertex:</strong> <code>deg(v) = 0</code></li>
              <li>→ <strong class="text-white">Pendant vertex:</strong> <code>deg(v) = 1</code></li>
            </ul>
          </div>

          <!-- ─── GRAPH CLASSIFICATIONS ─────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔷 Graph Classifications</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3">
              <h4 class="text-white font-semibold text-lg">Simple Graph</h4>
              <p class="text-slate-300 text-sm leading-relaxed">Most common; basis for most theorems</p>
              <div class="mt-auto flex flex-wrap gap-2">
                <span class="text-xs font-mono bg-slate-900/50 text-slate-400 px-2 py-1 rounded">Undirected</span>
                <span class="text-xs font-mono bg-rose-900/30 text-rose-300 border border-rose-500/20 px-2 py-1 rounded">No Self-Loops</span>
                <span class="text-xs font-mono bg-rose-900/30 text-rose-300 border border-rose-500/20 px-2 py-1 rounded">No Parallel Edges</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3">
              <h4 class="text-white font-semibold text-lg">Multigraph</h4>
              <p class="text-slate-300 text-sm leading-relaxed">Multiple edges allowed between same pair</p>
              <div class="mt-auto flex flex-wrap gap-2">
                <span class="text-xs font-mono bg-slate-900/50 text-slate-400 px-2 py-1 rounded">Undirected</span>
                <span class="text-xs font-mono bg-rose-900/30 text-rose-300 border border-rose-500/20 px-2 py-1 rounded">No Self-Loops</span>
                <span class="text-xs font-mono bg-emerald-900/30 text-emerald-300 border border-emerald-500/20 px-2 py-1 rounded">Parallel Edges ✓</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3">
              <h4 class="text-white font-semibold text-lg">Pseudograph</h4>
              <p class="text-slate-300 text-sm leading-relaxed">Most general undirected graph</p>
              <div class="mt-auto flex flex-wrap gap-2">
                <span class="text-xs font-mono bg-slate-900/50 text-slate-400 px-2 py-1 rounded">Undirected</span>
                <span class="text-xs font-mono bg-emerald-900/30 text-emerald-300 border border-emerald-500/20 px-2 py-1 rounded">Self-Loops ✓</span>
                <span class="text-xs font-mono bg-emerald-900/30 text-emerald-300 border border-emerald-500/20 px-2 py-1 rounded">Parallel Edges ✓</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3">
              <h4 class="text-white font-semibold text-lg">Simple Digraph</h4>
              <p class="text-slate-300 text-sm leading-relaxed">No self-loops; clean directed graph</p>
              <div class="mt-auto flex flex-wrap gap-2">
                <span class="text-xs font-mono bg-sky-900/30 text-sky-300 border border-sky-500/20 px-2 py-1 rounded">Directed</span>
                <span class="text-xs font-mono bg-rose-900/30 text-rose-300 border border-rose-500/20 px-2 py-1 rounded">No Self-Loops</span>
                <span class="text-xs font-mono bg-rose-900/30 text-rose-300 border border-rose-500/20 px-2 py-1 rounded">No Parallel Edges</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3">
              <h4 class="text-white font-semibold text-lg">Asymmetric Digraph</h4>
              <p class="text-slate-300 text-sm leading-relaxed">At most one edge between any pair</p>
              <div class="mt-auto flex flex-wrap gap-2">
                <span class="text-xs font-mono bg-sky-900/30 text-sky-300 border border-sky-500/20 px-2 py-1 rounded">Directed</span>
                <span class="text-xs font-mono bg-emerald-900/30 text-emerald-300 border border-emerald-500/20 px-2 py-1 rounded">Self-Loops ✓</span>
                <span class="text-xs font-mono bg-amber-900/30 text-amber-300 border border-amber-500/20 px-2 py-1 rounded">Parallel: At most 1</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3">
              <h4 class="text-white font-semibold text-lg">Symmetric Digraph</h4>
              <p class="text-slate-300 text-sm leading-relaxed">If (a→b) exists, then (b→a) must also exist</p>
              <div class="mt-auto flex flex-wrap gap-2">
                <span class="text-xs font-mono bg-sky-900/30 text-sky-300 border border-sky-500/20 px-2 py-1 rounded">Directed</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3 md:col-span-2">
              <h4 class="text-white font-semibold text-lg">Null Graph</h4>
              <p class="text-slate-300 text-sm leading-relaxed">Edge set E = ∅; all vertices are isolated</p>
              <div class="mt-auto flex flex-wrap gap-2">
                <span class="text-xs font-mono bg-slate-900/50 text-slate-400 px-2 py-1 rounded">Either Dir.</span>
                <span class="text-xs font-mono bg-rose-900/30 text-rose-300 border border-rose-500/20 px-2 py-1 rounded">No Self-Loops</span>
                <span class="text-xs font-mono bg-rose-900/30 text-rose-300 border border-rose-500/20 px-2 py-1 rounded">No Parallel Edges</span>
              </div>
            </div>

          </div>

          <!-- ─── MERMAID: DIRECTED vs UNDIRECTED ───────────────── -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-3">
              <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-2">Undirected Graph</p>
              <div class="mermaid">
graph LR
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    A --- B
    B --- C
    A --- C
              </div>
            </div>
            <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-3">
              <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-2">Symmetric Digraph</p>
              <div class="mermaid">
graph LR
    style A fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style B fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style C fill:#2d1b4e,stroke:#a78bfa,color:#fff
    A --> B
    B --> A
    B --> C
    C --> B
    A --> C
    C --> A
              </div>
            </div>
          </div>

          <!-- ─── ISOMORPHISM ───────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔷 Isomorphism</h3>
          <div class="bg-slate-800/40 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-3">
            <p class="text-slate-300 text-sm leading-relaxed">
              Two graphs \\(G_1\\) and \\(G_2\\) are <strong class="text-emerald-300">isomorphic</strong> if there exists a bijection
              \\(f: V(G_1) \\rightarrow V(G_2)\\) such that any two vertices \\(u, v\\) are adjacent in \\(G_1\\)
              <strong class="text-white">if and only if</strong> \\(f(u), f(v)\\) are adjacent in \\(G_2\\).
              In simpler terms: the two graphs are <em>structurally identical</em>, just with differently labeled vertices.
            </p>
          </div>

          <div class="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3 mb-4">
            <p class="text-indigo-300 font-semibold text-sm mb-2">✅ Necessary Conditions for Isomorphism (All must hold)</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-slate-300">
              <div class="bg-slate-800/50 rounded p-2 text-center">Same number of <strong class="text-white">vertices</strong> \\(|V|\\)</div>
              <div class="bg-slate-800/50 rounded p-2 text-center">Same number of <strong class="text-white">edges</strong> \\(|E|\\)</div>
              <div class="bg-slate-800/50 rounded p-2 text-center">Same <strong class="text-white">degree sequence</strong></div>
            </div>
            <p class="text-xs text-amber-400 mt-2">⚠️ These are necessary but NOT sufficient — two non-isomorphic graphs can satisfy all three!</p>
          </div>

          <!-- ─── MERMAID: ISOMORPHIC PAIR ───────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 2 — Isomorphic Graphs (same structure, different labels)</p>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-xs text-sky-400 mb-2">Graph G₁</p>
                <div class="mermaid">
graph TD
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#1e3a5f,stroke:#38bdf8,color:#fff
    A --- B
    B --- C
    C --- D
    D --- A
                </div>
              </div>
              <div>
                <p class="text-xs text-purple-400 mb-2">Graph G₂ (Isomorphic to G₁)</p>
                <div class="mermaid">
graph TD
    style P fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style Q fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style R fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style S fill:#2d1b4e,stroke:#a78bfa,color:#fff
    P --- Q
    Q --- R
    R --- S
    S --- P
                </div>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2 italic">Mapping: A→P, B→Q, C→R, D→S preserves all adjacencies</p>
          </div>

          <!-- ─── SUBGRAPHS ──────────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔷 Subgraphs</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div class="bg-slate-800/60 border border-sky-700/40 rounded-lg p-3">
              <p class="text-sky-300 font-semibold text-sm mb-1">Subgraph \\(g \\subseteq G\\)</p>
              <p class="text-slate-400 text-xs">All vertices and edges of \\(g\\) are also in \\(G\\), with the same incidence structure.</p>
            </div>
            <div class="bg-slate-800/60 border border-emerald-700/40 rounded-lg p-3">
              <p class="text-emerald-300 font-semibold text-sm mb-1">Spanning Subgraph</p>
              <p class="text-slate-400 text-xs">Contains <strong>all vertices</strong> of \\(G\\) but only some edges. <em>(Keeps V, reduces E)</em></p>
            </div>
            <div class="bg-slate-800/60 border border-amber-700/40 rounded-lg p-3">
              <p class="text-amber-300 font-semibold text-sm mb-1">Induced Subgraph</p>
              <p class="text-slate-400 text-xs">Formed by a subset of vertices and <strong>all edges</strong> between them that exist in \\(G\\). <em>(Reduces V, keeps relevant E)</em></p>
            </div>
          </div>
        `
      },
      {
        "title": "2. Key Theorems, Metrics, and Problems",
        "content": `
          <!-- ─── HANDSHAKING LEMMA ──────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-2 mb-3">🤝 The Handshaking Lemma</h3>
          <div class="bg-gradient-to-br from-sky-900/40 to-indigo-900/40 border border-sky-500/40 rounded-xl p-4 mb-4">
            <div class="text-center text-2xl font-mono text-white mb-2">
              \\[\\sum_{v \\in V} d(v) = 2|E|\\]
            </div>
            <p class="text-slate-300 text-sm text-center">The sum of all vertex degrees equals <strong class="text-sky-300">twice the number of edges</strong></p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/50 border border-emerald-700/30 rounded-lg p-3">
              <p class="text-emerald-300 font-semibold text-sm mb-2">💡 Why?</p>
              <p class="text-slate-300 text-xs leading-relaxed">Each edge connects exactly 2 vertices. So every edge contributes exactly <strong class="text-white">1 to each endpoint's degree</strong>, meaning it is counted <strong class="text-white">twice</strong> in the total degree sum.</p>
            </div>
            <div class="bg-slate-800/50 border border-amber-700/30 rounded-lg p-3">
              <p class="text-amber-300 font-semibold text-sm mb-2">🎯 Corollary</p>
              <p class="text-slate-300 text-xs leading-relaxed">In any graph, the number of vertices with <strong class="text-white">odd degree is always even</strong>. You can never have exactly 3 odd-degree vertices!</p>
            </div>
          </div>

          <!-- ─── MERMAID: HANDSHAKING EXAMPLE ─────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-6">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 3 — Handshaking Lemma: Worked Example</p>
            <div class="mermaid">
graph TD
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style E fill:#1e3a5f,stroke:#38bdf8,color:#fff
    A["A (deg=2)"] --- B["B (deg=3)"]
    A --- C["C (deg=2)"]
    B --- C
    B --- D["D (deg=2)"]
    C --- E["E (deg=1)"]
    D --- E
            </div>
            <div class="mt-3 bg-slate-800/60 rounded-lg p-3 text-sm">
              <p class="text-slate-300">Sum of degrees = 2+3+2+2+1 = <strong class="text-sky-300">10</strong></p>
              <p class="text-slate-300">Number of edges = <strong class="text-sky-300">5</strong></p>
              <p class="text-emerald-300 font-semibold">∴ 2|E| = 2×5 = 10 ✓ (Lemma verified)</p>
            </div>
          </div>

          <!-- ─── DISTANCE METRICS ───────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">📏 Distance Metrics & Path Concepts</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            
            <!-- Card 1: Distance -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Distance</h4>
                <span class="text-sky-300 font-mono text-sm bg-slate-900/50 px-2 py-1 rounded">d(u,v)</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Number of edges in the shortest path between vertices <span class="italic">u</span> and <span class="italic">v</span>.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-emerald-400 font-semibold text-sm">
                  Shortest path length = minimum hops
                </span>
              </div>
            </div>

            <!-- Card 2: Eccentricity -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Eccentricity</h4>
                <span class="text-purple-300 font-mono text-sm bg-slate-900/50 px-2 py-1 rounded">e(v)</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                The greatest distance from vertex <span class="italic">v</span> to any other vertex in the graph.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-purple-400 font-mono text-sm">
                  \\(e(v) = \\max_{u \\in V} d(v, u)\\)
                </span>
              </div>
            </div>

            <!-- Card 3: Diameter -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Diameter</h4>
                <span class="text-amber-300 font-mono text-sm bg-slate-900/50 px-2 py-1 rounded">diam(G)</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                The greatest distance between any pair of vertices — the maximum eccentricity.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-amber-400 font-mono text-sm">
                  \\(\\text{diam}(G) = \\max_{v \\in V} e(v)\\)
                </span>
              </div>
            </div>

            <!-- Card 4: Radius -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Radius</h4>
                <span class="text-rose-300 font-mono text-sm bg-slate-900/50 px-2 py-1 rounded">rad(G)</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                The minimum eccentricity among all vertices.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-rose-400 font-mono text-sm">
                  \\(\\text{rad}(G) = \\min_{v \\in V} e(v)\\)
                </span>
              </div>
            </div>

            <!-- Card 5: Center -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Center</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                The vertex (or vertices) with eccentricity equal to the radius.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-teal-400 font-mono text-sm">
                  \\(\\{v : e(v) = \\text{rad}(G)\\}\\)
                </span>
              </div>
            </div>

            <!-- Card 6: Median -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Median</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Set of vertices that minimize the <em>sum</em> of distances to all other vertices.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-green-400 font-mono text-sm">
                  \\(\\arg\\min_{v} \\sum_{u} d(v, u)\\)
                </span>
              </div>
            </div>

            <!-- Card 7: Hamiltonian Path -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Hamiltonian Path</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                A path that visits every vertex in the graph exactly once.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-indigo-400 font-semibold text-sm">
                  If closed loop 👉 <strong class="text-white font-bold ml-1">Hamiltonian Cycle</strong>
                </span>
              </div>
            </div>

            <!-- Card 8: Eulerian Path -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-white font-semibold text-lg">Eulerian Path</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                A path that traverses every <strong>edge</strong> exactly once.
              </p>
              <div class="mt-2 bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center text-center">
                <span class="text-orange-400 font-semibold text-sm">
                  Exists iff graph has exactly 0 or 2 odd-degree vertices
                </span>
              </div>
            </div>

          </div>

          <div class="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 mb-4">
            <p class="text-amber-300 font-semibold text-sm">⚡ Key Relationship: <code class="text-white">rad(G) ≤ diam(G) ≤ 2·rad(G)</code></p>
            <p class="text-slate-400 text-xs mt-1">The diameter is at most double the radius. This inequality is always tight.</p>
          </div>

          <!-- ─── KÖNIGSBERG ─────────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🌉 The Königsberg Bridge Problem</h3>
          <div class="bg-slate-800/40 border-l-4 border-orange-400 rounded-r-lg p-4 mb-4">
            <p class="text-orange-300 font-semibold mb-2">Historical Context (Leonhard Euler, 1736)</p>
            <p class="text-slate-300 text-sm leading-relaxed">
              The city of Königsberg (now Kaliningrad, Russia) was divided by the Pregel River into <strong class="text-white">4 land masses</strong> connected by <strong class="text-white">7 bridges</strong>.
              The puzzle: <em>"Is it possible to walk through the city, crossing each bridge <strong class="text-white">exactly once</strong>?"</em>
              Euler's answer was <strong class="text-rose-400">NO</strong> — and this single insight founded the entire field of Graph Theory.
            </p>
          </div>

          <!-- ─── MERMAID: KÖNIGSBERG ────────────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 4 — Königsberg Bridge Graph</p>
            <div class="mermaid">
graph TD
    style N fill:#1b4332,stroke:#6ee7b7,color:#fff
    style S fill:#1b4332,stroke:#6ee7b7,color:#fff
    style I1 fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style I2 fill:#1e3a5f,stroke:#38bdf8,color:#fff
    N["North Bank\ndeg = 3 (odd)"]
    S["South Bank\ndeg = 3 (odd)"]
    I1["Island 1\ndeg = 5 (odd)"]
    I2["Island 2\ndeg = 3 (odd)"]
    N -- "Bridge 1" --> I1
    N -- "Bridge 2" --> I1
    N -- "Bridge 3" --> I2
    S -- "Bridge 4" --> I1
    S -- "Bridge 5" --> I2
    I1 -- "Bridge 6" --> I2
    I2 -- "Bridge 7" --> S
            </div>
            <div class="mt-3 bg-rose-900/30 border border-rose-500/30 rounded-lg p-3 text-sm">
              <p class="text-rose-300 font-semibold">🚫 Why is it impossible?</p>
              <p class="text-slate-300 text-xs mt-1">An Eulerian path requires exactly <strong class="text-white">0 or 2 vertices of odd degree</strong>. In Königsberg, <strong class="text-rose-400">all 4 vertices have odd degree</strong> (3, 5, 3, 3). No Eulerian path exists.</p>
            </div>
          </div>

          <!-- ─── EULER'S PATH RULE ──────────────────────────────── -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3 text-center">
              <span class="text-emerald-300 font-semibold uppercase tracking-wider text-xs">0 odd-degree vertices</span>
              <h4 class="text-white font-bold text-lg leading-tight">Eulerian Circuit exists</h4>
              <div class="mt-auto bg-slate-900/50 p-2 rounded text-slate-400 text-xs">
                Can start from any vertex
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3 text-center">
              <span class="text-amber-300 font-semibold uppercase tracking-wider text-xs">Exactly 2 odd-degree vertices</span>
              <h4 class="text-white font-bold text-lg leading-tight">Eulerian Path exists</h4>
              <div class="mt-auto bg-slate-900/50 p-2 rounded text-slate-400 text-xs">
                Must start at one odd-degree, end at the other
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-3 text-center">
              <span class="text-rose-300 font-semibold uppercase tracking-wider text-xs">4 odd-degree vertices (Königsberg)</span>
              <h4 class="text-white font-bold text-lg leading-tight">Neither path nor circuit</h4>
              <div class="mt-auto bg-slate-900/50 p-2 rounded text-slate-400 text-xs">
                Impossible crossover
              </div>
            </div>

          </div>
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  UNIT II — Special Graphs & Trees
  // ═══════════════════════════════════════════════════════════
  {
    "unit": "Unit II",
    "title": "Special Graphs & Trees",
    "topics": [
      {
        "title": "3. Special Classes of Graphs",
        "content": `
          <!-- ─── COMPLETE GRAPHS ───────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-2 mb-3">🔷 Complete Graphs \\(K_n\\)</h3>
          <div class="bg-gradient-to-br from-slate-800/60 to-indigo-900/30 border border-indigo-500/30 rounded-xl p-4 mb-4">
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              A complete graph \\(K_n\\) has <strong class="text-white">\\(n\\) vertices</strong> and every pair of distinct vertices is connected by a <strong class="text-white">unique edge</strong>.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
              <div class="bg-slate-700/50 rounded-lg p-2">
                <p class="text-sky-300 font-semibold">Edges</p>
                <p class="text-white font-mono text-lg">\\(\\frac{n(n-1)}{2}\\)</p>
              </div>
              <div class="bg-slate-700/50 rounded-lg p-2">
                <p class="text-purple-300 font-semibold">Each Degree</p>
                <p class="text-white font-mono text-lg">\\(n - 1\\)</p>
              </div>
              <div class="bg-slate-700/50 rounded-lg p-2">
                <p class="text-emerald-300 font-semibold">Planar if</p>
                <p class="text-white font-mono text-lg">\\(n \\le 4\\)</p>
              </div>
              <div class="bg-slate-700/50 rounded-lg p-2">
                <p class="text-amber-300 font-semibold">Diameter</p>
                <p class="text-white font-mono text-lg">1</p>
              </div>
            </div>
          </div>

          <!-- ─── MERMAID: K4 COMPLETE GRAPH ────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 5 — Complete Graph K₄ (4 vertices, 6 edges)</p>
            <div class="mermaid">
graph TD
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#1e3a5f,stroke:#38bdf8,color:#fff
    A["v₁"] --- B["v₂"]
    A --- C["v₃"]
    A --- D["v₄"]
    B --- C
    B --- D
    C --- D
            </div>
            <p class="text-xs text-slate-500 mt-2 italic">K₄: 4 vertices, each with degree 3. Total edges = 4×3/2 = 6. This is the largest planar complete graph.</p>
          </div>

          <!-- ─── PLANAR GRAPHS ──────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔷 Planar Graphs & Euler's Formula</h3>
          <div class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4 mb-3">
            <div class="text-center text-2xl font-mono text-white mb-2">\\[V - E + F = 2\\]</div>
            <p class="text-slate-300 text-sm text-center">Euler's Formula for connected planar graphs: <strong class="text-emerald-300">Vertices − Edges + Faces = 2</strong></p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/50 border border-emerald-700/30 rounded-lg p-3">
              <p class="text-emerald-300 font-semibold text-sm mb-1">What counts as a Face?</p>
              <p class="text-slate-400 text-xs">Each region bounded by edges — including the <strong class="text-white">outer (infinite) region</strong>, which always counts as 1 face.</p>
            </div>
            <div class="bg-slate-800/50 border border-rose-700/30 rounded-lg p-3">
              <p class="text-rose-300 font-semibold text-sm mb-1">Non-Planar Graphs: K₅ and K₃,₃</p>
              <p class="text-slate-400 text-xs">By Kuratowski's Theorem: a graph is <strong class="text-white">non-planar</strong> iff it contains a subdivision of \\(K_5\\) or \\(K_{3,3}\\) as a subgraph.</p>
            </div>
          </div>

          <!-- ─── EULER FORMULA EXAMPLE ─────────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-6">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 6 — Euler's Formula Verification on a Planar Graph</p>
            <div class="mermaid">
graph LR
    style A fill:#1b4332,stroke:#6ee7b7,color:#fff
    style B fill:#1b4332,stroke:#6ee7b7,color:#fff
    style C fill:#1b4332,stroke:#6ee7b7,color:#fff
    style D fill:#1b4332,stroke:#6ee7b7,color:#fff
    A --- B
    B --- C
    C --- D
    D --- A
    A --- C
            </div>
            <div class="bg-slate-800/60 rounded-lg p-3 mt-3 text-sm">
              <p class="text-slate-300">V = 4, E = 5, F = 3 (2 inner triangles + 1 outer face)</p>
              <p class="text-emerald-300 font-semibold">V − E + F = 4 − 5 + 3 = <strong class="text-white">2</strong> ✓</p>
            </div>
          </div>

          <!-- ─── BIPARTITE GRAPH ────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔷 Bipartite Graphs</h3>
          <div class="bg-slate-800/40 border-l-4 border-sky-400 rounded-r-lg p-4 mb-3">
            <p class="text-slate-300 text-sm leading-relaxed">
              A graph \\(G = (V, E)\\) is <strong class="text-sky-300">bipartite</strong> if its vertex set can be split into two
              <strong class="text-white">disjoint sets</strong> \\(V_1\\) and \\(V_2\\) such that every edge in \\(E\\)
              connects a vertex in \\(V_1\\) to a vertex in \\(V_2\\). <em>No edge exists within the same partition.</em>
            </p>
          </div>
          <div class="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3 mb-3">
            <p class="text-indigo-300 font-semibold text-sm mb-1">🎯 Key Theorem</p>
            <p class="text-slate-300 text-xs">A graph is bipartite <strong class="text-white">if and only if</strong> it contains <strong class="text-white">no odd-length cycles</strong>.</p>
            <p class="text-slate-400 text-xs mt-1">Real-world example: Students (V₁) assigned to Projects (V₂) — a classic matching problem.</p>
          </div>
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 7 — Complete Bipartite Graph K₂,₃</p>
            <div class="mermaid">
graph LR
    subgraph V1["Set V₁ (Left)"]
        style V1 fill:#1e3a5f,stroke:#38bdf8
        A["A"] 
        B["B"]
    end
    subgraph V2["Set V₂ (Right)"]
        style V2 fill:#1b4332,stroke:#6ee7b7
        X["X"]
        Y["Y"]
        Z["Z"]
    end
    A --- X
    A --- Y
    A --- Z
    B --- X
    B --- Y
    B --- Z
            </div>
            <p class="text-xs text-slate-500 mt-2 italic">K₂,₃: Every vertex in V₁ connects to every vertex in V₂. No edges within same partition.</p>
          </div>

          <!-- ─── DUAL GRAPH ─────────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔷 Dual Graph</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/50 border border-purple-700/30 rounded-lg p-3">
              <p class="text-purple-300 font-semibold text-sm mb-2">Construction Rules</p>
              <ul class="space-y-1 text-xs text-slate-300">
                <li>• Place a <strong class="text-white">vertex</strong> inside each face of the original graph</li>
                <li>• For each edge of the original, draw a <strong class="text-white">dual edge</strong> crossing it, connecting the two face-vertices on either side</li>
                <li>• A <strong class="text-white">self-loop</strong> appears when the same face is on both sides of an edge</li>
              </ul>
            </div>
            <div class="bg-slate-800/50 border border-teal-700/30 rounded-lg p-3">
              <p class="text-teal-300 font-semibold text-sm mb-2">Properties</p>
              <ul class="space-y-1 text-xs text-slate-300">
                <li>• Dual of a <strong class="text-white">planar graph</strong> is always planar</li>
                <li>• <strong class="text-white">Dual of the dual</strong> is isomorphic to the original</li>
                <li>• Vertices in dual = Faces in original</li>
                <li>• Edges in dual = Edges in original</li>
              </ul>
            </div>
          </div>

          <!-- ─── CHORDAL GRAPH ──────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔷 Chordal Graph (Triangulated Graph)</h3>
          <div class="bg-slate-800/40 border-l-4 border-amber-400 rounded-r-lg p-4 mb-3">
            <p class="text-slate-300 text-sm">
              An undirected graph where every cycle of <strong class="text-white">4 or more vertices</strong> contains a <strong class="text-amber-300">chord</strong>
              — an edge between two non-adjacent vertices of the cycle, breaking it into smaller cycles.
            </p>
          </div>
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 8 — Chordal vs Non-Chordal</p>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-xs text-rose-400 mb-1">Non-Chordal (4-cycle, no chord)</p>
                <div class="mermaid">
graph TD
    A --- B
    B --- C
    C --- D
    D --- A
                </div>
              </div>
              <div>
                <p class="text-xs text-emerald-400 mb-1">Chordal (chord A-C added)</p>
                <div class="mermaid">
graph TD
    A --- B
    B --- C
    C --- D
    D --- A
    A -. "chord" .- C
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        "title": "4. Trees & Spanning Trees",
        "content": `
          <!-- ─── TREES ──────────────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-2 mb-3">🌳 Trees — The Acyclic Backbone</h3>
          <div class="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-4 mb-4">
            <p class="text-slate-300 text-sm leading-relaxed">
              A <strong class="text-emerald-300">tree</strong> is a connected, acyclic (no cycles) undirected graph.
              It is the <em>minimal connected structure</em> — removing any single edge disconnects it.
            </p>
          </div>

          <!-- ─── TREE PROPERTIES TABLE ─────────────────────────── -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-emerald-300 font-semibold text-lg">Edge count</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                A tree with \\(n\\) vertices has exactly \\(n-1\\) edges
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                <span class="text-emerald-400 text-xs font-semibold">Minimum edges for connectivity</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-sky-300 font-semibold text-lg">Unique path</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                There is exactly <strong>one</strong> simple path between any two vertices
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                <span class="text-emerald-400 text-xs font-semibold">No cycles possible</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-amber-300 font-semibold text-lg">Minimally connected</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Remove any edge → graph becomes disconnected
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                <span class="text-amber-400 text-xs font-semibold">Every edge is a bridge</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-rose-300 font-semibold text-lg">Maximally acyclic</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Add any new edge → a cycle is formed
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                <span class="text-amber-400 text-xs font-semibold">Any non-tree edge creates exactly 1 cycle</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3 md:col-span-2">
              <div class="flex items-baseline justify-between">
                <h4 class="text-purple-300 font-semibold text-lg">Pendant vertex</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Any tree with \\(n \\ge 2\\) has at least 2 pendant vertices
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                <span class="text-sky-300 text-xs font-semibold">Leaf nodes with \\(\\deg = 1\\)</span>
              </div>
            </div>

          </div>

          <!-- ─── MERMAID: TREE EXAMPLE ─────────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 9 — Rooted Tree (n=7 vertices, 6 edges)</p>
            <div class="mermaid">
graph TD
    style Root fill:#1b4332,stroke:#6ee7b7,color:#fff
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style D fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style E fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style F fill:#2d1b4e,stroke:#a78bfa,color:#fff
    Root["Root (v₁)\ndeg=2"] --> A["v₂\ndeg=3"]
    Root --> B["v₃\ndeg=1 ← pendant"]
    A --> C["v₄\ndeg=1 ← pendant"]
    A --> D["v₅\ndeg=1 ← pendant"]
    A --> E["v₆\ndeg=1 ← pendant"]
    Root --> F["v₇\ndeg=1 ← pendant"]
            </div>
          </div>

          <!-- ─── BINARY TREES ───────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🌳 Binary Trees</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/50 border border-sky-700/30 rounded-lg p-3">
              <p class="text-sky-300 font-semibold text-sm mb-2">Definition</p>
              <p class="text-slate-400 text-xs">Exactly <strong class="text-white">one vertex of degree 2</strong> (the root), with all other vertices having degree 1 (leaves) or degree 3 (internal nodes).</p>
            </div>
            <div class="bg-slate-800/50 border border-purple-700/30 rounded-lg p-3">
              <p class="text-purple-300 font-semibold text-sm mb-2">Key Properties</p>
              <ul class="space-y-1 text-xs text-slate-300">
                <li>• Number of vertices \\(n\\) is always <strong class="text-white">odd</strong></li>
                <li>• If \\(i\\) = internal nodes, leaves = \\(i + 1\\)</li>
                <li>• Path length = sum of levels of all pendant vertices</li>
              </ul>
            </div>
          </div>

          <!-- ─── SPANNING TREES ─────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🕸️ Spanning Trees</h3>
          <div class="bg-slate-800/40 border-l-4 border-purple-400 rounded-r-lg p-4 mb-3">
            <p class="text-slate-300 text-sm leading-relaxed">
              A <strong class="text-purple-300">spanning tree</strong> of a connected graph \\(G\\) is a subgraph that:
              <strong class="text-white">includes ALL vertices</strong> of \\(G\\), has <strong class="text-white">n-1 edges</strong>, and contains <strong class="text-white">no cycles</strong>.
              It is the skeleton of the graph — minimum connectivity.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div class="bg-slate-800/50 border border-sky-700/30 rounded-lg p-3 text-center">
              <p class="text-sky-300 font-semibold text-sm">Branch</p>
              <p class="text-slate-400 text-xs mt-1">An edge that IS part of the spanning tree</p>
            </div>
            <div class="bg-slate-800/50 border border-amber-700/30 rounded-lg p-3 text-center">
              <p class="text-amber-300 font-semibold text-sm">Chord / Link</p>
              <p class="text-slate-400 text-xs mt-1">An edge NOT in the spanning tree</p>
            </div>
            <div class="bg-slate-800/50 border border-rose-700/30 rounded-lg p-3 text-center">
              <p class="text-rose-300 font-semibold text-sm">Co-tree</p>
              <p class="text-slate-400 text-xs mt-1">The set of all chords (non-tree edges)</p>
            </div>
          </div>

          <!-- ─── MST ALGORITHMS ─────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">⚙️ Minimum Spanning Tree (MST) Algorithms</h3>
          <div class="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 mb-4">
            <p class="text-amber-300 text-sm font-semibold">🎯 Goal: Find a spanning tree with minimum total edge weight</p>
            <p class="text-slate-400 text-xs mt-1">Applications: Minimum cost network wiring, road construction, cluster analysis</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <!-- PRIM'S -->
            <div class="bg-slate-800/60 border border-sky-500/40 rounded-xl p-4">
              <p class="text-sky-300 font-bold text-sm mb-2">🔵 Prim's Algorithm — "Grow a tree from a seed"</p>
              <p class="text-slate-400 text-xs mb-3">Vertex-centric. Maintains one connected component that grows by adding the cheapest edge to an unvisited vertex.</p>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-semibold flex-shrink-0">1</span>
                  <p class="text-xs text-slate-300">Pick any starting vertex. Mark it as visited.</p>
                </div>
                <div class="flex items-start gap-2">
                  <span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-semibold flex-shrink-0">2</span>
                  <p class="text-xs text-slate-300">From all edges connecting visited→unvisited, pick the <strong class="text-white">minimum weight</strong> one.</p>
                </div>
                <div class="flex items-start gap-2">
                  <span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-semibold flex-shrink-0">3</span>
                  <p class="text-xs text-slate-300">Add that edge and its unvisited endpoint to the tree. Repeat until all vertices are included.</p>
                </div>
              </div>
              <p class="text-xs text-sky-400 mt-2">Complexity: \\(O(E \\log V)\\) with priority queue</p>
            </div>
            <!-- KRUSKAL'S -->
            <div class="bg-slate-800/60 border border-emerald-500/40 rounded-xl p-4">
              <p class="text-emerald-300 font-bold text-sm mb-2">🟢 Kruskal's Algorithm — "Sort edges globally"</p>
              <p class="text-slate-400 text-xs mb-3">Edge-centric. Sorts all edges by weight globally and greedily adds them without forming cycles.</p>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <span class="bg-emerald-700 text-white text-xs rounded px-1.5 py-0.5 font-semibold flex-shrink-0">1</span>
                  <p class="text-xs text-slate-300">Sort all edges in <strong class="text-white">ascending order</strong> of weight.</p>
                </div>
                <div class="flex items-start gap-2">
                  <span class="bg-emerald-700 text-white text-xs rounded px-1.5 py-0.5 font-semibold flex-shrink-0">2</span>
                  <p class="text-xs text-slate-300">Pick the smallest edge. Include it only if it does <strong class="text-white">NOT form a cycle</strong>. Use Union-Find to detect cycles.</p>
                </div>
                <div class="flex items-start gap-2">
                  <span class="bg-emerald-700 text-white text-xs rounded px-1.5 py-0.5 font-semibold flex-shrink-0">3</span>
                  <p class="text-xs text-slate-300">Stop when you have exactly <strong class="text-white">\\(n-1\\) edges</strong>.</p>
                </div>
              </div>
              <p class="text-xs text-emerald-400 mt-2">Complexity: \\(O(E \\log E)\\) — dominated by sorting</p>
            </div>
          </div>

          <!-- ─── MERMAID: MST WORKED EXAMPLE ───────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 10 — Weighted Graph → MST (Kruskal's)</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-xs text-slate-400 mb-2">Original Weighted Graph</p>
                <div class="mermaid">
graph TD
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#1e3a5f,stroke:#38bdf8,color:#fff
    A -- "4" --- B
    A -- "2" --- C
    B -- "5" --- C
    B -- "3" --- D
    C -- "1" --- D
                </div>
              </div>
              <div>
                <p class="text-xs text-emerald-400 mb-2">MST (total weight = 6): edges C-D(1), A-C(2), B-D(3)</p>
                <div class="mermaid">
graph TD
    style A fill:#1b4332,stroke:#6ee7b7,color:#fff
    style B fill:#1b4332,stroke:#6ee7b7,color:#fff
    style C fill:#1b4332,stroke:#6ee7b7,color:#fff
    style D fill:#1b4332,stroke:#6ee7b7,color:#fff
    A -- "2" --- C
    C -- "1" --- D
    D -- "3" --- B
                </div>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2 italic">Kruskal: Pick edges in order: (C-D,1)→(A-C,2)→(B-D,3). Skip (A-B,4) & (B-C,5) — would create cycles.</p>
          </div>

          <div class="bg-slate-800/40 border border-slate-600/40 rounded-lg p-3">
            <p class="text-slate-300 text-sm font-semibold mb-1">🔄 Cyclic Interchange</p>
            <p class="text-slate-400 text-xs">Generating one spanning tree from another: add a <strong class="text-white">chord</strong> (creates a cycle) → delete a <strong class="text-white">branch</strong> in that cycle. This gives a new spanning tree without disconnecting the graph.</p>
          </div>
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  UNIT III — Cut Sets & Network Flow
  // ═══════════════════════════════════════════════════════════
  {
    "unit": "Unit III",
    "title": "Cut Sets & Network Flow",
    "topics": [
      {
        "title": "5. Cut Sets and Network Flow",
        "content": `
          <!-- ─── CUT SETS ────────────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-2 mb-3">✂️ Cut Sets</h3>
          <div class="bg-slate-800/40 border-l-4 border-rose-400 rounded-r-lg p-4 mb-3">
            <p class="text-slate-300 text-sm leading-relaxed">
              A <strong class="text-rose-300">cut set</strong> in a connected graph \\(G\\) is a <em>minimal</em> set of edges whose removal
              <strong class="text-white">disconnects</strong> the graph. The word "minimal" is critical — no proper subset of a cut set also disconnects the graph.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/50 border border-rose-700/30 rounded-lg p-3">
              <p class="text-rose-300 font-semibold text-sm mb-2">Key Theorems on Cut Sets</p>
              <ul class="space-y-1 text-xs text-slate-300">
                <li>• Every cut set must contain at least <strong class="text-white">one branch</strong> of every spanning tree</li>
                <li>• A single <strong class="text-white">bridge</strong> (edge whose removal disconnects G) is itself a cut set</li>
                <li>• The ring sum of two cut sets is either a third cut set or an <strong class="text-white">edge-disjoint union</strong> of cut sets</li>
              </ul>
            </div>
            <div class="bg-slate-800/50 border border-amber-700/30 rounded-lg p-3">
              <p class="text-amber-300 font-semibold text-sm mb-2">Connectivity Metrics</p>
              <ul class="space-y-1 text-xs text-slate-300">
                <li>• <strong class="text-white">Edge connectivity \\(\\lambda(G)\\)</strong>: number of edges in the <em>smallest</em> cut set</li>
                <li>• <strong class="text-white">Vertex connectivity \\(\\kappa(G)\\)</strong>: minimum vertices to remove to disconnect G</li>
                <li>• <strong class="text-white">Whitney's Theorem</strong>: \\(\\kappa(G) \\le \\lambda(G) \\le \\delta(G)\\) where \\(\\delta(G)\\) = minimum degree</li>
              </ul>
            </div>
          </div>

          <!-- ─── MERMAID: CUT SET ───────────────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-6">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 11 — Cut Set Identification</p>
            <div class="mermaid">
graph LR
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1b4332,stroke:#6ee7b7,color:#fff
    style D fill:#1b4332,stroke:#6ee7b7,color:#fff
    A --- B
    A -. "cut edge 1" .- C
    B -. "cut edge 2" .- C
    C --- D
            </div>
            <p class="text-xs text-slate-500 mt-2 italic">Removing dashed edges {(A,C), (B,C)} disconnects left component {A,B} from right {C,D}. This is a cut set of size 2.</p>
          </div>

          <!-- ─── NETWORK FLOW ───────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🌊 Network Flow</h3>
          <div class="bg-gradient-to-br from-sky-900/40 to-teal-900/30 border border-sky-500/30 rounded-xl p-4 mb-4">
            <p class="text-slate-300 text-sm leading-relaxed">
              A <strong class="text-sky-300">flow network</strong> is a directed graph where each edge has a <strong class="text-white">capacity</strong> \\(c(u,v)\\) — the maximum amount that can flow through it.
              Flow moves from a <strong class="text-emerald-300">source (S)</strong> to a <strong class="text-rose-300">sink (T)</strong>.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <!-- Source -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-emerald-300 font-semibold text-lg">Source (S)</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Node with no incoming edges; origin of flow
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center">
                <span class="text-slate-400 font-mono text-xs">All edges point outward</span>
              </div>
            </div>

            <!-- Sink -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-rose-300 font-semibold text-lg">Sink (T)</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Node with no outgoing edges; destination of flow
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center">
                <span class="text-slate-400 font-mono text-xs">All edges point inward</span>
              </div>
            </div>

            <!-- Capacity -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-amber-300 font-semibold text-lg">Capacity</h4>
                <span class="text-amber-300 font-mono text-sm bg-slate-900/50 px-2 py-1 rounded">c(u,v)</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Max flow allowed through edge (u→v)
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center">
                <span class="text-amber-400 font-mono text-sm">\\(0 \\le f(u,v) \\le c(u,v)\\)</span>
              </div>
            </div>

            <!-- Conservation -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3">
              <div class="flex items-baseline justify-between">
                <h4 class="text-sky-300 font-semibold text-lg">Conservation</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Flow into any intermediate node = flow out
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center">
                <span class="text-sky-400 font-mono text-sm">\\(\\sum_{in} f = \\sum_{out} f\\)</span>
              </div>
            </div>

            <!-- Residual Capacity -->
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 shadow-sm flex flex-col gap-3 md:col-span-2">
              <div class="flex items-baseline justify-between">
                <h4 class="text-purple-300 font-semibold text-lg">Residual Capacity</h4>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed">
                Remaining capacity after current flow
              </p>
              <div class="mt-auto bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 flex justify-center items-center">
                <span class="text-purple-400 font-mono text-sm">\\(r(u,v) = c(u,v) - f(u,v)\\)</span>
              </div>
            </div>
          </div>

          <!-- ─── MAX-FLOW MIN-CUT ───────────────────────────────── -->
          <div class="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 border border-indigo-500/40 rounded-xl p-4 mb-4">
            <p class="text-indigo-300 font-bold text-base mb-2">⚖️ Max-Flow Min-Cut Theorem (Ford & Fulkerson, 1956)</p>
            <div class="text-center bg-slate-800/60 rounded-lg p-3 my-2 font-mono text-white text-lg">
              Max Flow = Min Cut Capacity
            </div>
            <p class="text-slate-300 text-sm">
              The <strong class="text-white">maximum amount of flow</strong> that can be sent from S to T equals the
              <strong class="text-white">minimum capacity</strong> of any cut that separates S from T.
              The bottleneck always limits the whole system.
            </p>
          </div>

          <!-- ─── MERMAID: NETWORK FLOW ──────────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 12 — Network Flow Graph (capacity labels)</p>
            <div class="mermaid">
graph LR
    style S fill:#1b4332,stroke:#6ee7b7,color:#fff
    style T fill:#4a1942,stroke:#f472b6,color:#fff
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff

    S["S (Source)"] -- "cap=10" --> A
    S -- "cap=8" --> B
    A -- "cap=5" --> B
    A -- "cap=7" --> T["T (Sink)"]
    B -- "cap=10" --> C
    C -- "cap=6" --> T
    A -- "cap=3" --> C
            </div>
          </div>

          <!-- ─── FORD-FULKERSON ─────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">⚙️ Ford-Fulkerson Algorithm</h3>
          <div class="grid grid-cols-1 gap-3 mb-4">
            <div class="bg-slate-800/60 border border-purple-500/40 rounded-xl p-4">
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <span class="bg-purple-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <p class="text-purple-300 font-semibold text-sm">Initialize</p>
                    <p class="text-slate-400 text-xs">Set flow \\(f(u,v) = 0\\) on all edges. Build the residual graph.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-purple-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <p class="text-purple-300 font-semibold text-sm">Find Augmenting Path</p>
                    <p class="text-slate-400 text-xs">Use BFS or DFS to find any path from S to T in the <strong class="text-white">residual graph</strong> where all edges have positive residual capacity.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-purple-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <p class="text-purple-300 font-semibold text-sm">Find Bottleneck</p>
                    <p class="text-slate-400 text-xs">The <strong class="text-white">bottleneck capacity</strong> = minimum residual capacity along the augmenting path. \\(\\Delta = \\min_{(u,v) \\in P} r(u,v)\\)</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-purple-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <p class="text-purple-300 font-semibold text-sm">Augment Flow</p>
                    <p class="text-slate-400 text-xs">Increase flow along the path by \\(\\Delta\\). Update residual graph: forward edges decrease, backward edges increase by \\(\\Delta\\).</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-purple-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <p class="text-purple-300 font-semibold text-sm">Repeat</p>
                    <p class="text-slate-400 text-xs">Repeat steps 2-4 until no augmenting path exists. The total flow is the <strong class="text-white">maximum flow</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ─── MERMAID: AUGMENTING PATH ───────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 13 — Augmenting Path Traced: S→A→B→T</p>
            <div class="mermaid">
graph LR
    style S fill:#1b4332,stroke:#6ee7b7,color:#fff
    style A fill:#7c2d12,stroke:#fb923c,color:#fff
    style B fill:#7c2d12,stroke:#fb923c,color:#fff
    style T fill:#4a1942,stroke:#f472b6,color:#fff

    S["S"] -- "cap=10, flow=7" --> A["A"]
    A -- "cap=7, flow=7 ← BOTTLENECK" --> B["B"]
    B -- "cap=10, flow=7" --> T["T"]
            </div>
            <div class="bg-slate-800/60 rounded-lg p-3 mt-3 text-xs text-slate-300">
              <p>Path bottleneck = min(10, 7, 10) = <strong class="text-orange-300">7</strong>. Augment flow on this path by 7.</p>
              <p>Residual capacity of A→B becomes 7−7 = <strong class="text-rose-300">0</strong> (saturated). Path is exhausted.</p>
            </div>
          </div>
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  UNIT IV — Graph Traversals
  // ═══════════════════════════════════════════════════════════
  {
    "unit": "Unit IV",
    "title": "Graph Traversals",
    "topics": [
      {
        "title": "6. Graph Traversals",
        "content": `
          <!-- ─── INTRO ──────────────────────────────────────────── -->
          <div class="bg-gradient-to-r from-slate-800/60 to-sky-900/40 border border-sky-500/30 rounded-xl p-4 mb-5">
            <p class="text-sky-300 font-semibold mb-1">🗺️ Why Graph Traversal?</p>
            <p class="text-slate-300 text-sm">Graph traversal means visiting all vertices of a graph in a systematic order. It's the foundation of: web crawlers (BFS), maze solving (DFS), shortest path algorithms, cycle detection, topological sorting, and more.</p>
          </div>

          <!-- ─── BFS vs DFS COMPARISON ─────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-2 mb-3">🔷 BFS vs DFS — Head-to-Head</h3>
          <div class="overflow-x-auto my-3 border border-slate-700/50 rounded-xl mb-4">
            <table class="min-w-[500px] w-full text-sm text-left text-slate-300">
              <thead class="text-xs uppercase bg-slate-800/90 text-sky-400">
                <tr>
                  <th class="px-4 py-3">Property</th>
                  <th class="px-4 py-3 text-sky-300">Breadth-First Search (BFS)</th>
                  <th class="px-4 py-3 text-purple-300">Depth-First Search (DFS)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-700/50">
                <tr>
                  <td class="px-4 py-3 font-semibold text-white">Core Idea</td>
                  <td class="px-4 py-3">Explore all <strong class="text-sky-300">neighbors first</strong>, then neighbors of neighbors</td>
                  <td class="px-4 py-3">Go as <strong class="text-purple-300">deep as possible</strong>, then backtrack</td>
                </tr>
                <tr class="bg-slate-800/30">
                  <td class="px-4 py-3 font-semibold text-white">Data Structure</td>
                  <td class="px-4 py-3"><strong class="text-sky-300">Queue</strong> (FIFO — First In, First Out)</td>
                  <td class="px-4 py-3"><strong class="text-purple-300">Stack</strong> (LIFO — Last In, First Out)</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 font-semibold text-white">Traversal Order</td>
                  <td class="px-4 py-3">Level-by-level (layer order)</td>
                  <td class="px-4 py-3">Branch-by-branch (pre/in/post order)</td>
                </tr>
                <tr class="bg-slate-800/30">
                  <td class="px-4 py-3 font-semibold text-white">Memory Usage</td>
                  <td class="px-4 py-3 text-amber-300">Higher — stores entire frontier level</td>
                  <td class="px-4 py-3 text-emerald-300">Lower — stores only current path</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 font-semibold text-white">Shortest Path</td>
                  <td class="px-4 py-3 text-emerald-300">✓ Guarantees shortest path in unweighted graphs</td>
                  <td class="px-4 py-3 text-rose-400">✗ Does NOT guarantee shortest path</td>
                </tr>
                <tr class="bg-slate-800/30">
                  <td class="px-4 py-3 font-semibold text-white">Time Complexity</td>
                  <td class="px-4 py-3 font-mono">O(V + E)</td>
                  <td class="px-4 py-3 font-mono">O(V + E)</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 font-semibold text-white">Space Complexity</td>
                  <td class="px-4 py-3 font-mono text-amber-300">O(V) — width of widest level</td>
                  <td class="px-4 py-3 font-mono text-emerald-300">O(h) — height of DFS tree</td>
                </tr>
                <tr class="bg-slate-800/30">
                  <td class="px-4 py-3 font-semibold text-white">Best Use Case</td>
                  <td class="px-4 py-3">Shortest path, social network proximity, web crawling</td>
                  <td class="px-4 py-3">Cycle detection, topological sort, maze solving, connected components</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- ─── BFS ALGORITHM ─────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔵 BFS — Step by Step</h3>
          <div class="bg-slate-800/60 border border-sky-500/40 rounded-xl p-4 mb-4">
            <div class="space-y-2">
              <div class="flex gap-3"><span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">INIT</span><p class="text-xs text-slate-300">Mark all vertices as <strong class="text-white">unvisited</strong>. Create an empty queue \\(Q\\).</p></div>
              <div class="flex gap-3"><span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S1</span><p class="text-xs text-slate-300">Start from root vertex \\(s\\). Mark \\(s\\) as visited. Enqueue \\(s\\) → \\(Q = [s]\\).</p></div>
              <div class="flex gap-3"><span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S2</span><p class="text-xs text-slate-300">While \\(Q\\) is not empty: Dequeue front vertex \\(v\\). Process \\(v\\).</p></div>
              <div class="flex gap-3"><span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S3</span><p class="text-xs text-slate-300">For each <strong class="text-white">unvisited neighbor</strong> \\(u\\) of \\(v\\): mark \\(u\\) visited, enqueue \\(u\\).</p></div>
              <div class="flex gap-3"><span class="bg-sky-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S4</span><p class="text-xs text-slate-300">Repeat S2–S3 until \\(Q\\) is empty. All reachable vertices are now visited.</p></div>
            </div>
          </div>

          <!-- ─── MERMAID: BFS TRAVERSAL ─────────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-6">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 14 — BFS Traversal Order (start from A)</p>
            <div class="mermaid">
graph TD
    style A fill:#1b4332,stroke:#6ee7b7,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style E fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style F fill:#2d1b4e,stroke:#a78bfa,color:#fff
    A["A\n Level 0"] --> B["B\n Level 1"]
    A --> C["C\n Level 1"]
    B --> D["D\n Level 2"]
    B --> E["E\n Level 2"]
    C --> F["F\n Level 2"]
            </div>
            <div class="mt-3 bg-slate-800/60 rounded-lg p-3 text-xs">
              <p class="text-sky-300 font-semibold">BFS Order: A → B → C → D → E → F</p>
              <p class="text-slate-400 mt-1">Queue progression: [A] → [B,C] → [C,D,E] → [D,E,F] → [E,F] → [F] → []</p>
            </div>
          </div>

          <!-- ─── DFS ALGORITHM ─────────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🟣 DFS — Step by Step</h3>
          <div class="bg-slate-800/60 border border-purple-500/40 rounded-xl p-4 mb-4">
            <div class="space-y-2">
              <div class="flex gap-3"><span class="bg-purple-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">INIT</span><p class="text-xs text-slate-300">Mark all vertices as <strong class="text-white">unvisited</strong>. Create an empty stack \\(S\\).</p></div>
              <div class="flex gap-3"><span class="bg-purple-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S1</span><p class="text-xs text-slate-300">Push start vertex onto \\(S\\).</p></div>
              <div class="flex gap-3"><span class="bg-purple-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S2</span><p class="text-xs text-slate-300">Pop top vertex \\(v\\). If unvisited: mark visited, process \\(v\\).</p></div>
              <div class="flex gap-3"><span class="bg-purple-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S3</span><p class="text-xs text-slate-300">Push all <strong class="text-white">unvisited neighbors</strong> of \\(v\\) onto the stack.</p></div>
              <div class="flex gap-3"><span class="bg-purple-700 text-white text-xs rounded px-1.5 py-0.5 font-bold flex-shrink-0">S4</span><p class="text-xs text-slate-300">Repeat S2–S3 until stack is empty.</p></div>
            </div>
          </div>

          <!-- ─── MERMAID: DFS TRAVERSAL ─────────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-6">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 15 — DFS Traversal (start from A)</p>
            <div class="mermaid">
graph TD
    style A fill:#1b4332,stroke:#6ee7b7,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style G fill:#2d1b4e,stroke:#a78bfa,color:#fff
    style C fill:#7c2d12,stroke:#fb923c,color:#fff
    style E fill:#7c2d12,stroke:#fb923c,color:#fff

    A["A\n Visit #1"] --> B["B\n Visit #2"]
    B --> D["D\n Visit #3"]
    D --> G["G\n Visit #4\n (backtrack)"]
    B -. "backtrack" .- C["C\n Visit #5"]
    A -. "backtrack" .- E["E\n Visit #6"]
            </div>
            <div class="mt-3 bg-slate-800/60 rounded-lg p-3 text-xs">
              <p class="text-purple-300 font-semibold">DFS Order: A → B → D → G → C → E</p>
              <p class="text-slate-400 mt-1">Goes deep into branch A→B→D→G before backtracking to explore C and E.</p>
            </div>
          </div>

          <!-- ─── BFS vs DFS VISUAL ANALOGY ─────────────────────── -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-sky-900/20 border border-sky-500/30 rounded-lg p-3">
              <p class="text-sky-300 font-semibold text-sm">🌊 BFS Analogy</p>
              <p class="text-slate-400 text-xs mt-1">Like <strong class="text-white">water flooding a terrain</strong> — it spreads outward in all directions simultaneously, level by level, before going deeper.</p>
            </div>
            <div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
              <p class="text-purple-300 font-semibold text-sm">🔦 DFS Analogy</p>
              <p class="text-slate-400 text-xs mt-1">Like <strong class="text-white">exploring a cave with a torch</strong> — go as far down one tunnel as possible before retracing steps to try a different passage.</p>
            </div>
          </div>
        `
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  UNIT V — Matrix Representations
  // ═══════════════════════════════════════════════════════════
  {
    "unit": "Unit V",
    "title": "Matrix Representations",
    "topics": [
      {
        "title": "7. Circuit Matrix & Fundamental Circuits",
        "content": `
          <!-- ─── INTRO ──────────────────────────────────────────── -->
          <div class="bg-gradient-to-r from-slate-800/60 to-teal-900/40 border border-teal-500/30 rounded-xl p-4 mb-5">
            <p class="text-teal-300 font-semibold mb-1">🔢 Why Matrix Representations?</p>
            <p class="text-slate-300 text-sm">Graphs must often be stored and processed by computers. Matrix representations convert graph structure into linear algebra — enabling efficient algorithms for connectivity, shortest paths, and loop analysis.</p>
          </div>

          <!-- ─── THREE MATRIX TYPES ─────────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-2 mb-3">🔷 Three Core Matrix Representations</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <div class="bg-slate-800/60 border border-sky-500/40 rounded-xl p-3">
              <p class="text-sky-300 font-bold text-sm mb-2">Adjacency Matrix [A]</p>
              <p class="text-slate-400 text-xs mb-2">\\(n \\times n\\) matrix. \\(A[i][j] = 1\\) if edge \\((v_i, v_j)\\) exists, else 0.</p>
              <ul class="text-xs text-slate-400 space-y-1">
                <li>✓ Fast edge lookup O(1)</li>
                <li>✗ Space O(V²) — wasteful for sparse graphs</li>
                <li>→ Symmetric for undirected graphs</li>
              </ul>
            </div>
            <div class="bg-slate-800/60 border border-purple-500/40 rounded-xl p-3">
              <p class="text-purple-300 font-bold text-sm mb-2">Incidence Matrix [B]</p>
              <p class="text-slate-400 text-xs mb-2">\\(n \\times m\\) matrix (vertices × edges). \\(B[i][j] = 1\\) if vertex \\(v_i\\) is incident to edge \\(e_j\\).</p>
              <ul class="text-xs text-slate-400 space-y-1">
                <li>✓ Each column has exactly 2 ones</li>
                <li>✓ Column sums = 2 (for each edge)</li>
                <li>→ Row sum = degree of vertex</li>
              </ul>
            </div>
            <div class="bg-slate-800/60 border border-emerald-500/40 rounded-xl p-3">
              <p class="text-emerald-300 font-bold text-sm mb-2">Circuit Matrix [C]</p>
              <p class="text-slate-400 text-xs mb-2">Rows represent <strong class="text-white">independent circuits</strong>. \\(C[i][j] = 1\\) if circuit \\(i\\) contains edge \\(e_j\\), else 0.</p>
              <ul class="text-xs text-slate-400 space-y-1">
                <li>✓ Used to analyze loops in networks</li>
                <li>✓ Ranks = cyclomatic number</li>
                <li>→ Ring sum of rows = another circuit</li>
              </ul>
            </div>
          </div>

          <!-- ─── ADJACENCY MATRIX EXAMPLE ──────────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-5">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 16 — Graph and its Adjacency Matrix</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <p class="text-xs text-slate-400 mb-2">Graph</p>
                <div class="mermaid">
graph TD
    style A fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style B fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style C fill:#1e3a5f,stroke:#38bdf8,color:#fff
    style D fill:#1e3a5f,stroke:#38bdf8,color:#fff
    A["v₁"] --- B["v₂"]
    A --- C["v₃"]
    B --- C
    B --- D["v₄"]
                </div>
              </div>
              <div>
                <p class="text-xs text-slate-400 mb-2">Adjacency Matrix</p>
                <div class="font-mono text-sm text-slate-300 bg-slate-800/60 rounded-lg p-3">
                  <p class="text-xs text-slate-500 mb-2">     v₁ v₂ v₃ v₄</p>
                  <p><span class="text-sky-400">v₁</span> [  0  1  1  0 ]</p>
                  <p><span class="text-sky-400">v₂</span> [  1  0  1  1 ]</p>
                  <p><span class="text-sky-400">v₃</span> [  1  1  0  0 ]</p>
                  <p><span class="text-sky-400">v₄</span> [  0  1  0  0 ]</p>
                  <p class="text-xs text-slate-500 mt-2">Symmetric (undirected). Row sum = degree.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ─── FUNDAMENTAL CIRCUITS ───────────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">🔄 Fundamental Circuits</h3>
          <div class="bg-slate-800/40 border-l-4 border-emerald-400 rounded-r-lg p-4 mb-4">
            <p class="text-slate-300 text-sm leading-relaxed">
              A <strong class="text-emerald-300">fundamental circuit</strong> is formed by adding exactly <strong class="text-white">one chord</strong> (non-tree edge) to a spanning tree.
              Since the spanning tree has a unique path between any two vertices, adding one chord creates <strong class="text-white">exactly one cycle</strong>.
              Each chord produces a distinct fundamental circuit.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/50 border border-emerald-700/30 rounded-lg p-3">
              <p class="text-emerald-300 font-semibold text-sm mb-2">How to Find Fundamental Circuits</p>
              <div class="space-y-1 text-xs text-slate-300">
                <div class="flex gap-2"><span class="text-emerald-400 font-bold">1.</span><p>Find a spanning tree \\(T\\) of the graph \\(G\\)</p></div>
                <div class="flex gap-2"><span class="text-emerald-400 font-bold">2.</span><p>Identify all <strong class="text-white">chords</strong> (edges in \\(G\\) but NOT in \\(T\\))</p></div>
                <div class="flex gap-2"><span class="text-emerald-400 font-bold">3.</span><p>For each chord, add it to \\(T\\) → forms exactly one cycle</p></div>
                <div class="flex gap-2"><span class="text-emerald-400 font-bold">4.</span><p>That cycle = the fundamental circuit for that chord</p></div>
              </div>
            </div>
            <div class="bg-slate-800/50 border border-amber-700/30 rounded-lg p-3">
              <p class="text-amber-300 font-semibold text-sm mb-2">Cyclomatic Number (Circuit Rank)</p>
              <div class="text-center bg-slate-700/50 rounded p-2 my-2 font-mono text-white">
                \\(\\mu(G) = |E| - |V| + 1\\)
              </div>
              <p class="text-slate-400 text-xs">The number of independent fundamental circuits = the number of chords. This is the minimum number of equations needed to fully analyze a circuit network.</p>
            </div>
          </div>

          <!-- ─── MERMAID: FUNDAMENTAL CIRCUIT ──────────────────── -->
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-3">📊 Diagram 17 — Spanning Tree + Chord → Fundamental Circuit</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-xs text-sky-400 mb-2">Spanning Tree (bold = branches)</p>
                <div class="mermaid">
graph LR
    style A fill:#1b4332,stroke:#6ee7b7,color:#fff
    style B fill:#1b4332,stroke:#6ee7b7,color:#fff
    style C fill:#1b4332,stroke:#6ee7b7,color:#fff
    style D fill:#1b4332,stroke:#6ee7b7,color:#fff
    A -- "branch e1" --- B
    B -- "branch e2" --- C
    C -- "branch e3" --- D
                </div>
              </div>
              <div>
                <p class="text-xs text-amber-400 mb-2">Add chord e4 (A↔C) → Fundamental Circuit</p>
                <div class="mermaid">
graph LR
    style A fill:#1b4332,stroke:#6ee7b7,color:#fff
    style B fill:#1b4332,stroke:#6ee7b7,color:#fff
    style C fill:#1b4332,stroke:#6ee7b7,color:#fff
    style D fill:#1b4332,stroke:#6ee7b7,color:#fff
    A -- "e1" --- B
    B -- "e2" --- C
    C -- "e3" --- D
    A -. "chord e4" .- C
                </div>
                <p class="text-xs text-amber-400 mt-2">Circuit: A→B→C→A (via e1, e2, e4)</p>
              </div>
            </div>
          </div>

          <!-- ─── CIRCUIT MATRIX CONSTRUCTION ──────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">📋 Building the Circuit Matrix</h3>
          <div class="bg-slate-900 border border-slate-600/50 rounded-xl p-4 mb-4">
            <p class="text-xs text-slate-400 mb-3">For a graph with branches \\(b_1, b_2, b_3\\) and chords \\(c_1, c_2\\):</p>
            <div class="font-mono text-sm text-slate-300 bg-slate-800/60 rounded-lg p-3">
              <p class="text-xs text-slate-500 mb-2">          b₁ b₂ b₃ c₁ c₂</p>
              <p><span class="text-amber-400">Circuit 1</span> [  1  1  0  1  0  ]  ← fundamental circuit for chord c₁</p>
              <p><span class="text-amber-400">Circuit 2</span> [  0  1  1  0  1  ]  ← fundamental circuit for chord c₂</p>
              <p class="text-xs text-slate-500 mt-2">Identity submatrix in chord columns [c₁,c₂] confirms independence of circuits.</p>
            </div>
          </div>

          <!-- ─── SUMMARY TABLE ALL UNITS ───────────────────────── -->
          <h3 class="text-lg font-bold text-sky-400 mt-6 mb-3">📚 Master Reference: Key Formulas</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            
            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <span class="text-slate-400 text-xs font-semibold uppercase tracking-wider">Any undirected graph</span>
              <p class="text-sky-300 font-semibold mb-1">Handshaking Lemma</p>
              <div class="mt-auto bg-slate-900/80 p-2 rounded justify-center items-center flex">
                <span class="text-white font-mono text-sm">∑deg(v) = 2|E|</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <span class="text-slate-400 text-xs font-semibold uppercase tracking-wider">Complete graphs (K_n)</span>
              <p class="text-purple-300 font-semibold mb-1">Total Edges</p>
              <div class="mt-auto bg-slate-900/80 p-2 rounded justify-center items-center flex">
                <span class="text-white font-mono text-sm">E = n(n-1)/2</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <span class="text-slate-400 text-xs font-semibold uppercase tracking-wider">Connected planar graphs</span>
              <p class="text-emerald-300 font-semibold mb-1">Euler's Formula</p>
              <div class="mt-auto bg-slate-900/80 p-2 rounded justify-center items-center flex">
                <span class="text-white font-mono text-sm">V - E + F = 2</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <span class="text-slate-400 text-xs font-semibold uppercase tracking-wider">Trees & Spanning Trees</span>
              <p class="text-rose-300 font-semibold mb-1">Edge Count</p>
              <div class="mt-auto bg-slate-900/80 p-2 rounded justify-center items-center flex">
                <span class="text-white font-mono text-sm">|E| = |V| - 1</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <span class="text-slate-400 text-xs font-semibold uppercase tracking-wider">Circuit Analysis</span>
              <p class="text-amber-300 font-semibold mb-1">Cyclomatic Number</p>
              <div class="mt-auto bg-slate-900/80 p-2 rounded justify-center items-center flex">
                <span class="text-white font-mono text-sm">μ = |E| - |V| + 1</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <span class="text-slate-400 text-xs font-semibold uppercase tracking-wider">Network Flow</span>
              <p class="text-indigo-300 font-semibold mb-1">Residual Capacity</p>
              <div class="mt-auto bg-slate-900/80 p-2 rounded justify-center items-center flex">
                <span class="text-white font-mono text-sm">r = c - f</span>
              </div>
            </div>

            <div class="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 shadow-sm flex flex-col gap-2 md:col-span-2 lg:col-span-3">
              <span class="text-slate-400 text-xs font-semibold uppercase tracking-wider">Cut sets & connectivity</span>
              <p class="text-teal-300 font-semibold mb-1">Whitney's Connectivity Theorem</p>
              <div class="mt-auto bg-slate-900/80 p-2 rounded justify-center items-center flex">
                <span class="text-white font-mono text-sm">κ ≤ λ ≤ δ</span>
              </div>
            </div>

          </div>
        `
      }
    ]
  }
];