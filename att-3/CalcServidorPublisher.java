  cálculo do pacote 

importar  javax . xml . ws . ponto final ;

public  class  CalculadoraServerPublisher {

  public  static  void  main ( String [] args )
  {
    Ponto final . publicar ( "http://127.0.0.1:8080/calc" ,
    new  CalculadoraServerImpl ());
  }
}
