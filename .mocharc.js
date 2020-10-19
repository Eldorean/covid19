module.exports = {
  extension: ["ts", "tsx"],
  spec: "./testing/**/*.spec.tsx",
  require: ["ts-node/register", "@babel/register", "mocha-snapshots"]
};
