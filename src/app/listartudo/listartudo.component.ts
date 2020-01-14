import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { usuario } from '../model/usuario';

@Component({
  selector: 'app-listartudo',
  templateUrl: './listartudo.component.html',
  styleUrls: ['./listartudo.component.css']
})
export class ListartudoComponent implements OnInit {

  public users: usuario[];

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.recuperaTodos().subscribe((res:usuario[])=>{this.users=res;})
  }

}
