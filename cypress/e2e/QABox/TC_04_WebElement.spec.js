describe('WEB ELEMENT COMMANDS - GET, CONTAIN & DOM TRAVERSING METHODS', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/cygetcontains.html')
    })

    it('Get - Single Element', () => {
        cy.get('input[name="Channel Name"]').type('QA Test')
        cy.get('input[name="date"]').type('2022-06-21')
    })

})