import { stream } from '@clack/prompts'
import 'zx/globals'

export default async (token: string, spaceName: string, spaceId: string, passthroughArgs: string[] = []) => {
    const backupProcess = $`npx storyblok-backup --token ${token} --space ${spaceId} --output-dir ./storyblok-backups/${spaceName} ${passthroughArgs}`
    backupProcess.stdout.setEncoding('utf-8')
    await stream.message(backupProcess.stdout)
}
