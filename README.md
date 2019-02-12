# project1_APIusage
We will redo an auto detailing company's website by adhering to the following requirement: 

Project Goal:

Build Something Awesome
Requirements:

Must uses at least two APIs

Must use AJAX to pull data

Must utilize at least one new library or technology that we haven’t discussed

Must have a polished frontend / UI

Must meet good quality coding standards (indentation, scoping, naming)

Must NOT use alerts, confirms, or prompts (look into modals!)

Must have some sort of repeating element (table, columns, etc)

Must use Bootstrap or Alternative CSS Framework

Must be Deployed (GitHub Pages or Firebase)

Must have User Input Validation


# Step 1: Get Firebase CLI onto local computer

We needed to create the file structure system. However, we planned to host on Firebase. This meant that we needed to be able to host a local server. In order to create a local server using Firebase, we needed to install Firebase CLI. We followed the instructions provided here: https://firebase.google.com/docs/cli/. The part of the instructions concerning the installation of the nvm (Node Version Manager) we utilized these instructions provided here: https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/.  


# Step 2: Initialize the project directory so hosting could happn

Once we got the Firebase CLI, we were be able to login to Firebase from our terminals. The next step we needed to take is to initialize the project we planned to use. In order to do that, we make our way to the location of our project files. When we get there, we completed the steps under "Initialize a Firebase project" found at this address: https://firebase.google.com/docs/cli/. It is important to note that you must chose "hosting" in order for local server to work.

# Step 3: File Structure

In order for local server to work, we needed to place all .html files and assets in a "public" folder. The public folder exists at the same level as the .json files we created when we initialized the project. These .json files may include database.rules.json, firebase.json, and storage.rules. It really depends on what services you chose to use during initialization. In addition, initialization creates a public folder and places the "index.html" inside of it. We did not have to create another one. This index.html has import script in it that will make the local server work. We took that code and placed it inside a javascript file called website.js. 

# Step 4: Starting Local Server

We returned to the terminal and typed in "Firebase serve." This should bring up to lines that tell you: "hosting: Serving hosting files from: public (line 1), hosting: Local server: http://localhost:5000 (line 2)." These lines told us that the local server is working and its hosting files from folder "public." 

# Step 5: Viewing files on web browser using local server

In order to view files, we wrote this in the address bar: "localhost:5000/loginPage.html". We only needed to change the part after the slash and make it mirror the name of the file we want to see. 








