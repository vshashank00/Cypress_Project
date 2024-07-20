
class homepage{
   
    
    sendname(name){
         cy.get('div input[name ="name"]:nth-child(2)').type(name)
        

    }
    sendgender(){
        return cy.get('div select[id="exampleFormControlSelect1"]')
         
    }
    gotoshoppge(){
        return cy.get('li a').contains('Shop')
    }
     
}
export default homepage;