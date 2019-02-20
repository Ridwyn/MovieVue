"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"98304107da83574cdac9140d458dce3d"'
});
