import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Words } from './words.entity';

@Injectable()
export class WordsService {
    constructor(
        @InjectRepository(Words)
        private wordRepository: Repository<Words>
    ) { }

    async addWord(word: string, isToday: boolean): Promise<Words> {
        // const tword: Words = {
        //     word,
        //     id: uuid(),
        //     created_at: 
        // }

        const tword=this.wordRepository.create(
            {word}
        )
        await this.wordRepository.save(tword);
        return tword;
    }

    async getAllWords(): Promise<Words[]> {
        return await this.wordRepository.find();
    }

    async getTodaysWord():Promise<Words>{
        return await this.wordRepository.findOneBy({isToday:true});
    }

}
