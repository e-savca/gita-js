#!/usr/bin/env node
import { Command } from 'commander'
import { helloFromLib } from 'gita-lib'

const program = new Command()
program.name('gita').description('Multi-repo git tool')

program
    .command('hello')
    .description('Test call')
    .action(() => {
        console.log(helloFromLib())
    })

program.parse()