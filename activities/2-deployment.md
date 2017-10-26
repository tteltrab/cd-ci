# Travis CI Setup

For this activity, not only will we get our own repos set up to deploy to GitHub Pages, but we'll get them to do so continuously!

### Instructions

We're going to use [a test repo](https://github.com/tteltrab/testing-demo) as a starting point.

  1. Fork the test repository <https://github.com/tteltrab/testing-demo>.

  2. Go to [TravisCI](https://travis-ci.org/). It's free for public repositories.
     1. Create an account and/or log in and link your GitHub account.
     2. On your TravisCI profile page <https://travis-ci.org/profile/USERNAME>, enable Travis for the 'testing-demo' you just created.

  3. Go back to GitHub. Create a personal access token. [Github Token Settings](https://github.com/settings/tokens)

  4. Copy that token, and then go back to TravisCI.
     1. Go to the build settings <https://travis-ci.org/USERNAME/testing-demo/settings> for your forked repository.
     2. Create an environment variable with the key `GH_TOKEN` whose value is the token you just copied. 
        * This gives Travis permission to do the push to the `gh-pages` branch every time the build passes.
        * GitHub sees code in that branch and will deploy it for us automatically.

  5. Update the `.deploy.sh` file in your forked repository to be specific to your repository.
     * On line 14 (https://github.com/USERNAME/testing-demo/blob/master/.deploy.sh#L14) - `git config user.email "nbartlett7@gmail.com"` - change the email to your github email.
     * On line 21 (https://github.com/USERNAME/testing-demo/blob/master/.deploy.sh#L21) - `git push --force "https://${GH_TOKEN}@github.com/tteltrab/testing-demo.git" master:gh-pages > /dev/null 2>&1` - change the username (`tteltrab`) to your GitHub username.

  6. Make a change to your HTML page (add your name!).
     1. Then, commit and push your change to the repository on GitHub. 
       * You should see a Travis build kick off.
       * When the build is finished, you should have a deployed GitHub Pages website! (at <https://USERNAME.github.io/testing-demo>).
     * If you don't see your GitHub pages website at this point, try checking your settings on the GitHub repo for GitHub pages and Travis. If nothing seems obvious, call someone over.

As a final step, make a pull request with the changes you've made to the repository you forked from. And share the link to your deployed website with the class!

Bonus: Try forking your partner's repository, making a change, and then making a PR (they don't have to give you write access this time). Notice that you can see the builds for your changes to their repository.

### Note

Continuous delivery is the logical next step of continuous integration.

If the code in your shared main branch is good, continuous delivery automates the delivery process so that you can deploy your code to production at any time.

Continuous deployment is the next step after delivery, and that's what we're doing here. Instead of waiting for a human to decide what/when to deploy to production, we deploy everything that has made it through the pipeline.
