import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // для них не надо будет писать расширение файлов при импорте
  }
}