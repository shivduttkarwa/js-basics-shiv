 const tinderUser = {}
    

 tinderUser.id = "123abc"
 tinderUser.name = "Raj"
 tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raj",
            lastname: "Kumar"
        }
    }
}
//  console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
 const obj3 = {...obj1, ...obj2}
//  console.log(obj3);

 const users = [
    {
        id: 1,
        email: "r@gmail.com"
        },
       { id: 2,
        email: "p@gmail.com"
        },
        {
        id:
        3,
        email: "w@gmail.com"
        }
    ]

    users[1].email
    // console.log(tinderUser);
    // console.log(Object.keys(tinderUser));
    // console.log(Object.values(tinderUser));
    // console.log(Object.entries(tinderUser));
    // console.log(tinderUser.hasOwnProperty('isLoggedIn'));
    
    
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}   
// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } 
