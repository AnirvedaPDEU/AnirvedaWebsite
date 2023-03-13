# Bugs description

Check out this detailed description of this on:
[StackOverflow](https://stackoverflow.com/questions/75713549/passing-value-to-unrendered-component)

**OR** You can read the description below.

I have context which is being used to store the state of the situations. I have a component which is being rendered on the `/mockrbi/admin/situations` route. On this route I have list of all the situations. Admin will click any situation and it will be activated and thus will be stored in one state.

I have another component which is being rendered on `/mockrbi/play` route. Here it will show the situation which has been clicked on the `/mockrbi/admin/situations` route by the admin.

I am able to store the situation object in the state of the context on the `/mockrbi/admin/situations` route. But when I navigate to `/mockrbi/play` route, the situation object is not being persisted in the state of the context.

> Note: `/mockrbi/admin/situations` will be protected route and can be accessed only by admin whereas `/mockrbi/play` is public route.

## Steps to reproduce

1. Head to `/mockrbi/admin/situations` route and click on any of the listed situation on the page and check the console.
   It will log the situation object.

2. Now head to `/mockrbi/play` route and see the console. It will log empty situation object.

Even though situation object is being store in the state in context, it is not being persisted on the route change.
