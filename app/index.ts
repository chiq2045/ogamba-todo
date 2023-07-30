import { config } from 'dotenv'
import { app } from './app'

config()
const { PORT: port = 3000 } = process.env

app.listen(port, () => console.log(`listening at http://localhost:${port}`))
