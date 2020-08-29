import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { IDtoUsuarios} from '../dto/idtoUsuarios';
import { UsuariosService } from './usuarios.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html', 
  providers: [UsuariosService],
  styleUrls: ['./usuarios.component.scss']
})


export class UsuariosComponent implements OnInit {
  usuarios: IDtoUsuarios[];
  displayedColumns: string[] = ['id', 'alias', 'nombre', 'apellido', 'rol', 'x'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute,private router:Router, private usuariosService: UsuariosService) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async ngOnInit() {  
    this.getUsuarios();
  }

   getUsuarios(): void {
     try{
      this.usuariosService.poolUsuarios()
      .subscribe(usuarios => {
        console.log(usuarios)
        this.dataSource = new MatTableDataSource(usuarios)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }catch(error){
      console.log(error)
    }
  }

  deleteUsuario(usuario: IDtoUsuarios): void {
    
    this.usuariosService.deleteUsuario(usuario.user_user).subscribe(data => {
        if(data.to_ge_rta.rta_boo){ 
          this.getUsuarios();
          alert(data.to_ge_rta.rta_msn)
        }else{
           alert(data.to_ge_rta.rta_msn)
        }
      });
  }
}