/**
 * Replace < and > in the markdown with &lt; and &gt;,
 * EXCEPT in _code_ segments.
 *
 * @param {string} md - Markdown input string
 */
export function cleanupMarkdown(md) {
  // split at code segments
  const split = md.split('`');

  let cleanMd = '';

  for (let i = 0; i < split.length; i += 1) {
    const segment = split[i];

    // In a proper markdown (all code segments are "closed")
    // the code segments will be odd-indexed, therefore clean
    // only even-indexed segments
    if (i % 2 === 0) {
      cleanMd += segment.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    } else {
      cleanMd += `\`${segment}\``;
    }
  }

  return cleanMd;
}
