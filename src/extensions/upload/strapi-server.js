module.exports = (plugin) => {
  plugin.contentTypes.file.schema.attributes.name.column = {
    type: "varchar",
    args: [500],
  };
  plugin.contentTypes.file.schema.attributes.url.column = {
    type: "varchar",
    args: [500],
  };
  plugin.contentTypes.file.schema.attributes.previewUrl.column = {
    type: "varchar",
    args: [500],
  };

  return plugin;
};
