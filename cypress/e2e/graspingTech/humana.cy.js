describe('test to see how much you remember', ()=>{
    let username, password
    context('Login sample',()=>{
        before(()=>{
            cy.request('GET','https://pokeapi.co/api/v2/pokemon/4')
            .its('body.species.name')
            .then((name)=>{
                username = name
                cy.log(username)
                //username = response.body.species.name could do this instead of .its()
                cy.log(`Username is: ${username}`)

                cy.request('GET','https://pokeapi.co/api/v2/pokemon/7')
            })
            .then((response)=>{    
                password = response.body.types[0].type.name
                cy.log(`Password is: ${password}`)

                const luckyNumber = response.body.base_experience
                cy.log(luckyNumber)


                cy.request('GET','https://pokeapi.co/api/v2/pokemon/').its('body.results')
            })
            .then((pokemons)=>{
                const targetPokemon = pokemons.find((pokemon)=> pokemon.name = "charizard")
                cy.log(targetPokemon)
                username = targetPokemon.name
                cy.log(username)

                cy.request('GET','https://pokeapi.co/api/v2/pokemon/').its('body.results')
            })
            .then((individuals)=>{
                const title = individuals.find((individual)=> individual.name = "pidgey").name
                cy.log(title)

                cy.visit('https://www.humana.com')
            })
        })
        it('sees a login button and clicks it',()=>{
            cy.get('.sign-in-button-container').click()
        })
        it('is on the login page',()=>{
            cy.url().should('eq','https://account.humana.com/')
            cy.title().should('eq','HUMANA - Sign in')
        })
        it('types in a username and password',()=>{
            cy.get('#nucleus-form-field-0-element').type(username)
            cy.get('#nucleus-form-field-1-element').type(password)
        })
        it('clicks the Sign In button and gets an error',()=>{
            cy.wait(500)
            cy.get('form > .adj-button-primary').click()
            cy.url().should('eq','https://account.humana.com/404')
            cy.get('.maintenance-message-wrapper').contains("Oops - that wasn't supposed to happen.")
            //cy.wait(500)
            //cy.get('.login-errors').contains('The following items require your attention.')
        })
    })
})