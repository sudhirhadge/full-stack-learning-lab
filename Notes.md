In Conventional Commits, valid types are things like:

feat → new feature
fix → bug fix
chore → setup, tooling, configs
refactor, docs, test


## How to Enable or Disable AI Extensions for a Workspace in VS Code

1. Click the **Settings** icon in the bottom-left corner of VS Code.

2. Select **Settings**.

3. In the Settings page, switch from **User** to **Workspace** settings.

4. In the search bar, type: AI

   ```text
   AI
   ```

5. Locate the AI-related settings such as:

   * Enable AI Features
   * Disable AI Features

6. Toggle the setting based on your preference for the current workspace.

This is useful when you want to practice or code manually without AI assistance in a specific project while keeping AI enabled for other workspaces.

## VS Code Fixes for Stale TypeScript / Prisma Errors

Sometimes VS Code continues showing TypeScript or Prisma errors even after the application is running correctly. This usually happens because the TypeScript server or VS Code window is using stale cache.

### Restart TypeScript Server

1. Press:

   ```text
   Ctrl + Shift + P
   ```

2. Search:

   ```text
   TypeScript: Restart TS Server
   ```

3. Press Enter.

This refreshes TypeScript diagnostics and resolves many fake editor errors.

---

### Reload VS Code Window

1. Press:

   ```text
   Ctrl + Shift + P
   ```

2. Search:

   ```text
   Developer: Reload Window
   ```

3. Press Enter.

This reloads the VS Code extension host and clears temporary workspace cache issues.

---

### Common Use Cases

Use these fixes when:

* Prisma types are not updating
* Imports show red lines but app still works
* TypeScript errors remain after package changes
* `@prisma/client` types are not recognized
* VS Code behaves differently from terminal/runtime

These two commands solve many development environment cache issues without reinstalling dependencies.

