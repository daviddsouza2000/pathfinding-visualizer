import React, { useState, useEffect } from 'react';
import Node from './Node/Node';
import { dijkstra, getNodesInShortestPathOrderDijkstra } from '../algorithms/dijkstra';
import { bfs, getNodesInShortestPathOrderBfs } from '../algorithms/bfs';
import { dfs, getNodesInShortestPathOrderDfs } from '../algorithms/dfs';
import { astar, getNodesInShortestPathOrderAstar} from '../algorithms/astar';

import './PathfindingVisualizer.css';

var START_NODE_ROW = 8;
var START_NODE_COL = 15;
var FINISH_NODE_ROW = 10;
var FINISH_NODE_COL = 35;

const GRID_ROWS = 20;
const GRID_COLS = 40;

export default function PathfindingVisualizer() {
    const [grid, setGrid] = useState([]);
    const [mouseIsPressed, setMouseIsPressed] = useState(false);
    const [canDraw, setCanDraw] = useState(true); // true if visualizer is run/ already ran to disable creating walls
    const [movingStartNode, setMovingStartNode] = useState(false); // if user is moving start node
    const [movingFinishNode, setMovingFinishNode] = useState(false); // if user is moving finish node

    useEffect(() => {
        const newGrid = getInitialGrid();
        setGrid(newGrid);
    }, []);

    const handleMouseDown = (row, col) => {
        if(!canDraw) return;

        if (row === START_NODE_ROW && col === START_NODE_COL) {
            setMovingStartNode(true);
        }
        else if (row === FINISH_NODE_ROW && col === FINISH_NODE_COL) {
            setMovingFinishNode(true);
        }
        else {
            const newGrid = getNewGridWithWallToggled(grid, row, col);
            setGrid(newGrid);
        }
        setMouseIsPressed(true);
    }

    const handleMouseEnter = (row, col) => {
        if (!canDraw) return;
        if (!mouseIsPressed) return;

        if (movingStartNode) {
            const newGrid = getNewGridWithStartNodeToggled(grid, row, col);
            setGrid(newGrid);
        }
        else if (movingFinishNode) {
            const newGrid = getNewGridWithFinishNodeToggled(grid, row, col);
            setGrid(newGrid);
        }
        else {
            const newGrid = getNewGridWithWallToggled(grid, row, col);
            setGrid(newGrid);
        }
    }

    const handleMouseUp = () => {
        setMovingStartNode(false);
        setMovingFinishNode(false);
        setMouseIsPressed(false);
    }

    const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).classList.add('node-visited');
            }, 10 * i);
        }
    }

    const animateShortestPath = (nodesInShortestPathOrder) => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).classList.add('node-shortest-path');
            }, 50 * i);
        }
    }

    const visualizeDijkstra = () => {
        if(!canDraw) return;
        setCanDraw(false);
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrderDijkstra(finishNode);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    const visualizeBfs = () => {
        if(!canDraw) return;
        setCanDraw(false);
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = bfs(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrderBfs(finishNode);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    const visualizeDfs = () => {
        if(!canDraw) return;
        setCanDraw(false);
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dfs(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrderDfs(finishNode);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    const visualizeAStar = () => {
        if(!canDraw) return;
        setCanDraw(false);
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = astar(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrderAstar(finishNode);
        animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    const clearGrid = (clearWalls=false) => {
        setCanDraw(true);
        const newGrid = clearWalls ? getInitialGrid() : getInitialGridWithWalls(grid);
        setGrid(newGrid);
        for (let row = 0; row < GRID_ROWS; row++) {
            for (let col = 0; col < GRID_COLS; col++) {
                const node = document.getElementById(`node-${row}-${col}`);
                node.classList.remove('node-visited');
                node.classList.remove('node-shortest-path');
            }
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">Visualize Pathfinding Algorithm  
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <button onClick={() => visualizeDijkstra()}>
                            Dijkstra's Algorithm
                        </button>
                        <button onClick={() => visualizeBfs()}>
                            Breadth First Search
                        </button>
                        <button onClick={() => visualizeDfs()}>
                            Depth First Search
                        </button>
                        <button onClick={() => visualizeAStar()}>
                            A* Algorithm
                        </button>
                    </div>
                </div>
                <button className="clearButton" onClick={() => clearGrid()}>Clear Path</button>
                <button className="clearButton" onClick={() => clearGrid(true)}>Clear Path and Walls</button>
            </nav>
            <br />

            <div className="grid">
                {grid.map((row, rowIdx) => {
                    return (
                        <div key={rowIdx}>
                            {row.map((node, nodeIdx) => {
                                const { row, col, isFinish, isStart, isWall, isVisited } = node;
                                return (
                                    <Node
                                        key={nodeIdx}
                                        col={col}
                                        isFinish={isFinish}
                                        isStart={isStart}
                                        isWall={isWall}
                                        isVisited={isVisited}
                                        mouseIsPressed={mouseIsPressed}
                                        onMouseDown={(row, col) => handleMouseDown(row, col)}
                                        onMouseEnter={(row, col) =>
                                            handleMouseEnter(row, col)
                                        }
                                        onMouseUp={() => handleMouseUp()}
                                        row={row}></Node>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < GRID_ROWS; row++) {
        const currentRow = [];
        for (let col = 0; col < GRID_COLS; col++) {
            currentRow.push(createNode(col, row));
        }
        grid.push(currentRow);
    }
    return grid;
};

const createNode = (col, row, isWall = false) => {
    return {
        col,
        row,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall,
        previousNode: null,
    };
};

const getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
        ...node,
        isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
};

const getNewGridWithStartNodeToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[START_NODE_ROW][START_NODE_COL];
    const newNode = {
        ...node,
        isStart: false,
    };
    newGrid[START_NODE_ROW][START_NODE_COL] = newNode;

    START_NODE_COL = col;
    START_NODE_ROW = row;

    const node2 = newGrid[START_NODE_ROW][START_NODE_COL];
    const newNode2 = {
        ...node2,
        isStart: true,
        isWall: false,
    };
    newGrid[START_NODE_ROW][START_NODE_COL] = newNode2;

    return newGrid;
}

const getNewGridWithFinishNodeToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const newNode = {
        ...node,
        isFinish: false,
    };
    newGrid[FINISH_NODE_ROW][FINISH_NODE_COL] = newNode;

    FINISH_NODE_COL = col;
    FINISH_NODE_ROW = row;

    const node2 = newGrid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const newNode2 = {
        ...node2,
        isFinish: true,
        isWall: false,
    };
    newGrid[FINISH_NODE_ROW][FINISH_NODE_COL] = newNode2;

    return newGrid;
}

const getInitialGridWithWalls = (grid) => {
    const newGrid = [];
    var nodeIsWall = false;
    for (let row = 0; row < GRID_ROWS; row++) {
        const currentRow = [];
        for (let col = 0; col < GRID_COLS; col++) {
            nodeIsWall = grid[row][col].isWall
            currentRow.push(createNode(col, row, nodeIsWall));
        }
        newGrid.push(currentRow);
    }
    return newGrid;
};