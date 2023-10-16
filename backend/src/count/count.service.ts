import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CountService {
  constructor(private readonly dataBase: DatabaseService) {}
  async getCount() {
    return this.dataBase.count.findFirst();
  }
  async plusCount(id: string) {
    const findCount = await this.dataBase.count.findUnique({
      where: {
        id,
      },
    });
    if (findCount) {
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
    } else {
      throw new HttpException(
        'Не удалось обновить цифру',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async minusCount(id: string) {
    const findCount = await this.dataBase.count.findUnique({
      where: {
        id,
      },
    });
    if (findCount) {
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
    } else {
      throw new HttpException(
        'Не удалось обновить цифру',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async clearCount(id: string) {
    const findCount = await this.dataBase.count.findUnique({
      where: {
        id,
      },
    });
    if (findCount) {
      return this.dataBase.count.update({
        where: {
          id,
        },
        data: {
          count: 0,
        },
      });
    } else {
      throw new HttpException(
        'Не удалось обновить цифру',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
