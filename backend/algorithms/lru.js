export default function lru(pages, frameCount) {
  let frames = [];
  let steps = [];
  let faults = 0;
  let hits = 0;

  pages.forEach((page, i) => {
    let fault = false;

    if (!frames.includes(page)) {
      fault = true;
      faults++;

      if (frames.length < frameCount) {
        frames.push(page);
      } else {
        frames.shift(); // remove least recently used
        frames.push(page);
      }
    } else {
      hits++;
      frames = frames.filter(p => p !== page);
      frames.push(page);
    }

    const display = [...frames];
    while (display.length < frameCount) display.unshift(null);

    steps.push({
      step: i + 1,
      page,
      frames: display,
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