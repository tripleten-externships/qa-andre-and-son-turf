// This file intentionally re-exports the project's real Playwright config
// which lives in the nested folder. It allows tools (like the VS Code launch
// configuration) that expect a `playwright.config.ts` at the workspace root
// to work without editing `.vscode/launch.json`.

import cfg from './qa-andre-and-son-turf/qa-andre-and-son-turf/playwright.config';

export default cfg as typeof cfg;
