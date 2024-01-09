const Skill = require('../../models/Skill');

exports.createSkill = async (req, res) => {
    try {

        let uploadIcon = req.files.icon;
        let uploadPath =
          __dirname + "/../../public/site/img/uploadSkillsIcon/" + uploadIcon.name;
    
        uploadIcon.mv(uploadPath, async () => {
          await Skill.create({
            ...req.body,
            icon: "/site/img/uploadSkillsIcon/" + uploadIcon.name,
          });
      
          res.status(201).redirect("/admin/skills");
        });
      } catch (error) {
        res.status(400).redirect("/admin/skills");
        console.log(error);
      }
};

exports.deleteSkill = async (req, res) => {
    await Skill.findByIdAndRemove({ _id: req.params.id });

    res.status(200).redirect("/admin/skills");
};
