# Messages

1. **Environment Info:**
   - The user's current OS is: Windows

2. **Workspace Info:**
   - Workspace folders:
     - `c:\Users\karim\Documents\learning-react`
   - Workspace structure:
     ```
     AGENTS.md
     CLAUDE.md
     eslint.config.mjs
     LICENSE
     next-env.d.ts
     next.config.ts
     package.json
     postcss.config.mjs
     README.md
     tailwind.config.cjs
     test.md
     tsconfig.json
     app/
     	counter.tsx
     	globals.css
     	layout.tsx
     	page.tsx
     public/
     types/
     	cache-life.d.ts
     	routes.d.ts
     	validator.ts
     ```

3. **User Memory:**
   - **Build Preferences:**
     - Minecraft Modding (Pleasure Horizons):
       - Automatic Deployment: After running a successful Gradle build (`.\gradlew.bat build`), always automatically copy the resulting `.jar` file from `build/libs/` directly into the user's ATLauncher mods folder using PowerShell.
       - Target path: `C:\Users\karim\AppData\Roaming\ATLauncher\instances\SimplyOptimized\mods\`
       - Command example: `Copy-Item "build\libs\Pleasure Horizons*.jar" "C:\Users\karim\AppData\Roaming\ATLauncher\instances\SimplyOptimized\mods\" -Force`

   - **Design Preferences:**
     - Figma Exports:
       - MacOS Window: Use only as inspiration/context and boundary limits.
       - Ignore: Do not implement the fake MacOS window chrome/frame itself (the user's app handles the window).
       - Focus: Only implement the content inside the "utility panel" (the inner content area).

   - **Writing Style Guide:**
     - Conversational yet precise. Human and direct, not AI-sounding.

     - **Voice & Tone:**
       - Clear, simple language
       - Varying sentence lengths
       - Active voice only
       - Address reader with "you" and "your"
       - Use contractions naturally
       - Keep it straightforward, not jolly or overly enthusiastic
       - Tone: direct, no-nonsense

     - **Structure & Content:**
       - Practical, specific, actionable insights
       - Bullet points for lists (social/instructional)
       - Support points with examples or data
       - Specific relevant examples

     - **What To Avoid:**
       - Em dashes (use commas or periods instead)
       - Passive voice
       - Unnecessary qualifiers ("in conclusion", "in closing")
       - Overly abstract or vague statements
       - Output warnings or notes
       - Hashtags, asterisks, excessive markdown formatting
       - Semicolons
       - Natural conversational pivots instead of formal transitions

     - **Banned Words:**
       literally, actually, certainly, probably, basically, could, maybe, delve, embark, enlightening, esteemed, shed light, craft, crafting, imagine, realm, game-changer, unlock, discover, skyrocket, abyss, not alone, in a world where, revolutionize, disruptive, utilize, utilizing, dive deep, tapestry, illuminate

4. **Session Memory:**
   - Empty. No session notes have been created yet.

5. **Attachments:**
   - Repository Info:
     - Repository name: `learning-react`
     - Owner: `some-du6e`
     - Current branch: `main`
     - Default branch: `main`

6. **Context:**
   - Current date: March 19, 2026
   - Terminals:
     - Terminal 1:
       - Last Command: `npm install`
       - Cwd: `C:\Users\karim\Documents\learning-react`
       - Exit Code: 0
     - Terminal 2:
       - Last Command: `ls /c/Users/karim/package-lock.json`
       - Cwd: `C:\Users\karim\Documents\learning-react`
       - Exit Code: 1

7. **Editor Context:**
   - Current file: `c:\Users\karim\Documents\learning-react\test.md`

8. **Tools Information:**
   - You are an agent with access to various tools to assist with tasks. These tools include:
     - File management tools for creating, editing, and searching files.
     - Terminal commands for running scripts and managing environments.
     - Python environment and package management tools.
     - GitHub integration tools for managing pull requests, issues, and notifications.
     - Figma tools for integrating design elements into code.
     - Browser automation tools for testing and interacting with web pages.
     - Performance and memory analysis tools for web applications.
     - Documentation and code example retrieval tools for libraries and frameworks.
     - Pylance tools for Python code validation and refactoring.

   - These tools are used to ensure tasks are completed efficiently and accurately.

9. **Tool Names:**
   - **File Management Tools:**
     - `create_directory`: Create new directories in the workspace.
     - `create_file`: Create new files with specified content.
     - `insert_edit_into_file`: Edit existing files by inserting or modifying content.
     - `list_dir`: List the contents of a directory.
     - `read_file`: Read the contents of a file.

   - **Search Tools:**
     - `file_search`: Search for files in the workspace by glob pattern.
     - `grep_search`: Perform text searches in the workspace.
     - `semantic_search`: Perform natural language searches for code or comments.

   - **Git Tools:**
     - `get_changed_files`: Retrieve git diffs of current file changes.

   - **Terminal Tools:**
     - `run_in_terminal`: Run commands in the terminal.
     - `get_terminal_output`: Get the output of a previously run terminal command.
     - `terminal_last_command`: Retrieve the last command run in the terminal.
     - `terminal_selection`: Get the current selection in the terminal.

   - **Task Management Tools:**
     - `create_and_run_task`: Create and run build, run, or custom tasks.

   - **Question Tools:**
     - `vscode_askQuestions`: Ask the user clarifying questions.

   - **Code Analysis Tools:**
     - `vscode_listCodeUsages`: Find all usages of a code symbol across the workspace.

   - **Extension Tools:**
     - `install_extension`: Install extensions in VS Code.
     - `vscode_searchExtensions_internal`: Search for extensions in the VS Code Marketplace.

   - **Browser Tools:**
     - `open_browser_page`: Open a new browser page.
     - `navigate_page`: Navigate a browser page by URL, history, or reload.
     - `read_page`: Get a snapshot of the current browser page state.
     - `screenshot_page`: Capture a screenshot of the current browser page.
     - `click_element`: Click on an element in a browser page.
     - `hover_element`: Hover over an element in a browser page.
     - `type_in_page`: Type text or press keys in a browser page.
     - `drag_element`: Drag an element over another element in a browser page.
     - `handle_dialog`: Respond to a modal or file chooser dialog in a browser page.

   - **Figma Tools:**
     - `mcp_figma_generate_diagram`: Create diagrams in FigJam using Mermaid.js.
     - `mcp_figma_generate_figma_design`: Capture, import, or convert a web page into a Figma design.
     - `mcp_figma_get_variable_defs`: Get variable definitions for a Figma node.
     - `mcp_figma_create_design_system_rules`: Generate design system rules for a repository.

   - **Python Tools:**
     - `configure_python_environment`: Configure a Python environment in the workspace.
     - `install_python_packages`: Install Python packages in the workspace.
     - `activate_python_environment_tools`: Activate tools for managing Python environments.
     - `activate_pylance_python_validation_tools`: Activate tools for Python validation with Pylance.
     - `activate_import_analysis_and_dependency_management`: Activate tools for analyzing Python imports and dependencies.
     - `activate_python_environment_management`: Activate tools for managing Python environments.
     - `activate_workspace_structure_and_file_management`: Activate tools for managing Python workspace structure.
     - `mcp_pylance_mcp_s_pylanceDocString`: Retrieve docstrings for Python symbols.
     - `mcp_pylance_mcp_s_pylanceInvokeRefactoring`: Apply automated code refactoring to Python files.
     - `mcp_pylance_mcp_s_pylanceRunCodeSnippet`: Execute Python code snippets directly in the workspace.
     - `mcp_pylance_mcp_s_pylanceFileSyntaxErrors`: Check Python files for syntax errors.

   - **GitHub Tools:**
     - `activate_github_pull_request_management`: Activate tools for managing GitHub pull requests.
     - `activate_github_issue_notification_tools`: Activate tools for managing GitHub issues and notifications.
     - `github-pull-request_doSearch`: Execute GitHub search queries.
     - `github-pull-request_labels_fetch`: Fetch labels from a GitHub repository.

   - **Performance and Memory Tools:**
     - `activate_performance_audit_tools`: Activate tools for analyzing web page performance.
     - `activate_memory_and_snapshot_tools`: Activate tools for capturing memory and element snapshots.

   - **Interaction Tools:**
     - `activate_user_interaction_tools`: Activate tools for interacting with web elements.
     - `activate_text_input_and_wait_tools`: Activate tools for text input and synchronization.

   - **Other Tools:**
     - `renderMermaidDiagram`: Render a Mermaid diagram from Mermaid.js markup.