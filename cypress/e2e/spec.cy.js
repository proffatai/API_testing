describe('template spec', () => {
  let accessToken ='ODJiYzU2MTJkMWI5ODlhOGZhOTdmZGViMGQxMTAwYmVmZTVhNWFiNGUxZTIxMDA3NzYwMzMxODYyNjgzN2Y3MC8vLy8vLzE2NjIwMTUyNDk3Njc=';
  it('GET Request',()=>{
    for (let i=1; i<=10; i++)
    {
      cy.request({
       method:'GET',
       url:'https://api.veendhq.com/loans/schedule/'+i,
       headers:{
        'Authorization': 'Bearer ' +accessToken, 
        'x-tag': 'NzI0YzkyMDUyMjg0NTA1NDQxZTkwY2JjNzhiMGZiNDg4YWI5MzA5NzQ3Y2JjZDRlMWQzYWM1MzFjYzc4Yzc4Ny8vLy8vLzE2NjAyMTEzNDc1OTk='
      },
    }).then(response=>{
        expect(response.status).to.be.equal(200)
        cy.writeFile('result.json', response.body,{flag: "a+"})
        cy.writeFile('result.json', '\n\n\n',{flag: "a+"})
    })
  }
})
})