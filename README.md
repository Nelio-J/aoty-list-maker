# Album of the Year List Maker: The tool to make a list of your favourite albums of the year

<div align=center>
  <a href="https://github.com/Nelio-J/aoty-list-maker"><img src="https://github.com/Nelio-J/aoty-list-maker/blob/main/public/app-screenshots/ss_header.png" alt="Screenshot of the Album of the Year List Maker" width="700"></a>
  <br>
</div>

<h4 align="center">This is a <a href="https://nextjs.org" target="_blank">Next.js</a> project bootstrapped with <a href="https://nextjs.org/docs/app/api-reference/cli/create-next-app" target="_blank">create-next-app</a> </h4>

<p align=center>
   <a href="#key-features">Key Features</a> •
   <a href="#get-started">Get Started</a> •
   <a href="#credits">Credits</a> •
   <a href="#learn-more">Learn More</a>
</p>

## Key Features

* Search for albums
  - You can easily search for your favourite albums, powered by the Spotify Web API.
  <div align=center>
    <br>
    <img src="https://github.com/Nelio-J/aoty-list-maker/blob/main/public/app-screenshots/ss_search.png" alt="Result when searching for 'The Weeknd' " width="700" >
    <br>
  </div>

* Customize your list
  - You can change the title and gradient background of your list to your liking. All your changes get saved, so you don't lose them after a page refresh.
  <div align=center>
    <br>
    <img src="https://github.com/Nelio-J/aoty-list-maker/blob/main/public/app-screenshots/ss_list_functions.png" alt="Screenshot showing the function available to customize your list" width="700" >
    <br>
  </div>
  
* Export to image
  - You can export your list to an image with the press of a single button. This function uses the html-to-image library to convert the page into an image.
  <div align=center>
    <br>
    <img src="https://github.com/Nelio-J/aoty-list-maker/blob/main/public/app-screenshots/ALBUMS-OF-THE-YEARS-2025.png" alt="Screenshot of a completed Album of the Year list" width="700" >
    <br>
  </div>

## Get Started
First, install all the dependencies for the project. This project uses [pnpm](https://pnpm.io/) by default.
```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000/lists/create](http://localhost:3000/lists/create) with your browser to start making your list.

## Credits

This software uses the following open source packages:
- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [html-to-image (fork by @jpinsonneau)](https://www.npmjs.com/package/@jpinsonneau/html-to-image)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
