# Lush Technical Challenge - Client

_A simple and quick but interesting implementation of the backend._

This Frontend leverages NextJs and SSR for top-level await when fetching data. It is built with **Tailwind CSS** to quick development and incorporates **Framer Motion** along with **Lottie** to produce aesthetic and appealing animations and micro-interactions without too much effort.

It interfaces with the backend using native fetch requests for simplicity.

Limited to only using a single route as per the requirements, I leveraged passing data from the client LocationInput component to the root server component by utilizing the searchParam prop to trigger a re-render of the app.

> ### Backend
>
> The backend for this repository can be found here
>
> [**graphql-weather-api**](https://www.github.com/ejkorol/graphql-weather-api)

## Features

- [**NextJS**](https://nextjs.org/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**Lottie**](https://lottiefiles.com/)
- [**Framer Motion**](https://www.framer.com/motion/)

## Installation

> ### Important Note
>
> Ensure you have the Backend running locally for this client to make API calls.
>
> Follow the instructions to setup the backend here:
>
> [**graphql-weather-api**](https://www.github.com/ejkorol/graphql-weather-api)

1. Clone the Repository:
    
    ```bash
    $ git clone https://www.github.com/ejkorol/graphql-weather-client && cd graphql-weather-client
    ```

2. Install dependencies:

    ```bash
    $ npm install
    ```

3. Transfer `.env.sample` variables into `.env`:

    ```bash
    $ touch .env && cat .env.sample > .env
    ```

4. Spin up the dev server:

    ```bash
    $ npm run dev
    ```

---

_Author: Jason Korol_
