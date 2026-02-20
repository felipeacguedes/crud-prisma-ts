import 'dotenv/config'
import express from 'express'
import userRoutes from './routes/user.routes'
import { prisma } from './lib/prisma'

prisma.$connect()
  .then(() => console.log('Conectado ao Mongo com Prisma 5 ✅'))
  .catch((err) => console.error(err))

const app = express()

app.use(express.json());
app.use('/users', userRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})