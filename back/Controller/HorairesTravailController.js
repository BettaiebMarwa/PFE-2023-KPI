// Add Equipe
const Ajout=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into horairetravail set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({horaire:result,msg:'Horaire Ajouté avec succée'})}
    })
})

// Get All Equipe
const Afficher=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from horairetravail as h , ticket as t, developpeur as d where h.ticket=t.id  And t.developpeur=d.id_developpeur "
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({horaires:result})}
    })
})


export {Ajout,Afficher}