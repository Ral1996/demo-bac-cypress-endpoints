
describe('Demo Inicial Endpoints para BAC', () => {

  // Obtenemos la base URL para utilizarla en cualquiera de las peticiones a validar.
  var host = Cypress.env('baseURL');

  // Validemos Metodo GET / Enpoint Funcionamiento Esperado.
  it("Endpoint De Tipo GET Con Parametros (Success)", () => {

    cy.api({
      method: 'GET',
      url: host + 'objects?id=3&id=5&id=10',
      headers: {},
      failOnStatusCode: true
    }).then((response) => {

      var arrayResponse = response.body;
      var statusCode = response.status;
      var arraySize = Object.keys(arrayResponse).length;
      
      if (arraySize <= 0) {
        cy.log('Status Code 200 - Advertencia: La peticion se esta ejecutando correctamente, pero no esta retornando informacion.').then(() => {
          expect(response.status).to.eq(200);
        });
        cy.screenshot();
      } else if (arraySize => 1) {
        //cy.log(statusCode);
        if (statusCode === 404) {
          cy.log('Status Code 404 - Error: No se encontró en el servidor.').then(() => {
            expect(response.status).to.equal(404);
          });
          cy.screenshot();
        } else if (statusCode === 500) {
          cy.log('Status Code 500 - Error: Se ha producido un error al intentar acceder al servidor').then(() => {
            expect(response.status).to.equal(500);
          });
          cy.screenshot();
        } else if (statusCode === 200){
          cy.log('Status Code 200 - Exito: Endpoint retornando informacion satisfactoriamente.').then(() => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            cy.log(JSON.stringify(response.body));
          });
          cy.screenshot();
        } else {
          cy.log('Error: El endpoint no esta retornando informacion correctamente, Status Code (Fuera de los solicitados).');
          cy.screenshot();
        }
      } else {
        cy.log('Error: El endpoint no esta retornando informacion correctamente.').then(() => {
          expect(response.body).to.not.be.null;
        });
        cy.screenshot();
      }
      

      
    });

  });

  // Validemos Metodo GET / Enpoint Funcionamiento Incorreto.
  it("Endpoint De Tipo GET Con Parametros (Failed)", () => {

    cy.api({
      method: 'GET',
      url: host + 'objects',
      headers: {},
      failOnStatusCode: true
    }).then((response) => {

      var arrayResponse = response.body;
      var statusCode = response.status;
      var arraySize = Object.keys(arrayResponse).length;
      
      if (arraySize <= 0) {
        cy.log('Status Code 200 - Advertencia: La peticion se esta ejecutando correctamente, pero no esta retornando informacion.').then(() => {
          expect(response.status).to.eq(200);
        });
        cy.screenshot();
      } else if (arraySize => 1) {
        //cy.log(statusCode);
        if (statusCode === 404) {
          cy.log('Status Code 404 - Error: No se encontró en el servidor.').then(() => {
            expect(response.status).to.equal(404);
          });
          cy.screenshot();
        } else if (statusCode === 500) {
          cy.log('Status Code 500 - Error: Se ha producido un error al intentar acceder al servidor').then(() => {
            expect(response.status).to.equal(500);
          });
          cy.screenshot();
        } else if (statusCode === 200){
          cy.log('Status Code 200 - Exito: Endpoint retornando informacion satisfactoriamente.').then(() => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            cy.log(JSON.stringify(response.body));
          });
          cy.screenshot();
        } else {
          cy.log('Error: El endpoint no esta retornando informacion correctamente, Status Code (Fuera de los solicitados).');
          cy.screenshot();
        }
      } else {
        cy.log('Error: El endpoint no esta retornando informacion correctamente.').then(() => {
          expect(response.body).to.not.be.null;
        });
        cy.screenshot();
      }
      

      
    });

  });

});