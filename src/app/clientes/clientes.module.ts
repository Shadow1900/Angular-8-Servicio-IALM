import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,FormsModule ],
  declarations: [],
  providers: [ClientesService],
})
export class ClientesModule {}
