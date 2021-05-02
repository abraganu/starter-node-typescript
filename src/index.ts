import express, { Request, Response } from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import helmet from 'helmet'

import typeDefs from './graphql/schema';
import appRoutes from './api/routes'

const PORT = 80
const app = express()

// grahql
const apolloServer = new ApolloServer({
  typeDefs
})

app.get('/', (req: Request, res: Response) => res.send('Express + TypeScript Server'))

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ limit: '1mb', extended: true }))
app.use(express.json({ limit: '1mb' }))
app.use('/api', appRoutes)

apolloServer.applyMiddleware({ app, path: '/graphql' })
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
