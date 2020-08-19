export function add(a, b) {
  return a + b;
}

export async function timer(timeMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("success!"), timeMs);
  });
}

export function loop(callback, loopNum) {
  for (let i = 0; i < loopNum; i++) {
    callback(i);
  }
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

