import { ChallengeModule } from './../challenge/module';
import { FundModule } from './../fund/module';
import { ProposerModule } from './../proposer/module';
import { ProposalModule } from './../proposal/module';
import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

//apis for homepage & other public requests
@Module({
  providers: [SearchService],
  controllers: [SearchController],
  imports: [ChallengeModule, FundModule, ProposerModule, ProposalModule],
  exports: [SearchService],
})
export class CustomModule {}
