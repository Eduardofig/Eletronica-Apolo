export interface produtoProp {
    precoProduto:number;
    nomeProduto:string;
    descricaoProduto:string;
    imagemProduto:string;
    linkProduto:string;
};

export interface carrinhoProp {
    array:Array<produtoProp>;
}
