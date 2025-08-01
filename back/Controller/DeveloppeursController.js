// Add Developpeur
const AddDeveloppeur=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into developpeur set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({developpeur:result,msg:'Developpeur Ajouté avec succée'})}
    })
})

// Affichage 
const Afficher=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from developpeur as dev , equipe as e where dev.equipe=e.id"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({developpeurs:result})}
    })
})

const Modifier=((req,res)=>{
    let id=req.params.id
     // Requete SQL 
     let sql="update developpeur set ? where id_developpeur=?"
     //Execution de requete
     let params=[req.body,id]
     cnx.query(sql,params,function(err,result){
         if (err) console.log('Erreur Requete '+err)
         else {res.send({developpeur:result})}
     })
 })
 
 const supprimer=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="delete from developpeur  where id_developpeur=?"
      //Execution de requete
      console.log('Id Dev ======= '+id)
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({developpeur:result})}
      })
  })
  
 
  const detail=((req,res)=>{
     let id=req.params.id
     console.log('Id dev '+id)
      // Requete SQL 
      let sql="select * from developpeur  where id_developpeur=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({developpeur:result[0]})}
      })
  })


export {AddDeveloppeur,Afficher,Modifier,supprimer,detail}