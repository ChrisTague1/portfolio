import typingImg from '../../assets/typing-speed-app.png';
import sudokuImg from '../../assets/sudoku-web-app.png';
import faceImg from '../../assets/face-detector.png';

class Project {
  constructor(name, blurb, image, source, live = 0) {
    this.name = name;
    this.blurb = blurb;
    this.image = image;
    this.live = live;
    this.source = source;
  }
}

const ProjectList = []

const typing = new Project(
  "Typing Speed Web App", 
  "This web app presents the user with a random list of words, and displays their typing speed live. It is powered by react, and hosted on github pages.",
  typingImg, 
  "https://github.com/ChrisTague1/typing-speed-app",
  "https://christague1.github.io/typing-speed-app/"
)
ProjectList.push(typing);

const sudoku = new Project(
  "Sudoku Solver",
  "This web app will solve any Sudoku inputed. It uses a backtracking algorithm I originally made in python, but transfered over to react to have a better GUI. The size of the sudoku can be specified as either a 4x4, 9x9, or 16x16. The algorithm can in theory solve for larger sizes, however the amount of recursion makes it slow. The solver will give the user up to 10,000 different solutions if available (the cap is due to preformance reasons). It allows the user to select what solution to look at, as well as edit them.",
  sudokuImg,
  "https://github.com/ChrisTague1/sudoku-web-app",
  "https://christague1.github.io/sudoku-web-app/"
)
ProjectList.push(sudoku);

const face = new Project(
  "Face Detector App",
  "I made this web app as part of a Udemy course I took. It uses a face detection API to scan an image for a face, and uses CSS to put a box around the face. It also has a sign in and register page, which allows it to track the users data and store it in a database. All passwords are encriptend using bcrypt. This app consists of a frontend, backend, and SQL database. It is hosted for free through Heroku.",
  faceImg,
  "https://github.com/ChrisTague1/face-detection-app",
  "http://smart-brain23.herokuapp.com/"
)
ProjectList.push(face);

export default ProjectList;