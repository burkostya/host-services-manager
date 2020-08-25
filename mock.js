exports.svStatusResult = `run: /etc/service/lipa: (pid 24328) 120420s; run: log: (pid 1023) 1935625s
down: /etc/service/lipa-api: 120037s, normally up; run: log: (pid 1352) 1935625s
run: /etc/service/lipa-workers: (pid 24329) 120420s; run: log: (pid 943) 1935625s
run: /etc/service/pipa: (pid 25191) 120419s; down: log: 0s, normally up, want up
finish: /etc/service/twapi-lira: (pid 3741) 115482s; run: log: (pid 1006) 1935625s`;

exports.svStartResult = 'ok: run: /etc/service/twapi-vas: (pid 32084) 0s';
exports.svStopResult = 'ok: run: /etc/service/twapi-vas: (pid 32084) 0s';
exports.svRestartResult = 'ok: run: /etc/service/twapi-vas: (pid 32084) 0s';
