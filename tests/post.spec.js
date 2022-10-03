const { application } = require('express');
const request = require('supertest');
const expect = require('chai').expect;


describe('ServRest Cenários', () => {
    
    it('Create User', () => {
        request('https://serverest.dev')
         .post('/usuarios')
         .send({
            "nome": "Bruno Test",
            "email": "brunootestt@qa.com.br",
            "password": "teste",
            "administrador": "true"
          })
          .set('Accept', 'application/json')
          .end((err, res) => {
          expect(res.body.message).to.be.eq('Cadastro realizado com sucesso')
          expect(res.statusCode).to.be.eq(201)

          })
    })
})
