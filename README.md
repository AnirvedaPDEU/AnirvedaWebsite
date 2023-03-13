# Bugs description:

Check out this detailed description on:
[StackOverflow](https://stackoverflow.com/questions/75713549/passing-value-to-unrendered-component)

## Steps to reproduce

1. Head to `/mockrbi/admin/situations` route and click on any of the listed situation on the page and check the console.
   It will log the situation object.

2. Now head to `/mockrbi/play` route and see the console. It will log empty situation object.

Even though situation object is being store in the state in context, it is not being persisted on the route change.
