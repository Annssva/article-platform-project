type Mods = Record<string, boolean | string>
const obj: Mods = {

}
export function classnames(mainClass: string, mods: Mods, additional: string[]): string {
  return [
    mainClass,
    ...additional,
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname]) => classname)
  ].join(' ');
}