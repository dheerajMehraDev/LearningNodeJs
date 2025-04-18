
class Movie{
    constructor(year,director,actor,genre,rating){
        this.year = year;
        this.director = director;
        this.actor = actor;
    }
    getInfo(){
        console.log(`this movie was release by ${this.year} by the direactor ${this.director}`);
    } 
    // isClassic(){
    //     if(this.year > 2005) return true;
    //     return false;
    // }
}
const movie = new Movie(1999 , "dheeraj mehra" , "mehra dheeraj" , "thriller" , "5");