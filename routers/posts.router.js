import express from "express";

const routerPosts = express.Router()

routerPosts.get("/", (req, res) => {
    res.json({msg: "Hola desde el blog xd"})
});

routerPosts.get("/:id", (req, res) => {
    const { id } = req.params;

    res.json({postID: id});
})
routerPosts.post("/", (req, res) => {
    const data = req.body;

    res.json(data);
})
routerPosts.patch("/:id", (req, res) => {
    const { id } = req.params;
    res.json({msg: "El post a actualizar es" + id})
})
routerPosts.delete(":id", (req, res) => {
    const { id } = req.params;
    res.json({msg: "El post a eliminar es" + id})
})

export {
    routerPosts
}