// importamos la conexion de la bd
import db from '../database/db.js';
//importamos sequelize
import Datatypes from "sequelize";

const BlogModels = db.define('blogs', {
    title: { type: Datatypes.STRING },
    content: { type: Datatypes.STRING }
})

export default BlogModels