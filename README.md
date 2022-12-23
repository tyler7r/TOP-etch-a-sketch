# TOP-etch-a-sketch

This was my first project with Javascript where I am building an actual GUI. At first I struggled with how I wanted to create the grid in the first place. I used my knowledge of for loops and flexbox in order to create div elements w/ JS and not manually creating them in HTML. 

After I figured out how to populate the grid, I challenged myself to be able to color the grid with click and drag events and not just hover events. This is when I realized the power of setting a changeable variable, in this case "isDown" which allowed me to tell the code when my mouse was still being clicked. Then I added events for each click events for each button.

Once I had a simple framework down, where I could draw, erase and clear. It was time to work out the nagging issues. I wanted to be able to change the grid size. However, the prompts that I was initially using for the user to change pen or canvas color would bug out and repeat the same prompt multiple times before enacting the change. This is when I learned how to use input fields and also how to create events off of a user's input in these fields. This made the whole program look much cleaner as well as more functional.

I also struggled with how to remove previously created elements, replace them with a different number of cells while still maintaining all the functionality. This lead me to making a massive function that could be called on first load as well as everytime a new grid was created.

The final touch was figuring out the centering of the sketchpad, it took me trying a million different variations of flexbox alignment. Until, I finally just tried align-self. Sure enough that was the only line of code that I needed. Lol.

All in all, I'm proud of how this project tested me. I was able to create the bare minimum for this project without hitting too many knowledge barriers but I pushed myself to make the project cleaner and more user friendly. This led to more knowledge blocks that I had to overcome but I think ultimately made me a better programmer.