const  { CaldePrecoPrazo }  =  require ( 'correios-brasil' ) ;

 deixe  args  =  {
  sCepOrigem : '55636000' ,
  sCepDestino : '55644010' ,
  nVlPeso : '5' ,
  nCdFormato : '1' ,
  nVlComprimento : '200' ,
  nVlAltura : '200' ,
  nVlLargura : '200' ,
  nCdServiço : [ '04014' ,  '04510' ] , 
  nVlDiametro : '0' ,
} ;

CaldePrecoPrazo ( args ) . então ( resposta  =>  {
  console . log ( resposta ) ;
} ) ;