function parseDatetime(word) {
  const date = [
    word.substr(6, 2),
    word.substr(4, 2),
    word.substr(0, 4),
  ].join('.');

  const time = [
    word.substr(8, 2),
    word.substr(10, 2),
  ].join(':');

  return { date, time };
}

function parseLine(line) {
  const entry = {};

  const words = line.split(' ');

  words.forEach((word, index) => {
    if (index === 1) {
      entry.branch = word;
    }

    if (index === 3) {
      let rev = word;

      if (word.endsWith(')')) {
        rev = word.slice(0, -1);
      }

      entry.revision = {
        full: rev,
        short: rev.slice(0, 8),
      };
    }

    if (index === 7) {
      ({ date: entry.date, time: entry.time } = parseDatetime(word));
    }
  });

  return entry;
}

/**
 * Parses revisions.log file to entries with branch, revision, date and time
 * @param  {string} content - content of revisions.log
 */
function parse(content) {
  const lines = content.split('\n').filter(Boolean);
  if (lines.length === 0) {
    return [];
  }

  return lines.map(line => parseLine(line));
}

exports.parse = parse;
