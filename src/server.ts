/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, infoLogger } from './shared/logger';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    infoLogger.info('database connected');

    app.listen(config.port, () => {
      infoLogger.info(`server started on ${config.port}`);
    });
  } catch (err) {
    if (err instanceof Error) {
      errorLogger.error(err.message);
    }
  }
}

main();
