module.exports = {
  extension: ["ts", "tsx"],
  spec: "./src/__test__/**/*.spec.tsx",
  require: ["./scripts/mochaTestSetup.js", "ts-node/register", "@babel/register", "mocha-snapshots", "esm"]
};
