import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [],
  providers: [ClientesService],
  exports: [AltaClienteComponent],
})
export class ClientesModule {}
