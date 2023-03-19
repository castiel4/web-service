 cálculo do pacote ;

importar  java . . _ Data ;
importar  javax . jws . WebService ;

@WebService ( endpointInterface = " calc.CalculadoraServer" )
public  class  CalculadoraServerImpl  implementa  CalculadoraServer {

  public  double  soma ( double  num1 , double  num2 ) {
    retornar  num1 + num2 ;
  }

  public  double  subtração ( double  num1 , double  num2 ) {
    retornar  num1 - num2 ;
  }

  public  double  multiplicacao ( double  num1 , double  num2 ) {
    retorna  num1 * num2 ;
  }

  public  double  divisao ( double  num1 , double  num2 ) {
    retornar  num1 / num2 ;
  }

}