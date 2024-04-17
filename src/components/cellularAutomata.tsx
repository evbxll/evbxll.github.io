import React, { useEffect, useRef, useState } from 'react';

const CellAuto: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cols = 30
    const [grid, setGrid] = useState<number[][]>([]);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const resizeHandler = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.parentElement?.getBoundingClientRect();
        if (!rect) return;

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        updateGrid();
        drawGrid();
    };

    const updateGrid = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rows = Math.floor(cols * canvas.height / canvas.width );
        const newGrid: number[][] = [];
        for (let i = 0; i < cols; i++) {
            newGrid[i] = [];
            for (let j = 0; j < rows; j++) {
                newGrid[i][j] = grid[i]?.[j] || 0;
            }
        }
        setGrid(newGrid);
        updateNeighbors(newGrid);
    };

    const updateNeighbors = (updatedGrid: number[][]) => {
        const cols = updatedGrid.length;
        const rows = updatedGrid[0].length;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let count = 0;
                for (let ii = -1; ii <= 1; ii++) {
                    for (let jj = -1; jj <= 1; jj++) {
                        if (ii === 0 && jj === 0) continue; // Skip the current cell
                        const x = i + ii;
                        const y = j + jj;
                        if (x >= 0 && x < cols && y >= 0 && y < rows && updatedGrid[x][y] === 1) {
                            count++;
                        }
                    }
                }
                if (updatedGrid[i][j] === 1 && (count < 2 || count > 3)) {
                    updatedGrid[i][j] = 0; // Any live cell with fewer than two live neighbors dies, as if by underpopulation. Any live cell with more than three live neighbors dies, as if by overpopulation.
                } else if (updatedGrid[i][j] === 0 && count === 3) {
                    updatedGrid[i][j] = 1; // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                }
            }
        }
    };

    const drawGrid = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const cellSize = Math.floor(canvas.width / cols)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        for (let i = 0; i <= canvas.width; i += cellSize) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        for (let j = 0; j <= canvas.height; j += cellSize) {
            ctx.beginPath();
            ctx.moveTo(0, j);
            ctx.lineTo(canvas.width, j);
            ctx.stroke();
        }
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                ctx.fillStyle = grid[i][j] === 1 ? 'lightblue' : 'white';
                ctx.fillRect(i * cellSize + 1, j * cellSize + 1, cellSize - 1, cellSize - 1);
            }
        }
    };

    useEffect(() => {
        resizeHandler(); // Initial setup
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    useEffect(() => {
        // Delay the updateGrid function call by 1 second
        const timeoutId = setTimeout(() => {
            updateGrid();
            drawGrid();
        }, 400);
        
        return () => {
            clearTimeout(timeoutId);
        };
    }, [grid]); // Add grid as a dependency

    const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isMouseDown) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const cellSize = Math.floor(canvas.width / cols)
        const col = Math.floor(mouseX / cellSize);
        const row = Math.floor(mouseY / cellSize);

        // Define the radius of the cells to be randomly changed
        const radius = 2;

        // Randomly change the state of cells within the radius
        const newGrid = [...grid];
        for (let i = -radius; i <= radius; i++) {
            for (let j = -radius; j <= radius; j++) {
                const x = col + i;
                const y = row + j;
                if (x >= 0 && x < newGrid.length && y >= 0 && y < newGrid[x].length) {
                    newGrid[x][y] = Math.random() > 0.5 ? 1 : 0; // Randomly set to 1 or 0
                }
            }
        }

        setGrid(newGrid);
        drawGrid();
    };

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ width: '100%', height: '100%', display: 'block' }}
        />
    );
};

export default CellAuto;
