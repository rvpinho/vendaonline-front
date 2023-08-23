

export class compras{
    id:number;
    usuario_id:number;
    endereco_id:number;
    produto_id:number;
    produto_qtd:number;
    date:Date;
    created_at:Date;
    updated_at:Date;

    createCompra(data){
        this.date = new Date;
    }
}


