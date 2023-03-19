const  expresso  =  requer ( 'expresso' ) ;

const  servidor  =  expresso ( ) ;

servidor . use ( express . json ( ) ) ;

const  produtos  =  [ 'Iphone x' ,  'Xiaomi note 12 pro' ,  'Huawei' ] ;

//Retorna um aluno
servidor . get ( '/produtos/:index' ,  ( req , res )  =>  {
    const  { índice }  =  req . parâmetros ;

    return  res . json ( produtos [ índice ] ) ;
} ) ;

//Retorna todos os produtos
servidor . get ( '/produtos' ,  ( req , res )  =>  {
    return  res . json ( produtos )
} ) ;

//Adiciona um novo aluno
servidor . post ( '/produtos' ,  ( req , res )  =>  {
    const  { nome }  =  req . corpo ;
    produtos . push ( nome ) ;

    return  res . json ( produtos ) ;
} ) ;

//Atualizar a lista de produtos
servidor . put ( '/produtos/:index' ,  ( req , res )  =>  {
    const  { índice }  =  req . parâmetros ;
    const  { nome }  =  req . corpo ;

    produtos [ índice ]  =  nome ;
    return  res . json ( produtos ) ;
} ) ;

//Excluir aluno da lista
servidor . delete ( '/produtos/:index' ,  ( req , res )  =>  {
    const  { índice }  =  req . parâmetros ;

    produtos . emenda ( índice ,  1 ) ;
    return  res . json ( {  message : "O produto foi removido da lista" } ) ;
} ) ;

//rotas
//GET /produtos/:index e /produtos
//POST /produtos
//PUT /produtos/:index
//DELETE /produtos/:index

//STATUS HTTP: Todos tiveram o status 200.



servidor . ouvir ( 5050 ) ;