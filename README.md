# Code mutation testing

```
## Install all dependencies
pnpm -r install
## Run simple package
pnpm --filter simple test
pnpm --filter simple test:mutation
## Run robo coaster package
pnpm --filter robo-coasters start
pnpm --filter robo-coasters test
pnpm --filter robo-coasters test:mutation
```