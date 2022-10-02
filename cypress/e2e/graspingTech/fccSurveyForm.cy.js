describe('FreeCodeCamp SurveyForm ', () => {
    before(() => {
      cy.visit('https://grasping-tech.surge.sh/fccChallenges/respWebDesignSurveyForm.html')
    })
  
    context('Initial implementation', () => {
      it('sees the title', () => {
      cy.get('#title').contains("freeCodeCamp Survey Form")
    })
    it('sees a field to enter a name',()=>{
      cy.get('#name').then(($el)=>{
        expect($el).to.have.attr('placeholder', 'Enter your name')
      })
    })
    it('sees a field to enter an email', ()=>{
      cy.get('#email').then(($el)=>{
        expect($el).to.have.attr('placeholder', 'Enter your email')
      })
    })
    it('sees a field to enter a number', ()=>{
      cy.get('#number').then(($el)=>{
        expect($el).to.have.attr('placeholder', 'Enter a random number')
      })
    })
    it('sees a dropdown to select a color', ()=>{
      cy.get('#dropdown').select('Blue')
    })
    it('sees a pair of radio buttons')
    it('sees a set of checkboxes')
    it('sees a text area', ()=>{
      const phText = 'Tell me something about yourself'
      cy.get('textarea').then(($el)=>{
        expect($el).to.have.attr('placeholder', phText)
      })
    })
    it('sees a Submit button',()=>{
      cy.get('#submit')//.should('contain', 'Submit')
    })
})
context('Improved version', ()=>{
  it('sees a field to enter a name')
  })
})
