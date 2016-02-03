# reindex-starter-kit-flint

Sample code to get started with
[Reindex](https://www.reindex.io/?utm_source=github&utm_campaign=flint),
[Flint](https://flintjs.com) and Relay.

Fork and clone the repository.

Install flint

```
npm install -g flint
```

Currently you need to manually install some build dependencies for Flint.

```
cd .flint
npm install
```


Set `REINDEX_URL` env variable to be your be your Reindex app url. Set
`REINDEX_TOKEN` to be your Reindex admin token.

```
export REINDEX_URL="https://YOUR-REINDEX-APP.myreindex.com"
export REINDEX_TOKEN="YOUR-REINDEX-TOKEN"
```

Fetch current version of your GraphQL schema (you can add `ReindexSchema.json`)
to git after that. Also fetch Relay schema (saved as ./.flint/RelaySchema.json).

```
bin/reindex schema-fetch ReindexSchema.json
bin/schema-relay
```

Run and open on localhost:3000

```
flint
```

Play with GraphiQL

```
npm run graphiql
```

Note that authentication will work only once you enable authentication providers
inside your Reindex console.
