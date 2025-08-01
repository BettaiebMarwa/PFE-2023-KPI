// Add client
const AddClient=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into client set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({client:result,msg:'Client Ajouté avec succée'})}
    })
})

// Affichage 
const AfficherClient=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from client"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({clients:result})}
    })
})


const Modifier=((req,res)=>{
    let id=req.params.id
     // Requete SQL 
     let sql="update client set ? where id=?"
     //Execution de requete
     let params=[req.body,id]
     cnx.query(sql,params,function(err,result){
         if (err) console.log('Erreur Requete '+err)
         else {res.send({client:result})}
     })
 })
 
 const supprimer=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="delete from client  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({client:result})}
      })
  })
  
 
  const detail=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="select * from client  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({client:result[0]})}
      })
  })

export {AddClient,AfficherClient,Modifier,supprimer,detail}