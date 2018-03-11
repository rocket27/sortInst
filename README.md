# Sort instagram by hashtag
The application scores the Instagram on the entered hashtags and displays the results in the fields for each of the tags and in the general field in which results are displayed for both hashtags.
### Get started

#### **Clone repo**
Clone or download this repo.

#### **Installation**
To run the application, you need a package **gulp-cli** installed in the system globally.

Using npm:
```shell
npm install gulp-cli -g
```
Using yarn:
```shell
yarn add gulp-cli global
```
After installing gulp-cli package, go to the local directory to further install the application dependencies,
```shell
cd path/to/your/folder
```
then run
```shell
npm install
```
to install packages through npm, or
```shell
yarn
```
if you use the yarn package manager.

#### **Launching**
After installing all the necessary dependencies, all that remains is to run the gulp default task
```shell
gulp
```
to build the project

#### **Usage**
Enter the name of the hashtag in the first field, for example **mountains**, and click the show button. The application will display the photos with the requested hashtag in the first field. Similarly, with the second field, for example, **lake**. The application will show the result in the second field, and in the third field the result will be displayed matching both tags.

#### **Testing**
To test the application, you can use the following hashtags:
* nature
* town
* mountains
* lake

Hashtag must be in lowercase without "#" character.