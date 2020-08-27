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
  var solution = undefined; //fixme
  if (n === 1) {
    solution = [[1]];
    return solution;
  }
  var toggleCounter = n;
  var output = [];
  // for (var i = 0; i < n; i++) {
  // myBoard.togglePiece(0, );
  //   toggleCounter--
  //   for (var j = 1; j < n; j++) {
  //     myBoard.togglePiece(i, j);
  //     toggleCounter--
  //     var conflicts = myBoard.hasAnyRooksConflicts();
  //     if (!conflicts) {
  //       for (var k = 0; k < n; k++) {
  //         output.push(myBoard.attributes[i]);
  //       }
  //       solution = output;
  //     } else {
  //     myBoard.togglePiece(i, j);
  //     toggleCounter++
  //     }

  myBoard.togglePiece(1, 0);
  var conflicts = myBoard.hasAnyRooksConflicts();
  if (!conflicts) {
    for (var i = 0; i < n; i++) {
      output.push(myBoard.attributes[i]);
    }
    solution = output;
    console.log('solution for n=2', solution);
  } else {
    myBoard.togglePiece(1, 0);
  }

  myBoard.togglePiece(1, 1);
  var conflicts = myBoard.hasAnyRooksConflicts();
  if (!conflicts) {
    for (var i = 0; i < n; i++) {
      output.push(myBoard.attributes[i]);
    }
    solution = output;
    console.log('solution for n=2', solution);
  } else {
    myBoard.togglePiece(1, 1);
  }

  console.log('this is a solution', solution, 'typeof solution', Array.isArray(solution));
  // at the beginning, toggle 0,0
  // then toggle 0,1
  //   now, run row conflicts and column conflicts
  //   if either of those come back TRUE
  //   if all false solution ++
  //   toggle off 0,1
  // then toggle 1,1

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var myBoard = new Board({'n': n});
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var myBoard = new Board({'n': n});
  var solution = undefined; //fixme
  console.log('this our board', myBoard);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var myBoard = new Board({'n': n});
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
