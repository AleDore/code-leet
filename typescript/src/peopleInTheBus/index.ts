export const number = (busStops: [number, number][]) =>
  busStops.reduce((acc, curr) => (acc = acc + curr[0] - curr[1]), 0);
