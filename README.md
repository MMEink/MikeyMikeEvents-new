# Project Guide

Make sure you have Node.js and Visual Studio Code(vsc) installed in your local machine before clone this project. 


## Steps

### Step 1. run `npm install` in the terminal (vsc open new terminal) at the root folder
this will install all the dependencies needed for this project only in this folder. 

### Step 2. run `npm start` in the terminal (vsc open new terminal) at the root folder
this will start a local server and avalible to load live update of the project as you modifying. 

### Step 3. run `npm run build` in the terminal (vsc open new terminal) at the root folder
this will create/update the build folder of this project, drag all the contents in folder to FTP folder will make the changes go live. 

## Folder Structure Guide
Tawk plugin is added in public/index.html
All other works are done in folder src. Project start point is index.js -> App.js -> MainView/Main.jsx
### src folder
#### App.js
Control "scroll to the top" round button, site route links, Navbar on all pages. Anything added inside <Router> tag will appear on all the site pages, for instance the Navbar. Add Route for new links. 
#### App.css
Most styles of the home page are done in this file. 
#### FooterView.jsx, ContactForm.jsx, GallerySection.jsx, HorizontalLayout.jsx, LogoSection.jsx, Navbar.jsx, SwiperGallerySection.jsx, SwiperWizVideo.jsx, VerticalLayout.jsx,VideoSection.jsx
These are re-usable components and are shared in almost all the pages/Views, used to compose each page. 
#### ScrollToTop.jsx
this helps scroll to top automatically every time the link is changed. (bug fixer)
#### styled.js
custom tags and reuseable tags. Is used for styling, save the headache of classname Convention and avoid confusion. 
#### data.js
all re-usable and shared data is stored in this file. To change the contents on home page, services home page, this might be the only file you have to modify. (search: for the search engine; events:for events dropdown; homepageIntro: for the flip data on homepage)
### src/View folders
folders' naming convention end with View represents the main pages of the site, include about us page, contact page, 404 page, thank you page, service home page, portfolio page. 
### src/ServicePages
The pages can be redirected under the services dropdown. The layout is slightly different btw pages but mostly all components are reusing in other pages, differentiated by sections. Data can be found in data.js. Data name is "services" and names by each pages. 
### src/Events
The pages can be redirected under the events dropdown or the 4 tiles on the home page. The layout is mostly the same except some pages might have one extra brochure button, differentiated by sections. Data can be found in data.js. Data name is "events_swiper" and names by each pages. 
### src/images
Most of the images on this website is in this folder except the images of the flip on the frontpage.

## Some React Tips
1. require() sources are not very useful with source location ../ Try to use ./ all the time. Move the folder to the closet location if needed
2. Styles could be difficult to locate because there is many places but using dev tool in the browser can easily locate them. Element with a non-sense class is the ones created in style.js file. 
3. I updated the search data with keywords, all keywords put into each section will reflet on its search result. Feel free to add any keywords that is related to the result. 
4. For data that is only used in one component or page and could not be found in data.js, they could be found on the component itself as the data is not a sharing data. 
5. If in some scenario you need to change the order of a data related element, just switch the order of the data. No need to touch the code.

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).