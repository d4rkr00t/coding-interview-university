let inputs = [[4, [1, 2, 3]], [10, [2, 5, 3, 6]]];

inputs.forEach(i => {
  console.log(count(i[1], i[1].length - 1, i[0]));
  console.log("");
});

function count(coin, m, N, solutions = {}) {
  if (m < 0 && N > 0) return 0;
  if (N < 0) return 0;
  if (N === 0) return 1;
  if (!solutions[m]) {
    solutions[m] = {};
  }

  if (solutions[m][N]) {
    return solutions[m][N];
  }

  solutions[m][N] =
    count(coin, m - 1, N, solutions) + count(coin, m, N - coin[m], solutions);

  return solutions[m][N];
}
