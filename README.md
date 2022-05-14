# Senior-Project

This my senior project I presented 5/14/22 at ECHS's Senior Project Display Day.

I came up with the idea of creating this project 2 months ago from Display Day. Because I was working with web development at the time, I was thinking, "Hey, why not create a website from scratch."
I knew I wanted to work with a storage system so I made that the core of my idea and began looking for a starting place.

I first started following a YouTube tutorial by Sonny Sangha to create a SnapChat clone. And from here, I learned how to use many of the components I use in my project: React and creating Hooks and Components, React Router, Materials UI. I also experimented with Google's Firebase API and learned how to upload things to their cloud storage.

However, I knew I wanted to have my project locally hosted as to save the files on a local storage system which I could upgrade in the future, so I then started to relearn Express to host the storage server and looked into Axios to serve files to React, the webpage.

I used Axios to serve the files to React in order to display the icons for each file in the storage server as well as allow users to see the file by double clicking on the icons.
MUI is used for the file icons and React determines which icon to use depending on the file extension of the file, getting the name from Express.
Upload functionality is used with the POST request sent by Axios to '/upload' which is then received by Express, which then writes the file to the storage.
Download functionality is used with the GET request sent by Axios to '/files:fileName', :fileName being a variable which has the file name, which is then received by Express, which then takes the file name, retrieves the file, and send the requested file (res.send(requestedFile)) back to React, which is then downloaded by the user's device.
There are also tabs in the sidebar that go to different pages, demonstrating React Router's ability to route to different pages on the website such as "website.com/home" and "website.com/features".
I also implemented responsive CSS last minute because I realized most people aren't going to be carrying their chromebooks around looking at the displays, and it's more convenient to those to take out their phone instead and try it out. 
(talk about min max width used to determine if sidebar appears or not, depending on their device)

I stayed up the night before until 3am finishing it up so that it can be used by other people.
I also had trouble with networking and other devices connecting to it on different networks, so I brought a whole router from my home so that others can connect to the webpage.
However, I then realized that my internet firewall configurations was set to 'Public', meaning that it was blocking others on the same network from connecting to my laptop... So, I got on the Public wifi, got that issue fixed, and finally got people to view the webpage on their phones via the school wifi.

I also spent wayyyy more time than I should've trying to make the webpage look as close to Google Drive as possible, with flexboxes and grid layouts and divs and css and classNames literally everything CSS-related going wrong 80% of the time, but I got there in the end and I'm super glad at how it turned out.

But all said and done, this is my project and I'm so proud of what I've learned and created, and hope I inspired at least one person to pursue a passion into technology

This is my project, a Local Network Storage System, a clone of Google Drive I call, Goggle Drove.

# Installation

1. Clone this repo into your project folder
   - There should now be two folders in that folder called "client" and "server"
   - 
