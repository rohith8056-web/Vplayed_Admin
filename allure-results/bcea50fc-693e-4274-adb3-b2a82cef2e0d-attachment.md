# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forgetpassword.spec.js >> Forgot password page >> TC17 - Email ID field and Send button are visible
- Location: tests/forgetpassword.spec.js:31:3

# Error details

```
Error: browserType.launch: Failed to create a ProcessSingleton for your profile directory. This usually means that the profile is already in use by another instance of Chromium.
Call log:
  - <launching> /Users/mbrohith/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=/Users/mbrohith/.vscode/tmp/tmp_vscode_4/playwright_chromiumdev_profile-msNKAn --remote-debugging-pipe --no-startup-window
  - <launched> pid=7080
  - [pid=7080][err] [0811/161123.575684:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.576224:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.576245:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.577282:ERROR:third_party/crashpad/crashpad/util/file/file_io.cc:103] ReadExactly: expected 8, observed 0
  - [pid=7080][err] [0811/161123.578037:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.578052:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.578070:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.579238:ERROR:third_party/crashpad/crashpad/util/file/file_io.cc:103] ReadExactly: expected 8, observed 0
  - [pid=7080][err] [0811/161123.582970:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.583012:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [0811/161123.583041:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7080][err] [7080:91317:0811/161123.625961:ERROR:chrome/browser/process_singleton_posix.cc:1043] Failed to create socket directory.
  - [pid=7080][err] [7080:91317:0811/161123.626509:ERROR:chrome/app/chrome_main_delegate.cc:519] Failed to create a ProcessSingleton for your profile directory. This means that running multiple instances would start multiple browser processes rather than opening a new window in the existing process. Aborting now to avoid profile corruption.
  - [pid=7080] <gracefully close start>
  - [pid=7080] <kill>
  - [pid=7080] <will force kill>
  - [pid=7080] exception while trying to kill process: Error: kill EPERM
  - [pid=7080] <process did exit: exitCode=21, signal=null>
  - [pid=7080] starting temporary directories cleanup
  - [pid=7080] finished temporary directories cleanup
  - [pid=7080] <gracefully close end>

```