# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forgetpassword.spec.js >> Forgot password page >> TC24 - Resend timer is running on Resend Code text
- Location: tests/forgetpassword.spec.js:80:3

# Error details

```
Error: browserType.launch: Failed to create a ProcessSingleton for your profile directory. This usually means that the profile is already in use by another instance of Chromium.
Call log:
  - <launching> /Users/mbrohith/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=/Users/mbrohith/.vscode/tmp/tmp_vscode_4/playwright_chromiumdev_profile-BOtEym --remote-debugging-pipe --no-startup-window
  - <launched> pid=7133
  - [pid=7133][err] [0811/161124.446071:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.446449:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.446471:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.446992:ERROR:third_party/crashpad/crashpad/util/file/file_io.cc:103] ReadExactly: expected 8, observed 0
  - [pid=7133][err] [0811/161124.447621:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.447638:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.447659:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.448251:ERROR:third_party/crashpad/crashpad/util/file/file_io.cc:103] ReadExactly: expected 8, observed 0
  - [pid=7133][err] [0811/161124.448601:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.448620:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [0811/161124.448639:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7133][err] [7133:91573:0811/161124.468224:ERROR:chrome/browser/process_singleton_posix.cc:1043] Failed to create socket directory.
  - [pid=7133][err] [7133:91573:0811/161124.468316:ERROR:chrome/app/chrome_main_delegate.cc:519] Failed to create a ProcessSingleton for your profile directory. This means that running multiple instances would start multiple browser processes rather than opening a new window in the existing process. Aborting now to avoid profile corruption.
  - [pid=7133] <process did exit: exitCode=21, signal=null>
  - [pid=7133] starting temporary directories cleanup
  - [pid=7133] <gracefully close start>
  - [pid=7133] <kill>
  - [pid=7133] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7133] finished temporary directories cleanup
  - [pid=7133] <gracefully close end>

```