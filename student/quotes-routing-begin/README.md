## 🚀 Lab - Adding a new route to our quotes app! - (45 min)

Using routes to mimic a multi-page effect is good and cool, but the example we just walked through is just the tip of the iceberg of what's possible when it comes to routes. Try adding routes to the Quotes React app in the lab folder.

As we do so, we'll do the following things:

- Set up the core of our app with a router that allows us to visit three pages: `Home`, `QuotesList`, and `SingleQuote`.
- Add a navigation that provides links to `Home` and `QuotesList`.
- Add a link to each individual quote in `QuotesList` that takes the user to a `SingleQuote` page.
- Make API calls based on what route we're on and what params have been passed.

For this lab you will add another route and another component.

- `npm install` to install the necessary dependencies.
- Add the necessary code to make the the `li's` of `Home` and `Quotes` in the `Header` component to render those pages accordingly.  
- Add a new route called `/about`.
- The about component should just have some basic info about your cohort and maybe a picture of it as well.
- After adding the component, add a link to the component in the header next to our other links.
- After adding the link, add a `<Route />` component that will match that route.

The final product should be the same as the app from the lecture with a full working for all the links in Header.

# References

- [A Simple React Router Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
