import 'reflect-metadata';
import '../typeorm/connection';
import { app } from './app';

const PORT = 4444;

app.listen(PORT, () => console.log('🚀 Server is running on port', PORT));
