import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Notifications {
  constructor(
    private toastr: ToastrService
  ) {
  }

  public Success(mensaje: string) {
    this.toastr.success(mensaje, 'Mensaje de Exito', { timeOut: 10000 });
  }

  public Info(mensaje: string) {
    this.toastr.info(mensaje, 'Mensaje de Información', { timeOut: 10000 });
  }

  public Warning(mensaje: string) {
    this.toastr.warning(mensaje, 'Mensaje de Alerta', { timeOut: 10000 });
  }

  public Error(mensaje: string) {
    this.toastr.error(mensaje, 'Mensaje de Error', { timeOut: 10000 });
  }

}
