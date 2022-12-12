<img src="https://media.giphy.com/media/lArvz2jS2VnxMnLgvt/giphy.gif" width="100%">

# Pat the cat

Another useless website. Pick your cat, pat your cat. Good luck... Have fun!

[Pat the cat](https://patthecat.netlify.app/)

# Installation

Open the index.html in a browser.

# Code Review

1. `index.html, layingcat.html, standingcat.html` - I think you could have skipped having 3 html documents and just one html document by toggling between 2 classes where one had display: none and one with display:flex or something similar. So for instance when u chose one of the cats in the index.html depending on which cat the user clicked you could use ur class that toggles on a class named for instance hidden (with display:none) for the previous layout (index.html section that should dissapear) while toggling on a class named display (with for instance display:flex) for the new section that u want diplayed (for instance the laying cat section). It's not a problem to have 3 html files like you have but u could have achieved it with one :). I noticed now that u have this nice funtion setElementDisplay which could have achieved what I talked about above:)

2. `index.css, cat.css, standingcat-buttons.css, layingcat-buttons.css ` - There is some repition by having all these different css files, for instance in each of these css documents u have to write the same code and proporties for buttons (what I can see at a quick glance they have the same values between the different files). Some repition also occurs with the classes for buttons on each body part (for instance .button-left-ear {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}) between the layingcat-buttons.css and standingcat-buttons.css. But i also see that these classes have different positions in the html document depending if u chose the laying cat or standing cat, but u could just give these different classnames like .button-standingCat-left-ear and .button-layingCat-left-ear. 

3. `standingcat-buttons.css, layingcat-buttons.css ` - There is alot of repitionen among the classes with the (position:absolute), here u could just write like u have done previously by writing all classes that should have display none in one go instead of having to repeat ur self on each class that it should be (position:absolute). 

4. `index.css, cat.css` - Here is also some repition regarding the font face and the main values between these two css files. 

5. I think u did a really good job with alot of clean code, as u see my remarks are mainly regarding repition because that was the only thing I could see as something to remark over. I think you could avoided this by having a different structure for this project where you just had one html document and css files paired to only that html file! 

Great job Siri, you should be proud of yourself :) // Simon Lövbacka

# Testers

Tested by the following people:

1. Axel Enghamre
2. Petter Jakobsson
