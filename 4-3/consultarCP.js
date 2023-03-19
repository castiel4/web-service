const  { consultCP }  =  require ( "correios-brasil" ) ;

constcep  = " 55636000  " ;  

consultarCP ( cep ) . então ( ( resposta )  =>  {
  console . log ( resposta ) ;
} ) ;