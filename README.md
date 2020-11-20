# TypeScript Express App QuickStart

```bash
# Init node app and git repo
npm init -y
git init
## Use one of these 2 options
# npx tsconfig.json
tsc init -y
# Install dependencies
npm install express --save
npm install concurrently nodemon @types/node @types/express --save-dev
mkdir src
## Create Express Server
echo import express from \'express\' > src/server.ts
echo const app = express\(\) >> src/server.ts
echo const port = 3000 >> src/server.ts
echo "" >> src/server.ts
echo app.get\(\'\/\'\, \(_req\: any\, res\: any\)\: void \=\> \{ >> src/server.ts
echo   res.json\(\{API\: \'Hello\, World\!\'\}\) >> src/server.ts
echo \}\) >> src/server.ts
echo ""  >> src/server.ts
echo console.log\(\'Hello\, World\!\'\) >> src/server.ts
echo "" >> src/server.ts
echo "" >> src/server.ts
echo app\.listen\(port\, \(\) \=\> \{ >> src/server.ts
echo   \`Listening on port \$\{port\}\` >> src/server.ts
echo \}\) >> src/server.ts
## Create ReadMe
echo \# TypeScript App > README.md
echo \#\#\# QuickStart >> README.md
echo \`\`\`bash >> README.md
echo npm run serve >> README.md
echo \`\`\` >> README.md
# Create README.md
echo "" > .env
# Create .gitignore
echo "node_modules" > .gitignore
echo ".env" >> .gitignore
# Unsure what this is for
source ./.env
```

#### server.ts will automatically be created as follows
### src/server.ts
```typescript
import express from 'express'
const app = express()
const port = 3000

app.get('/', (_req: any, res: any): void => {
  res.json({API: 'Hello, World!'})
})

console.log('Hello, World!')


app.listen(port, () => {
  `Listening on port ${port}`
})
```
---
#### Update files

### tsconfig.json
```json
...
  "watch": true
  ...
```
to tsconfig.json


### package.json
```json
...
  "scripts": {
    "serve": "concurrently \"nodemon dist/server.js\" \"tsc\""
  },
  ...
```

