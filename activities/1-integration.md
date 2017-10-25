In this activity, we'll practice small-scale continuous integration on simple changes to an HTML file.

### Instructions

Person 1 and 2 should work together on each step, with the defined person driving.

1. Person 1 and 2 both drive: create/log in to your GitHub account 
2. Person 1 drives: create a git repository using GitHub. 
    1. Give 2 write access to the repository.
3. Person 2 drives: clone that git repository to your local machine
    1. Create a basic HTML file listing your favorite shows on Netflix.
    2. Push that HTML file to the shared repository
4. Person 1 drives: clone the repo
    1. Ensure you have the HTML file on your local machine
    2. Make a change to the list of shows
    3. Push the change back up to the shared repository
5. Spend the rest of the time simultaneously creating new "favorites" lists (movies, foods, celebrities) without talking to each other, and pushing up/pulling down the changes. You may have to deal with some conflicts! That's part of integration (and just development in general).

### Note
This is a simple example of making very small changes.

Instead of having two copies of an app with both people trying to write the whole thing, you have one shared copy of an app that both people are sharing and adding features to.

For example, if you both tried to write this HTML page from the ground up, and both tried to push, there would be a lot of integration and conflicts to fix. But because one person pushed the initial example, and the next worked solely on updating the list, the only potential conflicts are in the list itself.

This should hold true for part 5 as well - the more often you push and pull, the easier it will be to resolve conflicts across multiple lists.
