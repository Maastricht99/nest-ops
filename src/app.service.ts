import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getTest(): string {
    return "Tes";
  }
}
