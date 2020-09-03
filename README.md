## Prerequisites

- yarn v1 (I am using 1.22.4)
- docker (I am using 2.3.0.4)
- node v12.16.1

## Setup db

`yarn setup-db`

## Problem with introspect

1. Run prisma introspect `yarn prisma introspect`
2. Notice error running prisma introspect

```
> yarn prisma introspect
yarn run v1.22.4
$ /Users/rudiyardley/projects/yatou/prismt/starter/node_modules/.bin/prisma introspect
Environment variables loaded from prisma/.env

Introspecting based on datasource defined in prisma/schema.prisma …
Oops, an unexpected error occured!
[libs/datamodel/core/src/dml/model.rs:166:14] We assume an internally valid datamodel before mutating.

Please help us improve Prisma by submitting an error report.
Error reports never contain personal or other sensitive information.
Learn more: https://pris.ly/d/telemetry

✖ Submit error report › Yes
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

3. Note prisma schema is apparently valid by running `yarn prisma validate`

```
> yarn prisma validate
yarn run v1.22.4
$ /Users/rudiyardley/projects/yatou/prismt/starter/node_modules/.bin/prisma validate
Environment variables loaded from prisma/.env
The schema at /Users/rudiyardley/projects/yatou/prismt/starter/prisma/schema.prisma is valid 🚀
✨  Done in 1.29s.
```
