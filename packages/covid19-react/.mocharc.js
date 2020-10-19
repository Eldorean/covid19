module.exports = {
  extension: ["ts", "tsx"],
  spec: "./**/*.spec.tsx",
  require: ["ts-node/register", "@babel/register", "mocha-snapshots", "esm"]
};
