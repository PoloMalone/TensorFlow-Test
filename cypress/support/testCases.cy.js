
export function assignment() {

  it('Executes 1-10 steps', () => {
    //1 - Go to website
    cy.visit('https://playground.tensorflow.org')

    //2 - Print loss-test value in console
    printLossTestVal()

    //3 - Change dataset to exclusive
    cy.get('[title="Exclusive or"] > .data-thumbnail').click()

    //4 - Change dataset to exclusive
    cy.get('.ui-noise > label > .value').type('1')
    cy.get('.ui-noise > label > .value').invoke('text', '5')
    cy.get('#noise').invoke('val', 5).trigger('change');

    //5 - Select two more features
    cy.get('#canvas-xSquared > div > canvas').click()
    cy.get('#canvas-ySquared > div > canvas').click()

    //6 - Remove neurons
    cy.get('.ui-numNodes1 > :nth-child(2)').click()
    cy.get('.ui-numNodes2 > :nth-child(2)').click()

    //7 - Change learning rate to 0.1
    cy.get('#learningRate').select('0.1')

    //8 - Click to run simulation
    cy.get('#play-pause-button').click()

    //(9 - 10) - Wait until more than 0.3, print loss-test value, stop simulation
    cy.wait(5500)
    printLossTestVal()
    cy.get('#play-pause-button').click()

  });
}

function printLossTestVal(){
  cy.get('#loss-test').then(($value) => {
    const lossValue = $value.text(); 
    console.log(lossValue); 
  });
}

