Hello There! ✌️

This is a small technical challenge for the Full-Stack Master Class at Hacker You. It is available here: https://beaus-seasonal-beers.netlify.com/


The challenge consisted in using the LCBO API to display some beers except Lug Tred. I did this using the where is_seasonal query parameter provided by the API.

I am also supposed to provide a description but most of the beers have no description available and some of them have no images available. What I did was to filter the beers that didn't have an image and explicitly mention that there is no description available when that is the case.

The next thing was to show the stores that carry each brand. I limited this to 3 stores per beer so that the list wouldn't be too long and I removed stores that did not have any inventory of that particular beer.

Finally, by clicking on the store address, the user can get directions to that store.

Cheers! 🍻