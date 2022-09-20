import { Conversation, Participant } from 'src/utils/typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from 'src/utils/constants';
import { ParticipantsService } from './participants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation, Participant])],
  providers: [
    { provide: Services.PARTICIPANTS, useClass: ParticipantsService },
  ],
  exports: [{ provide: Services.PARTICIPANTS, useClass: ParticipantsService }],
})
export class ParticipantsModule {}
