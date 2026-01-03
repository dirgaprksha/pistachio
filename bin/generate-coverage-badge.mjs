#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const coveragePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../coverage/coverage-summary.json')
const readmePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../packages/core/README.md')

if (!fs.existsSync(coveragePath)) {
  console.error('Coverage summary not found. Please run tests with coverage first.')
  process.exit(1)
}

const coverageData = JSON.parse(fs.readFileSync(coveragePath, 'utf8'))
const { total } = coverageData

const statements = total.statements.pct
const branches = total.branches.pct
const functions = total.functions.pct
const lines = total.lines.pct

const overall = Math.round((statements + branches + functions + lines) / 4)

let color

if (overall >= 90) {
  color = 'brightgreen'
} else if (overall >= 80) {
  color = 'green'
} else if (overall >= 70) {
  color = 'yellow'
} else if (overall >= 60) {
  color = 'orange'
} else {
  color = 'red'
}

const badgeUrl = `https://img.shields.io/badge/coverage-${overall}%25-${color}`

if (fs.existsSync(readmePath)) {
  let readme = fs.readFileSync(readmePath, 'utf8')
  const badgeRegex = /\[!\[Coverage\]\(https:\/\/img\.shields\.io\/badge\/coverage-[\d]+%25-\w+\)\]\([^)]+\)/
  const newBadge = `[![Coverage](${badgeUrl})](../../coverage)`

  if (badgeRegex.test(readme)) {
    readme = readme.replace(badgeRegex, newBadge)
    fs.writeFileSync(readmePath, readme, 'utf8')
    console.log(`✓ Coverage badge updated: ${overall}% (${color})`)
  } else {
    console.warn('Warning: Could not find coverage badge in README.md')
  }
} else {
  console.warn('Warning: README.md not found at', readmePath)
}

console.log(badgeUrl)
