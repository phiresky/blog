## Source code of my blog

The posts are written in markdown that is parsed by pandoc, with the pandoc AST rendered with React. The react renderer has a few custom components so code blocks with specific tags are interpreted as e.g. interactive demos or charts.

Run `yarn build` to run all the build steps, or `yarn commit` to commit a new blog version ready for pushing.
