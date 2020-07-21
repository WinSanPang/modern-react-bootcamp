import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };

  state = {
    hasWon: false,
    board: this.createBoard()
  }

  createBoard() {
    let board = [];
    
    for(let y=0; y < this.props.nrows; y++) {
      let row = [];
      for(let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround = (coord) => {

    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x); //Flip clicked cell
    flipCell(y, x - 1); //Flip left cell
    flipCell(y, x + 1); //Flip right cell
    flipCell(y - 1, x); //Flip below cell
    flipCell(y + 1, x); //Flip above cell
    

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board: board, hasWon: hasWon});
  }


  /** Render game board or winning message. */

  render() {
    if (this.state.hasWon) {
      tableBoard = (
        <div className='Board-title'>
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
          </div>
      </div>
      )
    }

    let tableBoard = [];
    for(let y = 0; y < this.props.nrows; y++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        let coord = `${y}-${x}`
        row.push(
          <Cell 
            key={coord} 
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}/>)
      }
      tableBoard.push(<tr key={y}>{row}</tr>)
    }
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO

    return (
      <div>
        <div className='Board-title'>
          <div className='neon-orange'>LIGHTS</div>
          <div className='neon-blue'>OUT</div>
        </div>
        <table className='Board'>
          <tbody>
            {tableBoard}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Board;
