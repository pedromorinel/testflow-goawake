class goAwakeLinks {
    goAwakeLogin() {
        cy.visit('https://login-qa.goawakecloud.com.br/pt-br/goawake?cc=true');
    }
    goAwakeNoCaptcha() {
        cy.visit('https://qa.goawakecloud.com.br/#/auth/external?t=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwLm1vcmluZWwiLCJpc3MiOiJnb2F3YWtlLXBvcnRhbCIsImV4cCI6MTY5Njg5MjgwODY1MiwidXNlciI6eyJpZCI6MzE1MSwiZnVsbE5hbWUiOiJQZWRybyBNb3JpbmVsIn19.Pqif2cXA3Iy4nBzeYzEGqsnqXQhow1xneOfWiB28HX8');
    }
    goAwakeGestao() {
        cy.visit('https://gestao-qa.goawakecloud.com.br/#/dashboard/home')
    }
}

export default new goAwakeLinks();