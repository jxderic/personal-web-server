import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import winston = require('winston');

const { simple, combine, timestamp, prettyPrint } = winston.format;

export const nestLikeFormat = winston.format.combine(
  winston.format.timestamp(),
  nestWinstonModuleUtilities.format.nestLike(),
);

export const winstonLogger = WinstonModule.createLogger({
  format: combine(simple(), timestamp(), prettyPrint()),
  transports: [
    new winston.transports.Console({
      format: nestLikeFormat,
    }),
    new winston.transports.File({
      maxFiles: 5,
      // 单位为字节，10mb
      maxsize: 10000000,
      filename: 'error.log',
      level: 'error',
    }),
    new winston.transports.File({
      maxFiles: 5,
      // 单位为字节，10mb
      maxsize: 10000000,
      filename: 'combined.log',
    }),
  ],
});
