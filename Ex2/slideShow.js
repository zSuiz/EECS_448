 
var Pic = ["SlideShow/1.jpeg", "SlideShow/2.jpeg", "SlideShow/3.jpeg","SlideShow/4.jpeg", "SlideShow/5.jpeg", "SlideShow/6.jpeg"];

function Next()
{
   let Image = document.getElementById("image").getAttribute('src');
   if(Image == "SlideShow/1.jpeg")
   {      
      document.getElementById("image").src = "SlideShow/2.jpeg";      
   }
   else if(Image == "SlideShow/2.jpeg")
   {
      document.getElementById("image").src = "SlideShow/3.jpeg";
   }
   else if(Image == "SlideShow/3.jpeg")
   {
      document.getElementById("image").src = "SlideShow/4.jpeg";
   }
   else if(Image == "SlideShow/4.jpeg")
   {
      document.getElementById("image").src = "SlideShow/5.jpeg";
   }
   else if(Image == "SlideShow/5.jpeg")
   {
      document.getElementById("image").src = "SlideShow/6.jpeg";
   }
   else
   {
      document.getElementById("image").src = "SlideShow/1.jpeg";
   }

   
}


function Previous()
{

   let Image = document.getElementById("image").getAttribute('src');
   if(Image == "SlideShow/1.jpeg")
   {
      document.getElementById("image").src = "SlideShow/6.jpeg";
   }
   else if(Image == "SlideShow/6.jpeg")
   {
      document.getElementById("image").src = "SlideShow/5.jpeg";
   }
   else if(Image == "SlideShow/5.jpeg")
   {
      document.getElementById("image").src = "SlideShow/4.jpeg";
   }
   else if(Image == "SlideShow/4.jpeg")
   {
      document.getElementById("image").src = "SlideShow/3.jpeg";
   }
   else if(Image == "SlideShow/3.jpeg")
   {
      document.getElementById("image").src = "SlideShow/2.jpeg";
   }
   else
   {
      document.getElementById("image").src = "SlideShow/1.jpeg";
   }

}