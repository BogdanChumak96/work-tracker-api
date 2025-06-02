import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

@ApiTags('Work')
@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  @ApiOperation({ summary: 'Create work' })
  @ApiBody({ type: CreateWorkDto })
  @ApiResponse({ status: 201, description: 'Work created' })
  create(@Body() dto: CreateWorkDto) {
    return this.workService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all works' })
  @ApiResponse({ status: 200, description: 'List of works' })
  findAll() {
    return this.workService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get work by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Work found' })
  findOne(@Param('id') id: string) {
    return this.workService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update work by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateWorkDto })
  @ApiResponse({ status: 200, description: 'Work updated' })
  update(@Param('id') id: string, @Body() dto: UpdateWorkDto) {
    return this.workService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete work by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Work deleted' })
  remove(@Param('id') id: string) {
    return this.workService.remove(+id);
  }
}