import {Role} from "./role";

export class Hero {
  id: number;
  name: string;
  description: string;
  health: number;
  armour: number;
  shield: number;
  real_name: string;
  age: number;
  height: number;
  affiliation: string;
  base_of_operations: string;
  difficulty: number;
  role: Role;
  image: string;
}
