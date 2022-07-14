describe('Pop Up Test Suit', () => {
    before(() => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/differentalerttypes.html')
    })

    it('Alert - First Way', () => {
        cy.on('window:alert', alertText => {
            expect(alertText).to.eql('I\'m an Alert Box')
        })
        cy.get('button#alert').click()
    });

    it('Alert - Second Way - Multiple Alerts', () => {
        const fn = cy.stub()
        cy.on('window:alert', fn)
        cy.get('button#miltiplealert').click().then(() => {
            expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
        })
    });
ô
    it('Confirm - First Way', () => {
        cy.on('window:confirm', confirmTxt => {
            expect(confirmTxt).to.eql('I\'m a Confirm Box')
            //return false
        })
        cy.get('button#confirm').click()
    });

    it('Confirm - Second Way', () => {
       const stub = cy.stub()
       stub.onFirstCall().returns(true)
       cy.on('window:confirm', stub)
       cy.get('button#confirm').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWithExactly('I\'m a Confirm Box')
       })
    });

    it('Promt', () => {
        cy.window().then(win => {
            const stub = cy.stub(win, 'prompt')
            stub.returns('Kennit')
            cy.get('button#prompt').click()
        })      
    });

    it('Custom Popup Dialog From Hidden Fields', () =>{
        cy.get('button#cusdiag').click()
        cy.get('input#name').type('Minh Khanh')
        cy.get('input#password').type('Minh Khanh Passs')
        cy.contains('Submit').click()
    });

    it('Custom Popup Dialog From Function', ()=> {
        cy.get('button#moddiag').click()
       // cy.contains('Ok').click()
        cy.contains('Close').click()
    })

    it('Window pop up', () => {
        const pop_url = "https://www.youtube.com/c/qaboxletstest/"
        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowopen')
        })
        cy.get('button#winpop').click()
        cy.get('@windowopen').should('be.calledWith', pop_url)
        cy.window().then(win => {
            win.location.href = pop_url
            cy.get('input#search').type('Cypress by qa box lets test{enter}')
        })
    });
})