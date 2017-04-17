
function SlideShow(mySlides, img, name)          
{
  this.mySlides = mySlides;
  this.image = img;
  this.name = name;
  this.slideIndex = 0;
  }

SlideShow.prototype.play = SlidePlay;  


function SlidePlay()       
{
  with(this)
  {
if(slideIndex < mySlides.length)
	    {
	    	document.getElementById(image).src = 
	    	mySlides[slideIndex];
	    	
	    	slideIndex++;

	    }
	    if(slideIndex == mySlides.length) slideIndex = 0;
		setTimeout(name+'.play()', 2000);
  	
  }
}