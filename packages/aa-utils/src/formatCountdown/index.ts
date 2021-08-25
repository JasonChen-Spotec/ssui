import padStart from 'lodash/padStart';

// Countdown
const timeUnits: [string, number][] = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];

export function formatTimeStr(duration: number, format: string) {
  let leftDuration: number = duration;

  const escapeRegex = /\[[^\]]*]/g;
  const keepList = (format.match(escapeRegex) || []).map((str) => str.slice(1, -1));
  const templateText = format.replace(escapeRegex, '[]');

  const replacedText = timeUnits.reduce((current, [name, unit]) => {
    if (current.indexOf(name) !== -1) {
      const value = Math.floor(leftDuration / unit);
      leftDuration -= value * unit;
      return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
        const len = match.length;
        return padStart(value.toString(), len, '0');
      });
    }
    return current;
  }, templateText);

  let index = 0;
  return replacedText.replace(escapeRegex, () => {
    const match = keepList[index];
    index += 1;
    return match;
  });
}

export default function formatCountdown(target: number, format: string) {
  const diff = Math.max(target, 0);

  return formatTimeStr(diff, format);
}
