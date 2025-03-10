///tuplas y tipos

type CellValue = "X" | "O" | '';

type Board = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: Board = [
    ["X", "O", ""],
    ["X", "O", ""],
    ["X", "O", ""]
]

//otro ejemplo de tuplas

type RGB = [number, number, number];

const color: RGB = [255, 0, 0];