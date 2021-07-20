# Pre-requisites
- Have git installed
- Have node installed
- Have this repo cloned

# How to run this project
1. Run `npm install` to gain the necessary packages to run this program (assumes you have npm)
1. open your favorite command line terminal
1. To run on http://localhost:3000, type `npm run start`
1. http://localhost:3000 should open in your default browser automatically, if not try navigating to that url in the chrome
1. to run on a custom port run `npx cross-env PORT=8080 react-scripts start` (replace 8080 with desired port number)

# To build this project for deployment
1. Run `npm install` to gain the necessary packages to run this program (assumes you have npm)
1. Run `npm run build` and the output you desire should be in the build directory

# To run this project with Docker
1. install docker for your machine [install here](https://docs.docker.com/get-docker/)
1. clone this directory using git
1. build via the command `npm run docker:build`
1. run via the command `npm run docker:run`
1. clicking on the link that pops up will take you to the site, alternatively going to http://localhost:3000 in your browser manually will also work


# Assumptions
- The API requires a namespace in addition to the key for the API requests. I chose an arbitrary namespace in this case because one was not specifified in the documentation given (normally I'd ask my lead or Product owner for such details but as this is a test I feel such measures are unecessary)
- As I do not know the use case for said project I cannot extrapolate whether or not such functionality (multiplication, division, adding or subtracting in step) will ever be necessary and thus implementing any of it now would be pre-emptive overengineering and a waste of potential energy given the context.
- Also it would be strage to use something someone can publically add to for a lot of usecases so something to keep in mind I suppose

# Potential Expansions / Outstanding todo's
- Would probably good to have a debound on the API call just so the user can't spam
- Spinner/loader jumps the screen just a tad, would make it prettier but I'm tired
- It would be nice to make the site/component prettier/more functional but both of those depend on who its for
- If components were necessary anywhere here I couldn't tell you where. I suppose you might want the IncrementalCounter concept of this whole page as a widget or something so I made it a reusable component. But I wasn't about to make buttons or spinners from scratch which would also have been reusable components
- Test of some fashion would probably be good

