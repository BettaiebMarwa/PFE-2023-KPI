// Add Equipe
const Ajout=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into discussion set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({discussion:result})}
    })
})

// Get All Equipe
const Afficher=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from discussion"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({discussions:result})}
    })
})

const AfficherEtatNon=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from discussion where etat=0"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({discussions:result})}
    })
})

const displayDiscussion=((req,res)=>{
   
    // Requete SQL 
    let sql="update discussion set etat='1'"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({discussion:result})}
    })
})

const delletAllDiscussion=((req,res)=>{
   
    // Requete SQL 
    let sql="delete from discussion"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({discussion:result})}
    })
})

export {Ajout,Afficher,AfficherEtatNon,displayDiscussion,delletAllDiscussion}