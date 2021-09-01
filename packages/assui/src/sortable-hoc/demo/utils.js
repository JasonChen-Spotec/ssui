import range from 'lodash/range';
import random from 'lodash/random';

export default function getItems(count, height) {
  const heights = [65, 110, 140, 65, 90, 65];
  return range(count).map((value) => ({
    value,
    height: height == null ? heights[random(0, heights.length - 1)] : height,
  }));
}
