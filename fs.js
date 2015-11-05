/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var fs = require('fs');
var qfy = require('./lib/qfy-common');

qfy.module(fs, {
    functions: [
        'rename',
        'ftruncate', 'truncate',
        'chown', 'fchown', 'lchown',
        'chmod', 'fchmod', 'lchmod',
        'stat', 'lstat', 'fstat',
        'link', 'symlink', 'readlink', 'realpath', 'unlink',
        'rmdir', 'mkdir', 'readdir',
        'close', 'open',
        'utimes', 'futimes',
        'fsync',
        'write', 'read', 'readFile', 'writeFile', 'appendFile',
        'exists',
        'access'
    ]
}, exports);
