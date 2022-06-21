//const { symmetricDifference } = require("cypress/types/lodash/fp");

describe('Window Test Suit Commands', function() {
    before(() => {
        cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop")
    });

    it('Window test command - URI Properties', () =>{
        cy.window().should(win =>{
            const loc = win.location
            expect(loc.hash).to.eql('#/login?_k=g43dop')
            expect(loc.host).to.eql('react-redux.realworld.io');
            expect(loc.pathname).to.eql('/');
            expect(loc.protocol).to.eql('https:')
        })
    });

    it('Window Test Command - Reload', () =>{
        cy.window().should(win =>{
            win.location.reload()
        })
    });

    it('Window Test Command - Page Navigation', () =>{
        cy.contains('Sign up').click()
        cy.window().should(win =>{
            win.history.back()
        })
        cy.contains('Need an account?').should('be.visible')
        cy.window().should(win =>{
            win.history.forward()
        })
        cy.contains('Have an account?').should('be.visible')
    });

    it.only('Cy Test Command - URO Propeties', () =>{
        cy.hash().should('eq', '#/login?_k=g43dop')
        cy.location('host').should('eq', 'react-redux.realworld.io')
        cy.location('pathname').should('eq', '/')
        cy.location('protocol').should('eq', 'https:')
    });

    it.only('Cy Test Command - Reload', () =>{
        cy.reload()
    })

    it.only('Cy Test Command - Page Navigation', () =>{
        cy.contains('Sign up').click()
        cy.go('back')
        cy.contains('Need an account?').should('be.visible')
        cy.go('forward')
        cy.contains('Have an account?').should('be.visible')
    })

    it.only('Window Test Command - Storage', () =>{
        cy.window().should(win =>{
            expect(win.localStorage.length).to.eql(0);
            win.localStorage.setItem('Name', 'QA BOX LET\'S Test');
            expect(win.localStorage.getItem('Name')).to.eql('QA BOX LET\'S Test')
        })
    });

    it.only('Window Test Commands - Clear Storage', () => {
        cy.clearLocalStorage()
    })
})