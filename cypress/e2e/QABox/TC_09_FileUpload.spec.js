describe("File Upload Suite", () =>{
    const file = "supper_man.jpeg"
    const file1 = "test_drag_drop.png"
    it.skip("Single File Upload - Light DOM", () =>{
        cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
        cy.get("input#file-upload1").attachFile(file);
        cy.get("span#fileName1").should("have.text","supper_man.jpeg");
    })

    it.skip("Single File Upload - Light DOM", () =>{
        cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
        cy.get("input#file-upload1").attachFile(file);
        cy.get("span#fileName1").should("have.text","cat.jpeg");
    })

    it.skip("Single File Upload - Light DOM - Different Name", () =>{
        cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
        cy.get("input#file-upload1").attachFile({
            filePath: file,
            fileName: "test_img.jpeg"
        });
        cy.get("span#fileName1").should("have.text","test_img.jpeg");
    })

    it.skip("Single File Upload - Shadow DOM", () => {
        cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
        cy.get("button").click();
        cy.get("input#file-upload2", {
            includeShadowDom: true
        }).attachFile(file);
        cy.get("span#fileName2",{includeShadowDom: true}).should(
            "have.text", 
            "supper_man.jpeg"
        );
    });

    it.skip("Single Upload File - Drag Drop", () => {
        cy.visit("https://css-tricks.com/examples/DragAndDropFileUploading/");
        cy.get("#file").attachFile(file1, {subjectType: "drag-n-drop"})
       // cy.get("div.box__success").should("contain.text", "Done!")
        cy.contains("Done!").should("be.visible")
    })


     it.only("Image File Upload - Drag Drop", () => {
         cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
         // cy.get("div#holder").attachFile(file);
        cy.get("div#holder").attachFile(file, { subjectType: "drag-n-drop" });
    });

    it("Multiple File Upload - Drag & Drop", () => {
        cy.visit("http://127.0.0.1:5500/Help%20Folder/fileupload.html");
        cy.get("input#file-upload2").attachFile()
    })
})