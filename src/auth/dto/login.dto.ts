import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'strongpassword123' })
  @IsString()
  password: string;
}