import { Role } from './role';

export class User {
  id: number;
  email: string;
  senha: string;
  nome: string;
  avatar: string;
  role: Role;
  token?: string;
  
  createUser(value: any) {
    this.email = value.email.value;
    this.senha = value.password.value;
    this.nome = value.name.value;
    this.role = Role.User;

  }
}
