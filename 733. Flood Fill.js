const imageChange = (image, sr, sc, color, srcColor) => {
  if (image[sr][sc] === srcColor && color !== srcColor) image[sr][sc] = color;
  if (color === srcColor) return;

  // Y
  if (sr < image.length - 1 && image[sr + 1][sc] === srcColor)
    imageChange(image, sr + 1, sc, color, srcColor);
  if (sr > 0 && image[sr - 1][sc] === srcColor) imageChange(image, sr - 1, sc, color, srcColor);
  // X
  if (sc > 0 && image[sr][sc - 1] === srcColor) imageChange(image, sr, sc - 1, color, srcColor);
  if (sc < image[sr].length - 1 && image[sr][sc + 1] === srcColor)
    imageChange(image, sr, sc + 1, color, srcColor);
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const srcColor = image[sr][sc];
  imageChange(image, sr, sc, color, srcColor);
  return image;
};

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
);
