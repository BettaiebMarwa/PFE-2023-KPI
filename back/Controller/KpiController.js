// Add Equipe
const Ajout=((req,res)=>{
    console.log(req.body)
    // Requete SQL 
    let sql="insert into kpi set ?"
    //Execution de requete
    cnx.query(sql,req.body,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({kpi:result,msg:'kpi Ajouté avec succée'})}
    })
})

// Get All Equipe
const Afficher=((req,res)=>{
   
    // Requete SQL 
    let sql="select * from kpi"
    //Execution de requete
    cnx.query(sql,function(err,result){
        if (err) console.log('Erreur Requete '+err)
        else {res.send({kpis:result})}
    })
})


export {Ajout,Afficher}