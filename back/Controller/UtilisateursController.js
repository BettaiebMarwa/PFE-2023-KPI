// Login
const Login=((req,res)=>{
   let role=req.body.role
   let table=''
   switch (role) {
    case 'client':table='client'
        break
    case 'developpeur':table='developpeur'
        break
    case 'utilisateur':table='utilisateur'
        break
    case 'administrateur':table='administrateur'
        break
    case 'chef Projet':table='chef_projet'
        break
   }

    // Requete SQL 
    let sql=`select * from ${table} where email=? And mot_de_passe=?`
    
  let params=[req.body.email,req.body.mdp]
    //Execution de requete
    cnx.query(sql,params,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {
            if(result!=''){ 
                result[0].role=role
                res.send({user:result[0]})
            }
            else {
                res.send({user:null})
            }
           
           }
    })
})

// Add Utilisateur
const AjoutUtilisateur=((req,res)=>{
   // Requete SQL 
    let sql=`insert into utilisateur set ?`
   
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {
            res.send({msg:'Utilisateur Ajouté avec succée'})
           }
    })
})

const Afficher=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from utilisateur"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({users:result})}
    })
})

const Modifier=((req,res)=>{
    let id=req.params.id
     // Requete SQL 
     let sql="update utilisateur set ? where id=?"
     //Execution de requete
     let params=[req.body,id]
     cnx.query(sql,params,function(err,result){
         if (err) console.log('Erreur Requete '+err)
         else {res.send({user:result})}
     })
 })
 
 const supprimer=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="delete from utilisateur  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({user:result})}
      })
  })
  
 
  const detail=((req,res)=>{
     let id=req.params.id
      // Requete SQL 
      let sql="select * from utilisateur  where id=?"
      //Execution de requete
      
      cnx.query(sql,id,function(err,result){
          if (err) console.log('Erreur Requete '+err)
          else {res.send({user:result[0]})}
      })
  })
  


export {Login,AjoutUtilisateur,Afficher,Modifier,supprimer,detail}