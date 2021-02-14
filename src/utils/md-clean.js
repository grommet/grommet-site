/**
 * Replace < and > in the markdown with &lt; and &gt;,
 * EXCEPT in _code_ segments.
 *
 * @param {string} md - Markdown input string
 */
export function cleanupMarkdown(md) {
  // split at code segments
  const split = md.split('`');

  // If the markdown string starts with a code segment, clean all odd-indexed segments,
  // otherwise clean all even-indexed segments
  const needsCleanup =
    md[0] === '`' ? index => index % 2 : index => index % 2 === 0;

  let cleanMd = '';

  for (let i = 0; i < split.length; i += 1) {
    const segment = split[i];

    if (needsCleanup(i)) {
      cleanMd += segment.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    } else {
      cleanMd += `\`${segment}\``;
    }
  }

  return cleanMd;
}
