// Add Equipe
const Ajout=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into projet set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({projet:result,msg:'projet Ajouté avec succée'})}
    })
})

// Get All Projets
const Afficher=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from projet as p , equipe as e , developpeur as d where p.equipe=e.id and p.developpeur=d.id_developpeur "
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({projets:result})}
    })
})

const Modifier=((req,res)=>{
    let id=req.params.id
     // Requete SQL 
     let sql="update projet set ? where id=?"
     //Execution de requete
     let params=[req.body,id]
     cnx.query(sql,params,function(err,result){
         if (err) console.log('Erreur Requete '+err)
         else {res.send({projet:result})}
     })
 })
 
 const supprimer=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="delete from projet  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({projet:result})}
      })
  })
  
 
  const detail=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="select * from projet  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({projet:result[0]})}
      })
  })

  const AjoutAvis=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into avisclient set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({avis:result,msg:'Avis Ajouté avec succée'})}
    })
})

const AfficherAvis=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from avisclient as a, projet as p , client as c,developpeur as dev  where a.projet=p.id_projet and a.client=c.id and p.developpeur=dev.id_developpeur"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({avis:result})}
    })
})

export {Ajout,Afficher,Modifier,supprimer,detail,AjoutAvis,AfficherAvis}