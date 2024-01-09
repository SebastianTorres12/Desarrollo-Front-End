import { Component } from '@angular/core';
import { GenericFormSolicitudComponent } from '../../components/form-solicitud/form-solicitud.component';
import { Solicitud } from '../../models/solicitud.model';
import { CrudSolicitudService } from '../../services/crudSolicitud.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-create-solicitud',
  standalone: true,
  imports: [GenericFormSolicitudComponent],
  templateUrl: './create-solicitud.component.html',
  styleUrl: './create-solicitud.component.css',
})
export class CreateSolicitudComponent {

  constructor(
    private router: Router,
    private crudSolicitudService: CrudSolicitudService,
    private alertifyService: AlertifyService
  ) {}

  onSubmit(solicitud: Solicitud): void {
    this.crudSolicitudService.createSolicitud(solicitud).subscribe({
      next: () => {
        this.alertifyService.success('Solicitud Creada');
        this.router.navigateByUrl('/showSolicitud');
      },
      error: (error) => {
        this.alertifyService.error(error);
      }
    });
  }
}
