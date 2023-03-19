 cálculo do pacote ;

importar  javax . jws . WebService ;
importar  javax . jws . WebMethod ;
importar  javax . jws . sabão . SOAPBinding ;
importar  javax . jws . sabão . SOAPBinding . Estilo ;

@ ServiçoWeb
@ SOAPBinding ( estilo = Estilo . RPC )
public  interface  CalculadoraServidor {
  @ WebMethod  double  soma ( double  num1 , double  num2 );
  @ WebMethod  double  subtracao ( double  num1 , double  num2 );
  @ WebMethod  double  multiplicacao ( double  num1 , double  num2 );
  @ WebMethod  double  divisao ( double  num1 , double  num2 );
}