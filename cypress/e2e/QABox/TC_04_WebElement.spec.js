describe('WEB ELEMENT COMMANDS - GET, CONTAIN & DOM TRAVERSING METHODS', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/cygetcontains.html')
    })

    it('Get - Single Element', () => {
        cy.get('input[name="Channel Name"]').type('QA Test')
        cy.get('input[name="date"]').type('2022-06-21')
    })

    it('GET - LIMIT SCOPE - EXAMPLE, SCOPE IS CHANGE TO FILEDSET(id = "GETCOMMAND)', () =>{
        //cy.get('button').click({multiple: true})
        cy.get('fieldset#GETCOMMAND').within(div =>{ 
            cy.get('button').click({multiple: true})
        })
    })

    it('GET - MULTIPLE ELEMENT - PART 1', () => {
        cy.get('button').should('have.length', '9')
        cy.get('button').first().click()
        cy.get('button').eq(1).click()
        cy.get('button').eq(-1).click()
        cy.get('button').last().click()
    })

    it('GET - MULTIPLE ELEMENT - PART 2', () =>{
        // OTHER DOM TRAVERSING METHODS ARE - children, closest, find, filter,
        // next, nextAll, nextUntil, prev, prevAll, prevUntil, siblings, not,
        // parent, parents, parentUntil, each
        cy.get('fieldset#GETCOMMAND').children().last().find(':checkbox').check({multiple: true})
        cy.get(':checkbox').parent().prev().find(':button').first().click()
        cy.reload()
        cy.get(':checkbox').eq(2).siblings(':checkbox').check({multiple: true})
        cy.reload()
        cy.get(':button').each(btn => {
            btn.hide()
        })
    })

    it.only('CONTAIN with Text', () => {

        cy.contains('SPAN ONE').click()

        cy.contains('SPAN TWO').click()
    })

    it('CONTAIN with Text & Selector', () => {
       // cy.contains('span', 'FIND ME').click()

        // cy.contains('button', 'FIND ME').click()

        cy.get('span:contains("FIND ME")').click()
    })

    it('CONTAIN with Value', () => {
        cy.get('form').contains('Submit the form').click()
    })

    it('CONTAIN with RegEx', () => {
        //cy.contains('Add').click() //Always click the first button

        cy.contains(/^add$/i).click() //Clicks the second button now
    })
    
    it.only('CONTAINS - Element preference order', () => {
        cy.contains('Search').click()
    })
})