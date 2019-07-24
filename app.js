//===============================================
// entry point for server

// https://timonweb.com/tutorials/how-to-enable-ecmascript-6-imports-in-nodejs/
// https://github.com/nodejs/modules/blob/master/doc/announcement.md
// https://medium.com/@jamischarles/using-import-export-in-node-js-with-esm-7ce9153ff63

require = require("esm")(module);
module.exports = require("./src/server/polka_server");