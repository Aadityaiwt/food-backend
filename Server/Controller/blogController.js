import Blog from '../Model/BlogModel.js'
import cloudinary from '../Config/clodinary.js'

export const addBlog = async(req, res)=>{
    try {
        const blog = await Blog.create({
        title:req.body.title,
        content:req.body.content,
        image:req.file.path,
        public_id:req.file.filename,
        
    })
    res.json(blog)
    } catch (error) {
        res.json(error)
    }
}

export const getSingleBlog = async(req, res)=>{
    try {
        const blog = await Blog.findById(req.params.id)
        res.status(200).json({
            success:true,
            data:blog
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "error fetching Blog",
            error:error.message
        })
    }
}

export const getBlog = async(req, res)=>{
    try {
        const blog = await Blog.find()
        res.status(200).json({
            success:true,
            data:blog
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "error fetching Blog",
            error:error.message
        })
    }
}

export const updateBlog = async(req, res)=>{
    try {
        const blog = await Blog.findById(req.params.id)
        if(req.file) {
        await cloudinary.uploader.destroy(blog.public_id)
        blog.file = req.file.path
        blog.public_id = req.file.filename
    }
        blog.title = req.body.title || blog.title
        blog.des = req.body.des || blog.des
        await blog.save()
        res.json(blog)
    } catch (error) {
        res.json({message:"error in updating data", error})
    }

}

export const deleteBlog = async(req, res)=>{
    try {
        const blog = await Blog.findById(req.params.id)
        await cloudinary.uploader.destroy(blog.public_id)
        await Blog.findByIdAndDelete(req.params.id)
        res.json({message:"blog Deleted"})
    } catch (error) {
        res.json("error deleting blog")
    }
}
