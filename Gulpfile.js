/**
 * Gulpfile.js
 * Copyright © 2015 - Johnie Hjelm
 */

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./config/gulp/tasks', { recurse: true });
