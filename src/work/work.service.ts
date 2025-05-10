import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './work.entity';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,
  ) {}

  create(createWorkDto: CreateWorkDto) {
    const work = this.workRepository.create(createWorkDto);
    return this.workRepository.save(work);
  }

  findAll() {
    return this.workRepository.find();
  }

  findOne(id: number) {
    return this.workRepository.findOneBy({ id });
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return this.workRepository.update(id, updateWorkDto);
  }

  remove(id: number) {
    return this.workRepository.delete(id);
  }
}
