const { application } = require('express');
const request = require('supertest');
const expect = require('chai').expect;


describe('ServRest Cenários', () => {
    it('List all users', (done) => {
      request('https://serverest.dev')
        .get('/usuarios')
        .expect(200,done)
})

  it('List Specific user', () => {
    request('https://serverest.dev')
    .get('/usuarios')
    .send({"_id ": "xxxxx",})
    .end((err, res) => {
      expect(res.message).to.be.eq('Usuário não encontrado')
    
    })
  })
  
})
