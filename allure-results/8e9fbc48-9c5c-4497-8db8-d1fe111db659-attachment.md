# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Functional Testing >> TC-01: Displays the login page heading
- Location: tests/login.spec.js:14:3

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

<launching> /Users/mbrohith/Library/Caches/ms-playwright/firefox-1532/firefox/Nightly.app/Contents/MacOS/firefox -no-remote -wait-for-browser -foreground -profile /Users/mbrohith/.vscode/tmp/tmp_vscode_2/playwright_firefoxdev_profile-YbKu1X -juggler-pipe -silent
<launched> pid=3897
[pid=3897][err] Failed to check for translation environment
[pid=3897][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 119: unreachable code after return statement
[pid=3897][err] Failed to check for translation environment
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch gpu subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: GPU proc launch error bootstrap_check_in 1100 (t=2.30441) [GFX1-]: GPU proc launch error bootstrap_check_in 1100
[pid=3897][err] 2026-08-11 15:01:14.416 firefox[3897:39898] Connection Invalid error for service com.apple.hiservices-xpcservice.
[pid=3897][err] 2026-08-11 15:01:14.416 firefox[3897:39743] Error received in message reply handler: Connection invalid
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch socket subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][err] 2026-08-11 15:01:14.463 firefox[3897:39743] +[NSXPCSharedListener endpointForReply:withListenerName:replyErrorCode:]: an error occurred while attempting to obtain endpoint for listener 'ClientCallsAuxiliary': Connection invalid
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
[pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
[pid=3897][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
[pid=3897][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
[pid=3897][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
[pid=3897][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
[pid=3897][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
[pid=3897][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
[pid=3897][err] 2026-08-11 15:01:14.676 firefox[3897:39743] Error received in message reply handler: Connection invalid
[pid=3897][err] JavaScript warning: resource://gre/modules/UpdateService.sys.mjs, line 4029: unreachable code after return statement
[pid=3897] <process did exit: exitCode=null, signal=SIGTERM>
[pid=3897] starting temporary directories cleanup
Call log:
  - <launching> /Users/mbrohith/Library/Caches/ms-playwright/firefox-1532/firefox/Nightly.app/Contents/MacOS/firefox -no-remote -wait-for-browser -foreground -profile /Users/mbrohith/.vscode/tmp/tmp_vscode_2/playwright_firefoxdev_profile-YbKu1X -juggler-pipe -silent
  - <launched> pid=3897
  - [pid=3897][err] Failed to check for translation environment
  - [pid=3897][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 119: unreachable code after return statement
  - [pid=3897][err] Failed to check for translation environment
  - [pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
  - [pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch gpu subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
  - [pid=3897][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: GPU proc launch error bootstrap_check_in 1100 (t=2.30441) [GFX1-]: GPU proc launch error bootstrap_check_in 1100
  - [pid=3897][err] 2026-08-11 15:01:14.416 firefox[3897:39898] Connection Invalid error for service com.apple.hiservices-xpcservice.
  - [pid=3897][err] 2026-08-11 15:01:14.416 firefox[3897:39743] Error received in message reply handler: Connection invalid
  - [pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
  - [pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch socket subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
  - [pid=3897][err] 2026-08-11 15:01:14.463 firefox[3897:39743] +[NSXPCSharedListener endpointForReply:withListenerName:replyErrorCode:]: an error occurred while attempting to obtain endpoint for listener 'ClientCallsAuxiliary': Connection invalid
  6 × [pid=3897][err] [Parent 3897, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
    - [pid=3897][err] [Parent 3897, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
  6 × [pid=3897][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
  - [pid=3897][err] 2026-08-11 15:01:14.676 firefox[3897:39743] Error received in message reply handler: Connection invalid
  - [pid=3897][err] JavaScript warning: resource://gre/modules/UpdateService.sys.mjs, line 4029: unreachable code after return statement
  - [pid=3897] <process did exit: exitCode=null, signal=SIGTERM>
  - [pid=3897] starting temporary directories cleanup
  - [pid=3897] <gracefully close start>
  - [pid=3897] <kill>
  - [pid=3897] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=3897] finished temporary directories cleanup
  - [pid=3897] <gracefully close end>

```