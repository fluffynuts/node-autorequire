console.log('auto-require include');
const childProcess = require('child_process');
function autoRequireGenerator(options) {
    if (typeof(options) === typeof('')) {
        throw 'node-autorequire returns a generator function. Please call that function to get an autoRequire() function. You may also specify an object of options with one or more of save (boolean) or saveDev (boolean) which determine whether or not to save auto-required deps';
    }
    options = options || {};
    return function(module) {
        try {
            return require(module);
        } catch (e) {
            console.log('installing dependency: ' + module);
            var cmd = ['npm install'];
            if (options.saveDev) {
                cmd.push('--save-dev');
            } else if (options.save) {
                cmd.push('--save');
            }
            cmd.push(module);
            childProcess.execSync(cmd.join(' '));
            return require(module);
        }
    }
}

module.exports = autoRequireGenerator;

