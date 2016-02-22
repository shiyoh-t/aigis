module.exports = {
  DEFAULT_OPTIONS: require('./src/default_options'),
  SUPPORT_FILE_TYPE: require('./src/support_file_type'),
  configLoader: require('./src/config_loader'),
  configParser: require('./src/config_parser'),
  pluginLoader: require('./src/plugin_loader'),
  pluginRegister: require('./src/plugin_register'),
  collector: require('./src/collector'),
  getRoot: require('./src/get_root'),
  timestamp: require('./src/timestamp'),
  assetsManager: require('./src/assets_manager')
};
