# Kata description :

You have a cuboid with dimensions x,y,z.
$$
x,y,z ∈ ℕ.
$$

The values of x, y, and z are between 1 and 10<sup>9</sup>. 

A subcuboid of this cuboid has dimensions length, width, height.
$$
length ∈ ℕ, width ∈ ℕ,height ∈ ℕ
$$
$$
1≤length≤x, 1≤width≤y, 1≤height≤z
$$

If two subcuboids have the same length, width, and height, but they are at different positions within the cuboid, they are distinct. Find the total number of subcuboids for the given cuboid.

##### Examples :

See sample tests and the image below

***27 subcuboids for a 2×2×2 cuboid :***

![subcuboids(2,2,2)](https://i.imgur.com/3CnboOW.jpg)

🏷️ `PUZZLES` `MATHEMATICS` `ALGORITHMS` `NUMBERS` `GAMES` `PERFORMANCE`

### Kata test cases :

```js
const {assert} = require("chai");

describe("Fixed tests", function() {
  it("Tests", function() {
    let cases = [
      [[1n, 1n, 1n], 1n],
      [[2n, 2n, 2n], 27n],
      [[2n, 3n, 3n], 108n],
      [[4n, 5n, 6n], 3150n],
      [[3n, 7n, 11n], 11088n]
    ];
    for (let [input, expected] of cases) {
      let actual = subcuboids(...input);
      assert.strictEqual(actual, expected);
    }
  });
});

const {random} = require("lodash");
const reference = (w, h, d) => w * (w + 1n) * h * (h + 1n) * d * (d + 1n) / 8n;

describe("Random tests", function() {
  it("Tests", function() {
    for (let i = 0; i < 100; i++) {
      let x = BigInt(random(1, 1000000)),
          y = BigInt(random(1, 1000000)),
          z = BigInt(random(1, 1000000));
      assert.strictEqual(subcuboids(x, y, z), reference(x, y, z));
    }
  });
});
```
