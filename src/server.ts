/* eslint-disable no-console */
import colors from 'colors';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    console.log(colors.green.underline('database connected'));

    app.listen(config.port, () => {
      console.log(colors.green.underline(`server started on ${config.port}`));
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(colors.red(err.message));
    }
  }
}

main();
