const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                mfeReact: "mfeParent@http://localhost:5173/dist/assets/remoteEntry.js",
            },
        }),
    ],
};
