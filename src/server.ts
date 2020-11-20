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