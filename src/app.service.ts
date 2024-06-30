import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Env } from "./config";

@Injectable()
export class AppService {

  constructor(
    private readonly configService: ConfigService<Env>
  ) {}

  getTest(): number {
    const { port } = this.configService.get("server", { infer: true })
    return port;
  }
}
