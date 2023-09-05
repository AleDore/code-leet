export function trap(height: number[]): number {
  let rainWater = 0;
  let absoluteTmpUpperWall = 0;
  let tmpUpperWall = 0;
  let tmpRain = 0;
  height.reduce((prev, curr, idx) => {
    console.log(
      `absoluteTmpUpperWall=${absoluteTmpUpperWall}, tmpUpperWall=${tmpUpperWall}, curr=${curr}, prev=${prev}, tmpRain=${tmpRain}, rainWater=${rainWater}`
    );
    if (prev > curr) {
      tmpUpperWall = tmpUpperWall < curr ? curr : tmpUpperWall;
      tmpRain += curr - prev;
    }

    // if (curr >= absoluteTmpUpperWall) {
    //   absoluteTmpUpperWall = curr;
    //   rainWater += tmpRain;
    //   tmpRain = 0;
    // } else {
    //   tmpRain += tmpUpperWall - curr;
    //   if (idx === height.length - 1 && curr > prev) rainWater += curr - prev;
    // }
    // tmpUpperWall = prev >= curr ? prev : curr;

    return curr;
  }, 0);
  return rainWater;
}
