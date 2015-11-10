/*
 * Copyright (c) 2015, Jaime Blazquez del Hierro
 * Licensed under BSD 2-Clause license
 * See LICENSE.md file for details
 */

var fs = require('fs');
var path = require('path');

var expect = require('chai').expect;

var Q = require('q');

// assert -> N/A
// buffer -> N/A

describe.skip('child_process', function() {
    // Direct
    it('exec()');
    it('execFile()');

    // Indirect
    it('ChildProcess.send()');
    it('spawn()');
    it('fork()');
});

describe.skip('cluster', function() {
    // Direct
    it('disconnect()');

    // Indirect
    it('Worker.send()');
    it('fork()');
    it('.worker');
});

// console -> N/A

describe.skip('crypto', function() {
    // Direct
    it('pbkdf2');
    it('randomBytes');

    // Indirect -> N/A
});

describe.skip('dns', function() {
    // Direct
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

    // Indirect --> N/A
});

describe.skip('domain', function() {
    // Direct --> N/A
    // Indirect
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

    // Direct
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

    it('ftruncate [OK]', function() {
        // preconditions
        fs.writeFileSync(sampleFile1Path, sampleFile1Content, 'UTF8');
        var dfd = Q.defer();
        fs.open(sampleFile1Path,'w+', function(err, fd) {
            if(err) {
                dfd.reject(err);
            } else {
                qfs.ftruncate(fd, 10).then( // test
                    function() {
                        fs.close(fd, function(err) {
                            if(err) {
                                fs.unlinkSync(sampleFile1Path);
                                dfd.reject(err);
                            } else {
                                var fsInfo = fs.statSync(sampleFile1Path);
                                try {
                                    fs.unlinkSync(sampleFile1Path);
                                    expect(fsInfo.size).to.equal(10);
                                    dfd.resolve();
                                } catch(err) {
                                    fs.unlinkSync(sampleFile1Path);
                                    dfd.reject(err);
                                }

                            }
                        });
                    },
                    function(err) {
                        fs.unlinkSync(sampleFile1Path);
                        dfd.reject(err);
                    }
                ).done();
            }
        });

        return dfd.promise;
    });

    it('ftruncate [KO]');

    it('truncate [OK]', function() {
        fs.writeFileSync(sampleFile1Path, sampleFile1Content, 'UTF8');
        return qfs.truncate(sampleFile1Path, 10).then(
            function() {
                var stats = fs.statSync(sampleFile1Path);
                expect(stats.size).to.equal(10);
            }
        ).fin(function() {
            fs.unlinkSync(sampleFile1Path);
        });
    });

    it('truncate [KO]', function() {
        return qfs.truncate(sampleFile1Path, 10).then(
            function() {
                throw new Error('truncate [KO] shouldn\'t succedd');
            },
            function() {
                return true;
            }
        );
    });

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

    it('readFile [OK]', function() {
        // precondition
        fs.writeFileSync(sampleFile1Path, sampleFile1Content, 'UTF8');
        // test
        return qfs.readFile(sampleFile1Path, 'UTF8').then(
            function(data) {
                expect(data).to.equal(sampleFile1Content);
            }
        ).fin(
            function() {
                fs.unlinkSync(sampleFile1Path);
            }
        )
    });

    it('writeFile');

    it('appendFile');
    it('exists');
    it('access');

    // Indirect -> N/A
});

describe('globals', function() {
    // Direct
    it('setTimeout');
    it('setInmediate');

    // Indirect -> N/A
});

describe('http', function() {
    // Direct
    it('request');
    it('get');

    // Indirect
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
    // Direct
    it('request');
    it('get');

    // Indirect
    it('Server (inherits tls.Server & events from http.Server)');
    it('createServer (->Server)');
    it('request (->ClientRequest');
});

describe('net', function() {
    // Direct -> N/A
    // Indirect
    it('createServer (->Server), (connect,createConnection) (3 versions) (->Socket), Server.listen (4 versions), Server.close, Server.getConnections, Socket new (->Socket), Socket.connect?, Socket.write');
});

// os -> N/A
// path -> N/A

describe('process', function() {
    // Direct
    it('nextTick');
    it('send');

    // Indirect
});

// punycode -> N/A
// querystring -> N/A

describe('readline', function() {
    // Direct -> N/A
    // Indirect
    it('createInterface (->Interface)');
    it('Interface.question');
});

// repl -> N/A

describe('stream', function() {
    // Direct -> N/A
    // Indirect
    it('Writeable.write');
    it('Duplex (inherits Writeable)');
    it('Transform (inherits Duplex -> Writeable)');
    it('news');
});

// stringdecoder -> N/A

describe('tls', function() {
    // Direct -> N/A
    it('connect (2 versions)');

    // Indirect
    it('Server.listen');
    it('Server.close');
    it('TLSSocket.renegotiate');
});

// tty -> N/A

describe('dgram', function() {
    // Direct -> N/A
    it('createSocket (2 versions)');

    // Indirect
    it('Socket.send');
    it('Socket.bind (2 versions)');
    it('socket.close');
});

// url

describe('util', function() {
    // Direct -> N/A
    it('pump');
    // Indirect
});

// v8
// vm

describe('zlib', function() {
    // Direct -> N/A
    it('deflate');
    it('deflateRaw');
    it('gzip');
    it('gunzip');
    it('inflate');
    it('inflateRaw');
    it('deflate');
    it('unzip');

    // Indirect -> N/A
    it('Zlib.flush');
    it('Zlib.params');
});
