

//@desc      get all bootcamps
//@route     GET/api/v1/bootcamps
//@access    Public

exports.getBootcamps=(req,res,next)=>{
    
    res.status(200).json({ success: true, msg: "show all bootcamps" });

}
//@desc      get single  bootcamps
//@route     GET/api/v1/bootcamps/:id
//@access    Public

exports.getBootcamp=(req,res,next)=>{  
    res.status(200).json({ success: true, msg: `get single bootcamp  ${req.params.id}` });
}


//@desc      create  bootcamps
//@route     POST/api/v1/bootcamps/  
//@access    private 

exports.createBootcamp=(req,res,next)=>{  
    res.status(200).json({ success: true, msg: "create nw bootcamp" });
}

//@desc      update  bootcamps
//@route     PUT/api/v1/bootcamps/:id 
//@access    private 

exports.updateBootcamp=(req,res,next)=>{  
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });
}

//@desc      delete  bootcamps
//@route     Delete /api/v1/bootcamps/:id 
//@access    private 

exports.deleteBootcamp=(req,res,next)=>{  
    res.status(200).json({ success: true, msg: `delete bootcamp  ${req.params.id}` });
}