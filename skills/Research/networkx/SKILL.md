---
id: networkx
name: NetworkX
description: Comprehensive toolkit for creating, analyzing, and visualizing complex networks and graphs in Python.
category: Research
requires: []
examples:
  - Calculate the PageRank and betweenness centrality for this social network graph.
  - Find the shortest path between two nodes in a weighted network using NetworkX.
---

# NetworkX

## Overview

NetworkX is a Python package for creating, manipulating, and analyzing complex networks and graphs. Use this skill when working with network or graph data structures, including social networks, biological networks, transportation systems, citation networks, knowledge graphs, or any system involving relationships between entities.

## When to Use This Skill

Invoke this skill when tasks involve:

- **Creating graphs**: Building network structures from data, adding nodes and edges with attributes
- **Graph analysis**: Computing centrality measures, finding shortest paths, detecting communities, measuring clustering
- **Graph algorithms**: Running standard algorithms like Dijkstra's, PageRank, minimum spanning trees, maximum flow
- **Network generation**: Creating synthetic networks (random, scale-free, small-world models) for testing or simulation
- **Graph I/O**: Reading from or writing to various formats (edge lists, GraphML, JSON, CSV, adjacency matrices)
- **Visualization**: Drawing and customizing network visualizations with matplotlib or interactive libraries
- **Network comparison**: Checking isomorphism, computing graph metrics, analyzing structural properties

## Instruction
- Identify the graph type needed for the task: simple Graph, directed DiGraph, or MultiGraph for parallel edges.
- Construct the network by adding nodes and edges, ensuring relevant attributes (weight, label, type) are correctly assigned.
- Execute structural analysis algorithms to compute centrality measures like PageRank, Betweenness, or Eigenvector centrality.
- Perform community detection or clustering analysis using algorithms like Louvain or Girvan-Newman to identify network sub-groups.
- Analyze network connectivity by finding shortest paths, minimum spanning trees, or maximum flow trajectories.
- Generate synthetic networks using standard models (e.g., Erdős-Rényi, Barabási-Albert) for benchmarking and simulation.
- Visualize the network layout using Matplotlib for static plots or Plotly/PyVis for interactive exploration.
- Read or write network data in various formats including GraphML, GEXF, JSON, or adjacency matrices.

## Output
- Quantitative network metric reports including centrality scores and clustering coefficients.
- Identified community structures and shortest path analysis results.
- Static or interactive network visualizations showing node and edge relationships.

## Core Capabilities

### 1. Graph Creation and Manipulation

NetworkX supports four main graph types:
- **Graph**: Undirected graphs with single edges
- **DiGraph**: Directed graphs with one-way connections
- **MultiGraph**: Undirected graphs allowing multiple edges between nodes
- **MultiDiGraph**: Directed graphs with multiple edges


### 2. Graph Algorithms

NetworkX provides extensive algorithms for network analysis

### 3. Graph Generators

Create synthetic networks for testing, simulation, or modeling

### 4. Reading and Writing Graphs

NetworkX supports numerous file formats and data sources

### 5. Visualization

Create clear and informative network visualizations:

## Working with NetworkX

### Installation

### Common Workflow Pattern

Most NetworkX tasks follow this pattern:

1. **Create or Load Graph**:

2. **Examine Structure**:

3. **Analyze**:

4. **Visualize**:

5. **Export Results**:

### Important Considerations

**Floating Point Precision**: When graphs contain floating-point numbers, all results are inherently approximate due to precision limitations. This can affect algorithm outcomes, particularly in minimum/maximum computations.

**Memory and Performance**: Each time a script runs, graph data must be loaded into memory. For large networks:
- Use appropriate data structures (sparse matrices for large sparse graphs)
- Consider loading only necessary subgraphs
- Use efficient file formats (pickle for Python objects, compressed formats)
- Leverage approximate algorithms for very large networks (e.g., `k` parameter in centrality calculations)

**Node and Edge Types**:
- Nodes can be any hashable Python object (numbers, strings, tuples, custom objects)
- Use meaningful identifiers for clarity
- When removing nodes, all incident edges are automatically removed

**Random Seeds**: Always set random seeds for reproducibility in random graph generation and force-directed layouts:
