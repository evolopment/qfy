/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var fs = require('fs');
var path = require('path');

var expect = require('chai').expect;

// assert -> N/A
// buffer -> N/A

describe.skip('child_process', function() {
    // Level 1
    it('exec()');
    it('execFile()');

    // Level 2
    it('ChildProcess.send()');
    it('spawn()');
    it('fork()');
});

describe.skip('cluster', function() {
    // Level 1
    it('disconnect()');

    // Level 2
    it('Worker.send()');
    it('fork()');
    it('.worker');
});

// console -> N/A

describe.skip('crypto', function() {
    // Level 1
    it('pbkdf2');
    it('randomBytes');

    // Level 2 -> N/A
});

describe.skip('dns', function() {
    // Level 1
    it('lookup');
    it('lookupService');
    it('resolve');
    it('resolve4');
    it('resolve6');
    it('resolveMx');
    it('resolveTxt');
    it('resolveSrv');
    it('resolveSoa');
    it('resolveNs');
    it('resolveCname');
    it('reverse');

    // Level 2 --> N/A
});

describe.skip('domain', function() {
    // Level 1 --> N/A
    // Level 2
    it('Domain.bind');
    it('Domain.intercept');
    it('create');
});

// Events -> N/A

describe('fs', function() {

    var qfs = require('../fs');
    var tmp = path.join(path.dirname(module.filename), '..', 'tmp', 'test');
    var sampleFile1Path = path.join(tmp, 'aFile.txt');
    var sampleFile2Path = path.join(tmp, 'anotherFile.txt');
    var sampleFile1Content = 'Hi from QFY!';

    // Level 1
    it('rename [OK]', function() {
        // preconditions
        fs.writeFileSync(sampleFile1Path, sampleFile1Content, 'UTF8');

        // test
        return qfs.rename(sampleFile1Path, sampleFile2Path).then(
            function() {
                var content = fs.readFileSync(sampleFile2Path, 'UTF8');
                expect(content).to.be.equal('Hi from QFY!');
                fs.unlinkSync(sampleFile2Path);
            }
        );
    });

    it('rename [KO]', function() {
        // preconditions
        try {
            fs.unlinkSync(sampleFile1Path);
        } catch(e) {}

        // test
        return qfs.rename(sampleFile1Path, sampleFile2Path).then(
            function() {
                throw new Error('rename [KO] shouldn\' succeed');
            },
            function() { return true; }
        );
    });

    it('ftruncate', function() {
        // preconditions
        fs.writeFileSync(sampleFile1Path, sampleFile1Content, 'UTF8');
        var dfd = Q.defer();
        fs.open('')

        return dfd.promise();
    });


    it('truncate');
    it('chown');
    it('fchown');
    it('lchown');
    it('chmod');
    it('fchmod');
    it('lchmod');
    it('stat');
    it('lstat');
    it('fstat');
    it('link');
    it('symlink');
    it('readlink');
    it('realpath');
    it('unlink');
    it('rmdir');
    it('mkdir');
    it('readdir');
    it('close');
    it('open');
    it('utimes');
    it('futimes');
    it('fsync');
    it('write (2 versions)');
    it('read');
    it('readFile');
    it('writeFile');
    it('appendFile');
    it('exists');
    it('access');

    // Level 2 -> N/A
});

describe('globals', function() {
    // Level 1
    it('setTimeout');
    it('setInmediate');

    // Level 2 -> N/A
});

describe('http', function() {
    // Level 1
    it('request');
    it('get');

    // Level 2
    it('Server.listen (3 versions)');
    it('Server.close');
    it('Server.request event');
    it('ServerResponse.write');
    it('ServerResponse.end');
    it('ClientRequest.write');
    it('ClientRequest.end');
    it('createServer (->Server)');
    it('createClient (->ClientRequest)');
    it('request (->ClientRequest)');
});

describe('https', function() {
    // Level 1
    it('request');
    it('get');

    // Level 2
    it('Server (inherits tls.Server & events from http.Server)');
    it('createServer (->Server)');
    it('request (->ClientRequest');
});

describe('net', function() {
    // Level 1 -> N/A
    // Level 2
    it('createServer (->Server), (connect,createConnection) (3 versions) (->Socket), Server.listen (4 versions), Server.close, Server.getConnections, Socket new (->Socket), Socket.connect?, Socket.write');
});

// os -> N/A
// path -> N/A

describe('process', function() {
    // Level 1
    it('nextTick');
    it('send');

    // Level 2
});

// punycode -> N/A
// querystring -> N/A

describe('readline', function() {
    // Level 1 -> N/A
    // Level 2
    it('createInterface (->Interface)');
    it('Interface.question');
});

// repl -> N/A

describe('stream', function() {
    // Level 1 -> N/A
    // Level 2
    it('Writeable.write');
    it('Duplex (inherits Writeable)');
    it('Transform (inherits Duplex -> Writeable)');
    it('news');
});

// stringdecoder -> N/A

describe('tls', function() {
    // Level 1 -> N/A
    it('connect (2 versions)');

    // Level 2
    it('Server.listen');
    it('Server.close');
    it('TLSSocket.renegotiate');
});

// tty -> N/A

describe('dgram', function() {
    // Level 1 -> N/A
    it('createSocket (2 versions)');

    // Level 2
    it('Socket.send');
    it('Socket.bind (2 versions)');
    it('socket.close');
});

// url

describe('util', function() {
    // Level 1 -> N/A
    it('pump');
    // Level 2
});

// v8
// vm

describe('zlib', function() {
    // Level 1 -> N/A
    it('deflate');
    it('deflateRaw');
    it('gzip');
    it('gunzip');
    it('inflate');
    it('inflateRaw');
    it('deflate');
    it('unzip');

    // Level 2 -> N/A
    it('Zlib.flush');
    it('Zlib.params');
});
