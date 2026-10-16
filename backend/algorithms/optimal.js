export default function optimal(pages, frameCount) {
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
        let farthest = -1;
        let indexToReplace = -1;

        frames.forEach((f, idx) => {
          let nextUse = pages.slice(i + 1).indexOf(f);
          if (nextUse === -1) {
            indexToReplace = idx;
            return;
          }
          if (nextUse > farthest) {
            farthest = nextUse;
            indexToReplace = idx;
          }
        });

        frames[indexToReplace] = page;
      }
    } else {
      hits++;
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
