function Rectangle(x,y){
       return{
           length: x,
           width: y,
            perimeter: (2*x) + (2*y)
       }
   }

    function Rectanglearea( x,y){
       return{
           area: (x*y)
       }
   }

    function Rectanglepreimeter(x,y){
       return{
           perimeter: (2*x) + (2*y),
        }
   }

    console.log(Rectanglearea(3, 5));
    console.log(Rectanglepreimeter(3,5));
    console.log(Rectangle(3,5));