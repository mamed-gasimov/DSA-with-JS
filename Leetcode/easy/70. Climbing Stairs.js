// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// We can use Fibonacci sequence to solve this problem

function climbStairs(n) {
  let one = 1;
  let two = 1;

  for (let i = 1; i < n; i++) {
    let temp = one;
    one += two;
    two = temp;
  }

  return one;
}

console.log(climbStairs(5));
