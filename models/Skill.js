const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Programming Language', 'Database', 'Framework', 'Tool']
    },
    icon: {
        type: String,
        reguired: true
    },
});

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;
