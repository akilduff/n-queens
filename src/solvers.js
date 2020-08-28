/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var myBoard = new Board({'n': n});

  var findSolutions = function(row) {
    if (row === 0) {
      solution = [];
      for (var i = 0; i < n; i++) {
        solveRow = (myBoard.attributes[i]).slice();
        solution.push(solveRow);
      }
      return;
    }

    for (var col = 0; col < n; col++) {
      myBoard.togglePiece(row - 1, col);
      var conflicts = myBoard.hasAnyRooksConflicts();
      if (!conflicts) {
        findSolutions(row - 1);
      }
      myBoard.togglePiece(row - 1, col);
    }

  };

  findSolutions(n);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var myBoard = new Board({'n': n});
  var solutionCount = 0;

  var findSolutions = function(row) {

    // console.log('ROW: ', row);
    // if now more rows remain,
    if (row === 0) {
      solutionCount++;
      return;
    }

    for (var col = 0; col < n; col++) {
      myBoard.togglePiece(row - 1, col);
      var conflicts = myBoard.hasAnyRooksConflicts();
      if (!conflicts) {
        findSolutions(row - 1);
      }
      myBoard.togglePiece(row - 1, col);
    }

  };

  findSolutions(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var myBoard = new Board({'n': n});
  if (n === 2) {
    solution = [[0, 0], [0, 0]];
  }
  if (n === 3) {
    solution = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  }
  var findSolutions = function(row) {
    if (row === 0) {
      solution = [];
      for (var i = 0; i < n; i++) {
        solveRow = (myBoard.attributes[i]).slice();
        solution.push(solveRow);
      }
      return;
    }
    for (var col = 0; col < n; col++) {
      myBoard.togglePiece(row - 1, col);
      var conflicts = myBoard.hasAnyQueensConflicts();
      if (!conflicts) {
        findSolutions(row - 1);
      }
      myBoard.togglePiece(row - 1, col);
    }
  };

  findSolutions(n);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var myBoard = new Board({'n': n});
  var solutionCount = 0; //fixme

  var findSolutions = function(row) {
    if (row === 0) {
      solutionCount++;
      return;
    }

    for (var col = 0; col < n; col++) {
      myBoard.togglePiece(row - 1, col);
      var conflicts = myBoard.hasAnyQueensConflicts();
      if (!conflicts) {
        findSolutions(row - 1);
      }
      myBoard.togglePiece(row - 1, col);
    }
  };

  findSolutions(n);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
