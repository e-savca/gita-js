#!/usr/bin/env node
import { Command } from 'commander'
import { helloFromLib } from 'gita-lib'

const program: Command = new Command()
program.name('gita').description('Multi-repo git tool')

program
  .command('hello')
  .description('Test call')
  .action((): void => {
    console.log(helloFromLib())
  })

program.parse(process.argv)
