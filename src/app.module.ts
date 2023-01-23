import { Module } from '@nestjs/common';
import { SecurityController } from './controllers';
import { AccountService } from './services';
import { AccountController } from './account/account.controller';
import { TranfersController } from './controllers/tranfers/tranfers.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { TransfersController } from './controllers/transfers/transfers.controller';
import { AccountService } from './account/account.service';
import { CustomerService } from './services/customer/customer.service';
import { TransfersService } from './services/transfers/transfers.service';

@Module({
  imports: [],
  controllers: [SecurityController, AccountController, TranfersController, CustomerController, TransfersController],
  providers: [AccountService, CustomerService, TransfersService],
})
export class AppModule {}
