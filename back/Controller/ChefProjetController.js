// Add Equipe
const Ajout=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into chef_projet set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({chefProjet:result,msg:'chef Projet Ajouté avec succée'})}
    })
})

// Get All Equipe
const Afficher=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from chef_projet"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({chefProjets:result})}
    })
})


// Get All Equipe
const Modifier=((req,res)=>{
   let id=req.params.id
    // Requete SQL 
    let sql="update chef_projet set ? where id=?"
    //Execution de requete
    let params=[req.body,id]
    cnx.query(sql,params,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({chefProjet:result})}
    })
})

const supprimer=((req,res)=>{
    let id=req.params.id
     // Requete SQL 
     let sql="delete from chef_projet  where id=?"
     //Execution de requete
     
     cnx.query(sql,id,function(err,result){
         if (err) console.log('Erreur Requete '+err)
         else {res.send({chefProjet:result})}
     })
 })
 

 const detail=((req,res)=>{
    let id=req.params.id
     // Requete SQL 
     let sql="select * from chef_projet  where id=?"
     //Execution de requete
     
     cnx.query(sql,id,function(err,result){
         if (err) console.log('Erreur Requete '+err)
         else {res.send({chefProjet:result[0]})}
     })
 })
 

export {Ajout,Afficher,Modifier,detail,supprimer}