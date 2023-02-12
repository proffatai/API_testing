describe('template spec', () => {
  
  before(()=>{
    cy.fixture('requirements.json').as('data')
  })
  it('GET Request',function (){
    for (let i=1; i<=this.data.maximum; i++)
    {
      cy.request({
       method:'GET',
       url:this.data.url+i,
       headers:{
        'Authorization': this.data.accessToken, 
        'x-tag': this.data.xtag
      },
    }).then(response=>{
        if(expect(response.status).to.be.equal(200))
        {
        cy.writeFile('result.json', response.body.data.user,{flag: "a+"})
        cy.writeFile('result.json', response.body.data.schedule,{flag: "a+"})
        cy.writeFile('result.json', '\n\n\n',{flag: "a+"})
      }
    })
  }
})
})