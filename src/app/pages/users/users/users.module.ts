import { RoleModule } from "src/app/models/role/role.module";

export interface UsersModule { 
  id: number;
  email: string;
  password: string;
  fullname: string;
  roles: RoleModule[];
}
export class UsersModule { 
  id!: number;
  email!: string;
  password!: string;
  fullname!: string;
  roles!: RoleModule[];
}
