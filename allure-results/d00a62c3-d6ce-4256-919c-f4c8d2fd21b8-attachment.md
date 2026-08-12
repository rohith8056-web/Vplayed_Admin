# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forgetpassword.spec.js >> Forgot password page >> TC-16: Displays the forgot password instructions
- Location: tests/forgetpassword.spec.js:23:3

# Error details

```
TimeoutError: browserType.launch: Timeout 180000ms exceeded.
Call log:
  - <launching> /Users/mbrohith/Library/Caches/ms-playwright/firefox-1532/firefox/Nightly.app/Contents/MacOS/firefox -no-remote -wait-for-browser -foreground -profile /Users/mbrohith/.vscode/tmp/tmp_vscode_4/playwright_firefoxdev_profile-HyGnrw -juggler-pipe -silent
  - <launched> pid=7164
  - [pid=7164][err] Failed to check for translation environment
  - [pid=7164][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 119: unreachable code after return statement
  - [pid=7164][err] Failed to check for translation environment
  - [pid=7164][err] [Parent 7164, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
  - [pid=7164][err] [Parent 7164, IPC I/O Parent] WARNING: Failed to launch gpu subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
  - [pid=7164][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: GPU proc launch error bootstrap_check_in 1100 (t=0.798671) [GFX1-]: GPU proc launch error bootstrap_check_in 1100
  - [pid=7164][err] 2026-08-11 16:11:25.643 firefox[7164:91701] Error received in message reply handler: Connection invalid
  - [pid=7164][err] 2026-08-11 16:11:25.643 firefox[7164:91731] Connection Invalid error for service com.apple.hiservices-xpcservice.
  - [pid=7164][err] [Parent 7164, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
  - [pid=7164][err] [Parent 7164, IPC I/O Parent] WARNING: Failed to launch socket subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
  - [pid=7164][err] 2026-08-11 16:11:25.661 firefox[7164:91701] +[NSXPCSharedListener endpointForReply:withListenerName:replyErrorCode:]: an error occurred while attempting to obtain endpoint for listener 'ClientCallsAuxiliary': Connection invalid
  6 × [pid=7164][err] [Parent 7164, IPC Launch] WARNING: parent bootstrap_check_in failed: unknown error code: file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:1299
    - [pid=7164][err] [Parent 7164, IPC I/O Parent] WARNING: Failed to launch tab subprocess @bootstrap_check_in (Error:1100): file /Users/runner/firefox/ipc/glue/GeckoChildProcessHost.cpp:823
  6 × [pid=7164][err] JavaScript error: resource://gre/modules/ExtensionParent.sys.mjs, line 1909: TypeError: can't access property "addMessageListener", messageManager is null
  - [pid=7164][err] 2026-08-11 16:11:25.923 firefox[7164:91701] Error received in message reply handler: Connection invalid
  - [pid=7164][err] JavaScript warning: resource://gre/modules/UpdateService.sys.mjs, line 4029: unreachable code after return statement

```