import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario:usuario = new usuario();
  nome: string;
  tel:string;
  email:string;
  senha:string;

  constructor(private srv:UsuarioService) { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.usuario);
    this.srv.insere(this.usuario).subscribe(res=>{
      alert("Inserido com SUCESSO");
      this.nome = "";
      this.tel = "";
      this.email = "";
      this.senha = "";
    },
    error=>{
      alert("Erro ao inserir");
    })
  }
}
