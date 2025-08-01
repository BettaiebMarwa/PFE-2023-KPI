// Add Equipe
const AddEquipe=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into equipe set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({equipe:result,msg:'Equipe Ajouté avec succée'})}
    })
})

// Get All Equipe
const getAllEquipes=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from equipe"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({equipes:result})}
    })
})


const Modifier=((req,res)=>{
    let id=req.params.id
     // Requete SQL 
     let sql="update equipe set ? where id=?"
     //Execution de requete
     let params=[req.body,id]
     cnx.query(sql,params,function(err,result){
         if (err) console.log('Erreur Requete '+err)
         else {res.send({equipe:result})}
     })
 })
 
 const supprimer=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="delete from equipe  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({equipe:result})}
      })
  })
  
 
  const detail=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="select * from equipe  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({equipe:result[0]})}
      })
  })


export {AddEquipe,getAllEquipes,Modifier,detail,supprimer}