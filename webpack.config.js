
const MyPlugin = require('./plugins/my-plugin.js');
const ZipPlugin = require('./plugins/zip-plugin.js');

module.exports = {
    plugins: [
        new MyPlugin({
            name: 'myPlugin'
        }),

        new ZipPlugin({
            filename: 'zipPlugin'
        })
    ]
};
