import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Env } from "./config";

@Injectable()
export class AppService {

  getTest(): string {
    return "Hola Mundo";
  }
}
