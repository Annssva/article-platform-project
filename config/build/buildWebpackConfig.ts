import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry, // вход в приложение
    output: {
      filename: '[name].[contenthash].js', // название файла с рандомным флагом для отслеживания версий
      path: paths.build,
      clean: true, // чтобы лишнее удалять
    }, // куда и как мы будем делать сборку приложения
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
