
# React Redux Saga tailwindCSS Quickstart

React Redux Saga tailwindCSS Quickstart is a starting point for React application. This project is configured with redux, redux saga, tailwindCSS and axios. 

## Getting Started
Install project with npm/yarn
```bash
git clone https://github.com/santoshkamble2694/react-redux-saga-tailwind-quickstart.git
```

```bash
cd react-redux-saga-tailwind-quickstart
```

#Remove .git folder
```bash
rm -rf .git
```

```bash
npm install
```

```bash
npm start
```


## Demo project

1. Increment and decrement counter on button click (Redux flow handle)
2. Simple API call to get data from server (redux, saga, axios flow handle)


## Project Structure

```sh
├── src                         # Source code.
    ├── components              # reusable UI components
    ├── containers              # Page components/pages
    ├── redux                   # Redux store
        ├── actions             # All actions create here
        ├── constants           # Redux constants 
        ├── reducers            # reducers to manage app's state
        ├── store               # redux store configured
    ├── sagas                   # App API calls/ asynchronous operations handle here
        ├── api.js              # Axios baseUrl configured here
        ├── index.js            # rootSaga
        ├── sampleSaga.js       # Sample/demo saga file
    ├── utils                   # conatins all utility files
        ├── routes.js           # Application routes handle here
├── index.js                    # React-redux and saga configured here
├── index.css                   # Tailwind directives for CSS
```
    