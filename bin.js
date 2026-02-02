#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const dir = dirname(fileURLToPath(import.meta.url))
const result = spawnSync('npx', ['tsx', join(dir, 'cli.ts'), ...process.argv.slice(2)], {
    stdio: 'inherit',
    shell: true,
})
process.exit(result.status ?? 1)
