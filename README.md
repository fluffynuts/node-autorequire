# node-autorequire
A little module to facilitate easier require() calls

## usage

instead of doing a bunch of npm install --save {package} calls, just do one:

npm install --save node-autorequire

Then, in any script do:

const autoRequire = require('node-autorequire')(),
  someDep = autoRequire('some-dependency');
  
Now, when you run your master script, if some-dependency isn't found, it's installed and then returned back to the calling script, synchronously.
  
## Why call it as a function?
The node-autorequire export is a generator function. You call it to get a 'require-like' function. Without any arguments, packages are just installed, nothing more. You can configure to --save-dev by providing { saveDev: true } or --save with { save: true }. Normally, I find that this works well -- production code always wants a save and test code always wants a saveDev.

## YMMV
