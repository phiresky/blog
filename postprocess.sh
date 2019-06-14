#!/bin/bash
dir="$(dirname "$(realpath "$0")")"
cd "$dir"
# need to have run git worktree add out/ gh-pages before build
echo "gitdir: $dir/.git/worktrees/out" > out/.git
cd out
touch .nojekyll
mv blog/* .
rmdir blog
git add .
git commit -m'update binaries'