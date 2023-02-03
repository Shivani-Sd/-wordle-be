import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class ValidWords {
  @PrimaryColumn()
  word: string;
}
