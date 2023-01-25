import { config } from 'dotenv';
import { app } from 'app/app';

config();

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`listening at localhost:${PORT}`));
