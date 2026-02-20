export const unitv_examMCQs = {
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
};
