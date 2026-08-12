# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forgetpassword.spec.js >> Forgot password page >> TC-15: Page loads with correct URL and heading
- Location: tests/forgetpassword.spec.js:14:3

# Error details

```
Error: browserType.launch: Failed to create a ProcessSingleton for your profile directory. This usually means that the profile is already in use by another instance of Chromium.
Call log:
  - <launching> /Users/mbrohith/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-edgeupdater --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints,msForceBrowserSignIn,msEdgeUpdateLaunchServicesPreferredVersion --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=/Users/mbrohith/.vscode/tmp/tmp_vscode_4/playwright_chromiumdev_profile-WoCggq --remote-debugging-pipe --no-startup-window
  - <launched> pid=7078
  - [pid=7078][err] [0811/161123.575681:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.576202:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.576229:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.577261:ERROR:third_party/crashpad/crashpad/util/file/file_io.cc:103] ReadExactly: expected 8, observed 0
  - [pid=7078][err] [0811/161123.578148:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.578164:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.578181:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.579239:ERROR:third_party/crashpad/crashpad/util/file/file_io.cc:103] ReadExactly: expected 8, observed 0
  - [pid=7078][err] [0811/161123.582972:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.583012:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:41] getxattr size com.googlecode.crashpad.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [0811/161123.583039:ERROR:third_party/crashpad/crashpad/util/mac/xattr.cc:66] setxattr org.chromium.crashpad.database.initialized on file /Users/mbrohith/Library/Application Support/Google/Chrome for Testing/Crashpad: Operation not permitted (1)
  - [pid=7078][err] [7078:91314:0811/161123.625964:ERROR:chrome/browser/process_singleton_posix.cc:1043] Failed to create socket directory.
  - [pid=7078][err] [7078:91314:0811/161123.626512:ERROR:chrome/app/chrome_main_delegate.cc:519] Failed to create a ProcessSingleton for your profile directory. This means that running multiple instances would start multiple browser processes rather than opening a new window in the existing process. Aborting now to avoid profile corruption.
  - [pid=7078] <gracefully close start>
  - [pid=7078] <kill>
  - [pid=7078] <will force kill>
  - [pid=7078] exception while trying to kill process: Error: kill EPERM
  - [pid=7078] <process did exit: exitCode=21, signal=null>
  - [pid=7078] starting temporary directories cleanup
  - [pid=7078] finished temporary directories cleanup
  - [pid=7078] <gracefully close end>

```