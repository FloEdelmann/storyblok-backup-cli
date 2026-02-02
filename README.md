# storyblok-backup-cli

Interactive CLI to backup and restore [Storyblok](https://www.storyblok.com/) CMS spaces. Wraps [`storyblok-backup`](https://github.com/thomasaull/storyblok-backup) and [`storyblok-restore`](https://github.com/thomasaull/storyblok-restore) with a friendly prompt-based interface.

## Features

- Interactive prompts for all inputs (powered by [@clack/prompts](https://github.com/bombshell-dev/clack))
- CLI flags for scripting and CI/CD usage
- Environment variable support (`.env` file)
- Multi-space backup and restore in a single run
- Pass additional arguments through to the underlying backup/restore tools

## Installation

Run directly with npx (no install needed):

```bash
npx storyblok-backup-cli
```

Or install globally:

```bash
npm install -g storyblok-backup-cli
```

## Usage

The CLI supports three input modes. Values are resolved in order: CLI flags > environment variables > interactive prompts.

### Interactive mode

Simply run the command and answer the prompts:

```bash
npx storyblok-backup-cli
```

### CLI flags

```bash
npx storyblok-backup-cli --backup --token YOUR_TOKEN --spaces "my-space:12345,other:67890"
```

```bash
npx storyblok-backup-cli --restore --token YOUR_TOKEN --spaces "my-space:12345" --args "--verbose"
```

### Environment variables

Create a `.env` file in the project root:

```bash
STORYBLOK_TOKEN=your-storyblok-token
STORYBLOK_SPACES=my-space:12345,another:67890
STORYBLOK_ARGS=
```

Then run:

```bash
npx storyblok-backup-cli --backup
```

## Configuration

| CLI Flag    | Environment Variable | Description                                              |
| ----------- | -------------------- | -------------------------------------------------------- |
| `--backup`  | —                    | Run in backup mode (skips task prompt)                   |
| `--restore` | —                    | Run in restore mode (skips task prompt)                  |
| `--token`   | `STORYBLOK_TOKEN`    | Storyblok OAuth token                                    |
| `--spaces`  | `STORYBLOK_SPACES`   | Spaces to process (comma-separated, format: `label:id`)  |
| `--args`    | `STORYBLOK_ARGS`     | Additional arguments passed to storyblok-backup/-restore |

### Spaces format

Spaces are specified as comma-separated `label:id` pairs. The label is used as the backup folder name:

```
my-space:12345,another:67890
```

If you omit the label, the ID is used as both label and ID:

```
12345,67890
```

## What gets backed up

The backup includes all content types supported by `storyblok-backup`:

- Stories
- Components & component groups
- Datasources & datasource entries
- Assets & asset folders
- Internal tags
- Space roles
- Workflows & workflow stages
- Releases
- Pipeline branches
- Presets
- Webhooks
- Access tokens
- Tasks
- Collaborators

Backups are saved to `./storyblok-backups/<space-label>/`.

## Contributing

```bash
npm install
npm run format       # Format code with Prettier
npm run format:check # Check formatting
npm run lint         # Lint with ESLint
npm run typecheck    # Type-check with TypeScript
```

## License

[MIT](LICENSE)
