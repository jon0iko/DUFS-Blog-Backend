import { winston } from '@strapi/logger';
import 'winston-daily-rotate-file';

export default {
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.DailyRotateFile({
      filename: 'logs/strapi-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,     // Compresses old logs to save space
      maxSize: '20m',          // Rotate when the file reaches 20 Megabytes
      maxFiles: '7d',          // Keep only the last 7 days of logs
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()  // JSON is better for structured logs
      ),
    }),
  ],
};