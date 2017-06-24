# this part is to install babel-loader
# babel-loader is a plugin to make babel work with webpack
yarn add babel-loader babel-core babel-preset-env webpack --dev

# i have no idea what these do
yarn add webpack-node-externals start-server-webpack-plugin --dev

touch .babelrc
echo '{' > .babelrc
echo '  "presets": [["env", {"modules": false}]]' >> .babelrc
echo '}' >> .babelrc

# add express
yarn add express

# to start server do
# yarn start:server
# yarn start server is defined in package.json
