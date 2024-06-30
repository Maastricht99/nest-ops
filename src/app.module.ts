import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ThrottlerModule } from "@nestjs/throttler";
import { ConfigModule } from "@nestjs/config";
import loadConfig from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loadConfig]
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
