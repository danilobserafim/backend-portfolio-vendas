export class CreateBudgetDto {
  nome: string;
  email: string;
  descricao: string;
  typeId: string;
  statusId:string;
  status?:{
    name:string,
    description:string
  }
}
