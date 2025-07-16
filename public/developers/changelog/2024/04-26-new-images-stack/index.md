
As mentioned in previous posts, we've made a major overhaul of how we create the images underlying our virtual machines over the past few months. Our main goals are to provide a more efficient way of keeping add-ons and application up to date without breaking changes, to make new features available more quickly and to keep it simple for our team to manage all of this.

We also use fewer base images for our runtimes to reduce binaries and configuration disparities, storage footprint, simplify build and maintenance. After extensive tests, this new stack is now used in production, starting with .Net, Go and Rust images. We'll progressively deploy it to all our products in the coming months. This should be done without any impact for our users.

