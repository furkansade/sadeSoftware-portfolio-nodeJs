const Blog = require('../../models/Blog');
const fs = require('fs');


exports.getBlogsPage = async (req, res) => {
    const blogs = await Blog.find();

    res.status(200).render('admin/blogs', {
        pageName: 'blogs',
        blogs
    });
}

exports.createBlog = async (req, res) => {
    try {

        let uploadImage = req.files.image;
        let uploadPath =
          __dirname + "/../../public/site/img/uploadBlogs/" + uploadImage.name;
    
        uploadImage.mv(uploadPath, async () => {
          await Blog.create({
            ...req.body,
            image: "/site/img/uploadBlogs/" + uploadImage.name,
          });
      
          res.status(201).redirect("/admin/blogs");
        });
      } catch (error) {
        res.status(400).redirect("/admin/blogs");
        console.log(error);
      }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    blog.title = req.body.title;
    blog.description = req.body.description;
    blog.markdown = req.body.markdown;
    blog.save();

    res.status(200).redirect("/admin/blogs");

    
  } catch (err) {
    res.status(500).send("Error!");
  }
};

exports.deleteBlog = async (req, res) => {
  try {

    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      res.status(404).send("Blog not found!");
      return;
    }

    let image = deletedBlog.image;

    if (!image) {
      res.status(400).send("Image not found!");
      return;
    }

    let imagePath = __dirname + "/../../public/" + image;
    fs.unlinkSync(imagePath);

    res.status(200).redirect("/admin/blogs");
  } catch (err) {
    res.status(500).send("Error!");
  }
};
