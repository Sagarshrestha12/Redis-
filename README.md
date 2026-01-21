# Redis design methodologies and consideration: 
1. Figure out what queries we need to answer.
2. Structure the data to best answer these queries.

# Design Consideration: 
1. What type of data are we storing ?
2. Should we consider about the size of the data ?
3. Do we need to expire the data ?
4. What will the key naming policy be for this data?
5. Any business logic corncerns?
   
**Key naming methodologies** 
key should be unique such that other engineer understand what is key for and use ":" to sperate out different parts of key and use # before uniqueID. 
For instance: 
user#45
user:post#902


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.




