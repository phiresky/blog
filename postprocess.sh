#!/bin/bash
dir="$(dirname "$(realpath "$0")")"
cd "$dir"
# need to have run git worktree add out/ gh-pages before build
git worktree add dist gh-pages || true
rm -r dist/*
touch dist/.nojekyll
cp -r client/out/* dist

(
    cd dist
    git add .
    git commit -m'update binaries'
)
