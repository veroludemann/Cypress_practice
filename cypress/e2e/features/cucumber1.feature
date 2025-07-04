Feature: cucumber1

    Esto es una demo como utlizar cucumber con Cypress

#   Background:
#     Given I open Google page

    Scenario: Demo de cucumber 1
    Given Abrir la pagina de contacto
    When cargando el nombre 
    When cargando el apellido 
    When cargando el email
    When cargando el mensaje
    When cargando el subject
    When click en boton Send
    Then veo que se envio correctamente
    # Then validar titulo de la pagina
    # Then I see "Contact Us - Practice Software Testing - Toolshop - v5.0" in the title

    # Scenario: Opening a search engine page
    # Given I open Google page
    # Then I see "Google" in the title
