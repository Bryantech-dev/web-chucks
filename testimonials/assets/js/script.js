

const Testimonial = [

    {
        name:"hacker 50",
        photoUrl:"assets\\img\\amongst-earthy-tones.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ex magnam voluptatem!"
    },

    {
        name:"hacker 55",
        photoUrl:"assets\\img\\chef-jean-paul-and-his.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ex magnam voluptatem!"
    },
    {
        name:"hacker 57",
        photoUrl:"assets\\img\\chef-jean-paul-presentation copy.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ex magnam voluptatem!"
    },

]


const Image = document.querySelector("img")
const ImageText = document.querySelector(".test")
const Author = document.querySelector("h4")



let index = 0;

ypdate()

function ypdate(){
   
    const{name,photoUrl,text}  =  Testimonial[index];
    Image.src=photoUrl;
    ImageText.innerText = text;
    Author.innerText = name;
    index++
    if(index === Testimonial.length){
        index=0;
    }
    setTimeout(()=>{
        ypdate()
    },2000)

}

