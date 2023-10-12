const UserLists=require('../models/user')


exports.getdata=async (req,res,next)=>{
try{
let totalUser=await UserLists.countDocuments()
let list=await UserLists.find().skip((parseInt(req.query.page)-1)*10).limit(10)
let page=parseInt(req.query.page)
currentPage=req.query.page
hasNextPage=10*page<totalUser
hasPreviousPage=page>1
nextPage=page+1
previousPage=function(){
    if((page-1)>0)return page-1
    else return null
}
lastPage=Math.ceil(totalUser/10)
limit=10
let pagination={
    totalDocs: totalUser,
    limit: 10,
    page: req.query.page,
    totalPages: Math.ceil(totalUser/10),
    pagingCounter: 1,
    hasPrevPage: page>1,
    hasNextPage: 10*page<totalUser,
    prevPage: previousPage,
    nextPage: page+1
}
res.status(200).json({data:{users:list,pagination:pagination}})

}
catch(err){
    res.status(500).json(err)
}


}

exports.addData=async (req,res,next)=>{
     try{
    let addData=await UserLists.create({Name:req.body.Name,Posts:req.body.Posts})
res.status(201).json(addData)
}catch(err){
    res.status(500).json(err)
}


}