/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue', () => {
    beforeEach(() => {
        cy.login()
        cy.gui_createProject(issue.project)
    })

    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }
    
    it('successfully', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
          .should('contain', issue.title)
          .and('contain', issue.description)

    })
})