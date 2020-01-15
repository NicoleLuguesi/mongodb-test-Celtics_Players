const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nick:Rhino9494@testing-mongodb-su8ip.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
const course = new Course({
    name: "Node.js Course",
    author: 'Bren',
    tags: ["angular","backend"],
    isPublished: true,
    price: 15
});

const result = await course.save();
//console.log(result);
}

async function getCourses() {
    return await Course
    .find( { author: 'Mosh', isPublished: true })
    .limit(10)
    .sort({name: 1})
    //console.log(courses);
}

async function displayCourses() {
    const courses = await getCourses();
    console.log(courses);
}

//displayCourses();

//Query first
async function updateCourse(id) {
    const course = await Course.findById(id);
    if(!course) return;
    course.set({
        isPublished: true,
        author: 'Arnell Millhouse'
    });
    const result = await course.save();
    console.log(result);
}

//updateCourse('5e1cb30f76d4ce38b713a594');


async function removeCourse(id) {
    //const result = await Course.deleteOne({_id: id });
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}

//removeCourse('5e1cb30f76d4ce38b713a594');

createCourse();
//getCourses();