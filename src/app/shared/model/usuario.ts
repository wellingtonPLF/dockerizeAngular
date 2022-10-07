import { Message } from "./message";

export class Usuario{
    idusuario!: number;
    name!: string;
    age!: number;
    gender!: string;
    messages: Array<Message> = new Array<Message>();
  
    constructor() {
    }
  }
  