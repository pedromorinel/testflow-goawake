class goAwakeLinks {
    goAwakeLogin() {
        cy.visit('https://login-qa.goawakecloud.com.br/pt-br/goawake?cc=true');
    }
    goAwakeNoCaptcha() {
        cy.request({
            method: 'POST',
            url: 'https://api-qa.goawakecloud.com.br/api/no-recaptcha/login',
            body: {
                username: 'p.morinel',
                password: 'PedroCM101.'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const token = response.body.token;
            cy.log('Token: ' + token);
            cy.visit('https://qa.goawakecloud.com.br/#/auth/external?t=' + token);
        })
    }
    goAwakeGestao() {
        cy.request({
            method: 'POST',
            url: 'https://api-qa.goawakecloud.com.br/api/no-recaptcha/login',
            body: {
                username: 'p.morinel',
                password: 'PedroCM101.'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const token = response.body.token;
            cy.log('Token: ' + token);
        cy.visit('https://gestao-qa.goawakecloud.com.br/#/auth/external?t=' + token + '&o=goawake&l=pt-br')
        })
    }   
    goAwakeSignature(auditId) {
        cy.visit('https://qa.goawakecloud.com.br/#/pages/ui-alarms/audit/media/' + auditId)
    }
}

export default new goAwakeLinks();