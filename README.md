# Diego Escobar's Senior Project - Goggle Drove, A Google Drive Clone

## Some Background

This my senior project I presented 5/14/22 at ECHS's Senior Project Display Day.

I came up with the idea of creating this project 2 months ago from Display Day. Because I was working with web development at the time, I was thinking, "Hey, why not create a website from scratch."
I knew I wanted to work with a storage system so I made that the core of my idea and began looking for a starting place.

I first started following a YouTube tutorial by Sonny Sangha to create a SnapChat clone. And from here, I learned how to use many of the components I use in my project: React and creating Hooks and Components, React Router, Materials UI. I also experimented with Google's Firebase API and learned how to upload things to their cloud storage.

However, I knew I wanted to have my project locally hosted as to save the files on a local storage system which I could upgrade in the future, so I then started to relearn Express to host the storage server and looked into Axios to serve files to React, the webpage.

## The Different Parts of the Project

### React

I first use React to create the several components of the webpage:
- Main Components
  - Header
  - Sidebar
- File-related Components
  - FileIcons
  - FilePreview
  - FileUpload
- Tabs
  - Features
  * There are also tabs in the sidebar that go to different pages, demonstrating React Router's ability to route to different pages on the website such as "website.com/home" and "website.com/features".

### Express

Upload functionality is used with the POST request sent by Axios to '/upload' which is then received by Express, which then writes the file to the storage.
Download functionality is used with the GET request sent by Axios to '/files:fileName', :fileName being a variable which has the file name, which is then received by Express, which then takes the file name, retrieves the file, and send the requested file (res.send(requestedFile)) back to React, which is then downloaded by the user's device.

### Axios

I used Axios to serve the files to React in order to display the icons for each file in the storage server as well as allow users to see the file by double clicking on the icons.

### Styling

**MUI** is used for the file icons and React determines which icon to use depending on the file extension of the file, getting the name from Express.
I also implemented **responsive CSS** last minute because I realized most people aren't going to be carrying their chromebooks around looking at the displays, and it's more convenient to those to take out their phone instead and try it out.
What I did was first decided on a specific width, in this case 600px, to determine when the webpage should change to a mobile layout.
Next, I added a menu button that would be used to open the sidebar on mobile devices
Then I added CSS to hide the menu icon when the screen is larger than 600px, but then show it when less than 600px, allowing users to use the menu button and the sidebar
(talk about min max width used to determine if sidebar appears or not, depending on their device)

## Some Issues Along the Way and My Final Project

I stayed up the night before until 3am finishing it up so that it can be used by other people.
I also had trouble with networking and other devices connecting to it on different networks, so I brought a whole router from my home so that others can connect to the webpage.
However, I then realized that my internet firewall configurations was set to 'Public', meaning that it was blocking others on the same network from connecting to my laptop... So, I got on the Public wifi, got that issue fixed, and finally got people to view the webpage on their phones via the school wifi.

I also spent wayyyy more time than I should've trying to make the webpage look as close to Google Drive as possible, with flexboxes and grid layouts and divs and css and classNames literally everything CSS-related going wrong 80% of the time, but I got there in the end and I'm super glad at how it turned out.

But all said and done, this is my project and I'm so proud of what I've learned and created, and hope I inspired at least one person to pursue a passion into technology

This is my project, a Local Network Storage System, a clone of Google Drive I call, Goggle Drove.

# Installation

1. Clone this repo into your project folder
   - There should now be two folders in that folder called "client" and "server"
2. Install NodeJS in both folders
   - Open Terminal in each folder and use the following command: "npm init -y"
3. Install Packages in both folders
   - Open Terminal in "/client" and install the following packages using the command: "npm i <package name>"
     - react
     - react-dom
     - react-redux
     - react-router-dom
     - react-scripts
     - axios
     - @mui/material
     - @mui/icons-material
     - @emotion/styled
     - @emotion/react
   - Open Terminal in "/server" and install the following packages usingg the command: "npm i <package name>"
     - express
     - express-fileupload
4. Start up the server and the client
   - With the open Terminal in "/server", use the command: "npm start"
     - I recommend starting the server first so you don't get an error with the client trying to retrieve information from an offline server
   - With the open Terminal in "/client", use the command: "npm start"
5. Navigate to the webpage
   -  In the open Terminal in "/client", you should see an IP adress in the output  
   ![image](https://user-images.githubusercontent.com/97565066/168457781-196f272d-c839-4578-82b7-63f5d0ab0bda.png)
   - Copy that address and paste it into a web broswer
  
From there, you should be taken to the homepage of the project!
![image](https://user-images.githubusercontent.com/97565066/168460233-d21195fc-116b-41ae-bc6d-059fb71450d6.png)

# Final Words
  
I'm making this repo public because I want you to see how many different components come together to create this project. And I also want you to experiment with it for yourself, changing elements and even changing the credits text.
  
But ye, hope you enjoy my project and happy coding!
