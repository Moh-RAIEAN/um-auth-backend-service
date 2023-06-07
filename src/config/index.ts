/* eslint-disable no-undef */
import dotenv from 'dotenv';
import { join } from 'node:path';

dotenv.config({ path: join(process.cwd(), '.env') });

export default {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT,
  defaultUserPassword: process.env.DEFAULT_UESR_PASSWORD,
};
