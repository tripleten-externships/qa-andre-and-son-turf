This repository is a Playwright + TypeScript test suite for the Andre & Son website. The guidance below tells an AI coding agent how this project is organised and which conventions to follow when making changes.

- Project layout
  - `playwright.config.ts` — Playwright configuration. Base URL is `https://www.andreandson.com`. Tests live in `tests/` and page objects live in `pages/`.
  - `pages/` — Page Object Model classes. Example: `pages/turfproduct.ts` defines locators (e.g. `TURFPRODUCTSHeading`, `turfProductsDropdown`). Keep locator definitions and simple helper actions in these classes.
  - `tests/` — Test files use Playwright's test runner and POMs. Example: `tests/turfproduct.specs.ts` constructs `new TurfProductPage(page)` and asserts visibility, hover and text expectations.
  - `playwright-report/` — HTML reporter output. Use `npx playwright show-report` to open the latest report.

- How to run and validate changes (developer workflows)
  - Install deps: `npm install` (project currently contains devDependencies only).
  - Install browsers for Playwright: `npx playwright install`.
  - Run tests (project does not define npm scripts in `package.json`). Use Playwright CLI directly, for example:
    - `npx playwright test` — run all tests across configured browsers.
    - `npx playwright test tests/turfproduct.specs.ts` — run a single file.
    - `npx playwright show-report` — open HTML report after a run.
  - Config notes: tests rely on `baseURL` in `playwright.config.ts`. Use `await page.goto('/')` in tests or `turfProductPage.goto('/')` when POM exposes a goto helper.

- Project-specific conventions
  - Page objects hold only locators and lightweight helpers. Tests call POM methods and perform assertions using Playwright `expect`.
  - Files are TypeScript but there are no type/compile scripts in `package.json`. Keep changes type-safe and follow existing minimal style (no extra transpile step required when running via `npx playwright test`).
  - Reporter and artifacts: `screenshot: "only-on-failure"`, `video: "off"`, traces captured `on-first-retry` per `playwright.config.ts`.

- Integration & external dependencies
  - Primary external dependency: `@playwright/test` (dev dependency). Tests run against live site `https://www.andreandson.com` by default.
  - No other services (APIs, databases) are referenced in the codebase.

- Examples to follow when editing or adding tests
  - Creating a POM locator:
    - In `pages/turfproduct.ts`, locators are created with `page.locator('text=TURF PRODUCTS')` and chained locators use `.locator('li').first()`.
  - Test structure expectation:
    - Construct POM: `const turfProductPage = new TurfProductPage(page);`
    - Navigate: `await turfProductPage.goto('/')` (POM may implement this).
    - Assert: `await expect(turfProductPage.TURFPRODUCTSHeading).toBeVisible();`

- When modifying repository files
  - Prefer small, focused changes. Update `playwright.config.ts` only if new capabilities are needed (browsers, reporter, baseURL).
  - If adding scripts, add them to `package.json` under `scripts` (examples in `README.md` reference `npm run tests:chrome` etc. but they are not present today).

- Where to look for debugging information
  - `playwright-report/` contains the HTML output with steps, screenshots and traces.
  - Local test failures will produce screenshots in the `playwright-report` (or artifact paths Playwright chooses).

If anything in this guidance is unclear or you'd like more examples (e.g., how to add typed helper methods to POMs or add npm scripts like `tests:chrome`), tell me which section to expand and I will iterate.
