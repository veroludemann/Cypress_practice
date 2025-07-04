Feature: cucumber2

    # Esto es otra demo para utlizar cucumber con Cypress con las cosas parametrizadas
    # Scenario: Demo de cucumber 2
    #     Given Abrir la pagina de contacto
    #     When cargando el nombre Veronica
    #     When cargando el apellido Ludemann
    #     When cargando el email ve@mail.com
    #     When cargando el mensaje "este es un mensaje de prueba con más de cincuenta caracteres para que pase la validación"
    #     When cargando el subject
    #     When click en boton Send
    #     Then veo que se envio correctamente

    
    Scenario Outline: Demo de cucumber
        Given Abrir la pagina de contacto
        When cargando el nombre <name>
        When cargando el apellido <lastName>
        When cargando el email <email>
        When cargando el mensaje "<sms>"
        When cargando el subject
        When click en boton Send
        Then veo que se envio correctamente


        Examples:
        | name | lastName | email       | sms                                                                 |
        | Vero | Lude     | vero@mail   | este es un mensaje de prueba con más de cincuenta caracteres para que pase la validación |
        | Juan | Perez    | juan@mail   | otro mensaje también suficientemente largo para validar el campo   |