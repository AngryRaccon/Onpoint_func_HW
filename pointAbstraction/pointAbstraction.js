const makePoint = (x, y) => {
  let coords = { x: x, y: y };
  return coords;
};

const getX = (point) => {
  return point.x;
};

const getY = (point) => {
  return point.y;
};

const toString = (point) => {
  return `[${point.x}, ${point.y}]`;
};

const getDistance = (point1, point2) => {
  return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
};

const getQuadrant = (point) => {
  const x = point.x;
  const y = point.y;
  if (x * y > 0) {
    if (x > 0) {
      return 1;
    } else {
      return 3;
    }
  } else if (x * y < 0) {
    if (x > 0) {
      return 4;
    } else {
      return 2;
    }
  } else {
    return null;
  }
};

module.exports = {
  makePoint,
  getX,
  getY,
  toString,
  getDistance,
  getQuadrant
};
