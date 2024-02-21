//importamos modelo
import BlogModels from "../models/BlogModels.js";

//** Metodos para el crud **//

//mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModels.findall()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = BlogModels.findall({
            where: {
                id: req.params.id
            }
        })
        res.json(blog)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModels.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModels.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "Registro actualizado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        BlogModels.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "Registro eliminado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}