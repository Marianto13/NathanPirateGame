class Boat {
    constructor(x, y, width, height, boat_position, boat_animation) {
        var options = { restitution: 0.5, friction: 1.0, density: 1.0 }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.w = width
        this.h = height
        this.animation = boat_animation
        this.speed= 0.05
        //this.image=loadAnimation("assets/Boat_Animation/sprite_0.png", "assets/Boat_Animation/sprite_1.png", "assets/Boat_Animation/sprite_2.png", "assets/Boat_Animation/sprite_3.png", )
        this.image = loadImage("assets/Boat_Animation/sprite_2.png")
        this.boat_pos = boat_position
        World.add(world, this.body)
    }
animate(){
this.speed+=0.05



}




    show() {
        var pos = this.body.position
        var angle = this.body.angle;
        var i =floor( this.speed % this.animation.length)

        push()
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.animation[i], 0, this.boat_pos, this.w, this.h)
        pop()
    }


    remove(index2) {
        this.animation = brokenboatAnimation;
    this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    this.isBroken = true;
        setTimeout(() => {
            Matter.World.remove(world, boats[index2].body);
            //delete boats[index2]
            boats.splice(index2, 1);
        }, 1000)




    }













}
