import {
  IsString,
  IsEnum,
  IsNumber,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateWorkDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsNumber()
  salary: number;

  @IsDateString()
  applyDate: string;

  @IsEnum(['accepted', 'pending', 'rejected', 'priority'])
  review: 'accepted' | 'pending' | 'rejected' | 'priority';
}
