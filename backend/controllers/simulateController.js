import fifo from '../algorithms/fifo.js';
import lru from '../algorithms/lru.js';
import optimal from '../algorithms/optimal.js';

export const simulate = (req, res) => {
  try {
    const { pages, frames, algorithm } = req.body;

    // Validation
    if (!Array.isArray(pages) || pages.length === 0)
      return res.status(400).json({ error: 'Invalid pages array' });

    if (!frames || frames <= 0)
      return res.status(400).json({ error: 'Frames must be > 0' });

    let result;

    switch (algorithm) {
      case 'FIFO':
        result = fifo(pages, frames);
        break;
      case 'LRU':
        result = lru(pages, frames);
        break;
      case 'Optimal':
        result = optimal(pages, frames);
        break;
      default:
        return res.status(400).json({ error: 'Invalid algorithm' });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};