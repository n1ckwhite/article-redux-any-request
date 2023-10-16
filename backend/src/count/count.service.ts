import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CountService {
  constructor(private readonly dataBase: DatabaseService) {}
  async getCount() {
    return this.dataBase.count.findFirst();
  }
  async plusCount(id: string) {
    return this.dataBase.count.update({
      where: {
        id,
      },
      data: {
        count: {
          increment: 1,
        },
      },
    });
  }
  async minusCount(id: string) {
    return this.dataBase.count.update({
      where: {
        id,
      },
      data: {
        count: {
          decrement: 1,
        },
      },
    });
  }
  async clearCount(id: string) {
    return this.dataBase.count.update({
      where: {
        id,
      },
      data: {
        count: 0,
      },
    });
  }
}
