
# Objectives restated
- Make a site, locally hostable, that pings a counting API and can add to a counting API
- Runnable on a single command
- Solutions.md that provides relevant documentation on how to build/run the solution
## Nice to haves
- Dockerfile to run and serve the web application (if I have time/interest)
- Components are reusable
- configurable port and documentation in solution.md
- Implement other features to demonstrate your skills
## Other things I specifically want/thoughts on expansion
- Loading spinner for delay while API responseds
- Unit tests in Jest potentially
- Include fearless logo at the top or the purple cow somewhere on the page
- Clean git branching and such -> new feature branch for each part of the design, merged back into master one at a time
- Might depend on context (obviously) so may be over engineering based on the problem at hand but could add other API call stuff to the docket

# Design
- Backend
    - Can make the get requests for the API data, for count
    - Can make a post for the API data to increase

- Frontend
    - Make a reusable button component (or import one)
    - Make a reusable loading/spinner component (or import one)
    - Grab fearless logo
    - Make some basic but nice colors/container for the display section for the number of hits currently

- Extras
    - Jest testing
    - more options for API callbacks/operations
    - Docker stuff



# Double Checking checklist
## Must Haves
[x] - Web Application that usese javascript and HTML that is served on port 3000

[x] - Use the https://countapi.xyz/ api to manage counting with api key as noted in doc

[x] - Provide a single button to "hit" the counting api and display the current number of hits

[x] - Runs locally with a single startup command

[x] - Should run correctly in Chrome; don't worry about cross browser compatibility

[x] - Includes a solution.md that provides relevant documentation including how to build and run the solution

## Nice to Haves
[x] - Includes a Dockerfile that will run and serve the web application

[x] - Any components are reusable (although there aren't really opprotunities for this lowkey)

[x] - The port the solution is served on is confirugable and documented in the solution.md

[~] - Implement other features that demonstrate your skill (Using UI library, doing spinners and conditional rendering, hard to do without making wild assumption)


## Other should do's

[x] - Double check documentation and code base

[x] - Make sure solutions.md is covered in that fashion
