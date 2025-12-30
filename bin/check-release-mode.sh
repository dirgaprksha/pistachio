#!/bin/bash

TYPE="$1"

if [ "$TYPE" == "prerelease" ]; then
  if [ -f ".changeset/pre.json" ]; then
    echo "🔍 Prerelease file found. Continuing with dev prerelease."
  else
    echo "🔍 No prerelease file found. Setting to enter dev mode."
    pnpm cg:enter
    git add -A
    git commit -m "chore(prerelease): enter prerelease mode [skip ci]"
    git push origin main
  fi
else
  if [ -f ".changeset/pre.json" ]; then
    echo "🔍 Prerelease file found. Setting to exit dev mode."
    pnpm cg:exit
    git add -A
    git commit -m "chore(prerelease): exit prerelease mode [skip ci]"
    git push origin main
  else
    echo "🔍 No prerelease file found. Proceeding with stable release if a changeset exists; otherwise, skipping the next step."
  fi
fi