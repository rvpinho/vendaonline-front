export class produtos{
    
    id:number;
    descricao:string;
    valor_unitario:number;
    created_at:Date;
    updated_at:Date;

    createProduto(form: any) {
        this.descricao = form.descricao.value;
        this.valor_unitario = form.valor_unitario.value;
    }
}
