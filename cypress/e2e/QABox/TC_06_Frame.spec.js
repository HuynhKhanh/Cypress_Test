describe('Frame Suit', () =>{
    it('Type into the element inside a frame', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/iframePage.html')
        cy.get('input[name="Channnel Name"]').clear().type('QA test IFrame')
    });

    it('iFrame - type in the body - JavaScript Way', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').within(fr =>{
            const [myIframe] = fr.get()
            myIframe.contentDocument.body.getElementsByTagName('p')[0].textContent = 'Hello Mike, Please report to your boss asap'
        })
    })

    it('iFrame - type in body - jQuery Way', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').within(($frame) => {
            const body = $frame.contents().find('body#tinymce')
            cy.wrap(body).clear().type('Test Type With jQuery')
        })
    })

    it('Nested Frames - Fetch the text - JavaScript Way', ()=> {
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
        cy.get('frame[src="/frame_top"]').within($frame => {
            const [frame_top] = $frame.get()
            const text = frame_top.contentDocument.body.getElementsByTagName('frame')[1]
                .contentDocument.body.querySelector('div#content').innerText
            expect(text).to.be.eql('MIDDLE')
        })
    })

    it.only('Nested Frames - Fetch the text - jQuery Way', ()=> {
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
        cy.get('frame[src="/frame_top"]').within($frame => {
           cy.wrap($frame.contents().find('frame[src="/frame_middle"]')).within(fr => {
                cy.wrap(fr.contents().find('div#content')).should('have.text', 'MIDDLE')
           })
        })
    })
})