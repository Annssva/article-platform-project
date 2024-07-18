type Mods = Record<string, boolean | string>;

// prettier-ignore
export function classnames(
  mainClass: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname]) => classname),
  ].join(' ');
}
