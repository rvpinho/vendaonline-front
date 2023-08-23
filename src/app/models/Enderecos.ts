export class enderecos{
    id:number;
    usuario_id:number;
    rua:string;
    numero:number;
    bairro:string;
    cidadeId:number;
    telefone:string;
    created_at:Date;
    updated_at:Date;

    createEndereco(form: any) {
        this.rua = form.rua.value;
        this.numero = form.numero.value;
        this.bairro = form.bairro.value;
        this.telefone = form.telefone.value;
    }
}
