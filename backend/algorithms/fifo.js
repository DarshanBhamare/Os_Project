export default function fifo(pages, frameCount) {
  let frames = Array(frameCount).fill(null);
  let queue = [];
  let steps = [];
  let faults = 0;
  let hits = 0;

  pages.forEach((page, i) => {
    let fault = false;

    if (!frames.includes(page)) {
      fault = true;
      faults++;

      if (queue.length < frameCount) {
        frames[queue.length] = page;
        queue.push(page);
      } else {
        const removed = queue.shift();
        const index = frames.indexOf(removed);
        frames[index] = page;
        queue.push(page);
      }
    } else {
      hits++;
    }

    steps.push({
      step: i + 1,
      page,
      frames: [...frames],
      fault
    });
  });

  return {
    steps,
    totalFaults: faults,
    hits,
    hitRatio: hits / pages.length
  };
}