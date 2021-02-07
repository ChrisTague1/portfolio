(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(4),o=a.n(n),r=(a(12),a(2)),c=a(5),h=a(7),d=a(6),l=(a(13),a(0)),p=function(){return Object(l.jsx)("header",{id:"head",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("h1",{className:"introduction",children:["Hi, my name is ",Object(l.jsx)("strong",{id:"head-name",children:"Chris Tague"}),Object(l.jsx)("br",{}),"I'm the developer you need."]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("a",{className:"link",href:"#about",children:"More about me"}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{className:"link",href:"#projects",children:"Jump to Projects"})]})]})})},u=(a(15),function(e){var t=e.profile;return Object(l.jsx)("section",{id:"about",children:Object(l.jsxs)("div",{id:"about_package",children:[Object(l.jsx)("h2",{className:"title",children:"About me"}),Object(l.jsxs)("div",{className:"about_container",children:[Object(l.jsx)("img",{className:"box profile",src:t}),Object(l.jsxs)("div",{className:"box text",children:[Object(l.jsx)("p",{children:"I grew up in McCausland, a small town in rural Iowa, and went to North Scott High School in Eldridge. While in high school, I was a varsity track and cross country runner, head of the drumline, lead drummer in for the jazz band, and a member of the theater program."}),Object(l.jsx)("p",{children:"In senior year of high school I took my first programming class and fell in love. I started learning more on my own, and decided I wanted to major in software engineering. In addition to university courses, I have take online courses over topics like full stack development, React JS, SQL, docker, and Jenkins. Going forward, I wish to keep learning everything I can about software developemnt, and grow both as a person and engineer along the way."})]})]})]})})}),j=a.p+"static/media/profile.f12410e4.jpg",b=(a(16),function(e){var t=e.projectList.map((function(e){return Object(l.jsxs)("div",{className:"project-container",children:[Object(l.jsxs)("div",{className:"project-text",children:[Object(l.jsx)("h1",{children:e.name}),Object(l.jsx)("p",{children:e.blurb}),e.live?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("a",{className:"link",href:e.live,children:"View Live"}),Object(l.jsx)("br",{})]}):"",Object(l.jsx)("a",{className:"link",href:e.source,children:"Source Code"})]}),Object(l.jsx)("img",{className:"project_img",src:e.image}),Object(l.jsx)("br",{})]})}));return Object(l.jsxs)("section",{id:"projects",children:[Object(l.jsx)("h2",{className:"projects_title",children:"Projects"}),t,Object(l.jsx)("div",{className:"breaker"})]})}),m=a.p+"static/media/typing-speed-app.285ecda5.png",g=a.p+"static/media/sudoku-web-app.73d99295.png",f=a.p+"static/media/face-detector.15a5117b.png",x=a.p+"static/media/portfolio.ad5ccd7f.png",O=function e(t,a,s,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;Object(r.a)(this,e),this.name=t,this.blurb=a,this.image=s,this.live=n,this.source=i},v=[],w=new O("Typing Speed Web App","This web app presents the user with a random list of words, and displays their typing speed live. It is powered by react, and hosted on github pages.",m,"https://github.com/ChrisTague1/typing-speed-app","https://christague1.github.io/typing-speed-app/");v.push(w);var k=new O("Sudoku Solver","This web app will solve any Sudoku inputed. It uses a backtracking algorithm I originally made in python, but transfered over to react to have a better GUI. The size of the sudoku can be specified as either a 4x4, 9x9, or 16x16. The algorithm can in theory solve for larger sizes, however the amount of recursion makes it slow. The solver will give the user up to 10,000 different solutions if available (the cap is due to preformance reasons). It allows the user to select what solution to look at, as well as edit them.",g,"https://github.com/ChrisTague1/sudoku-web-app","https://christague1.github.io/sudoku-web-app/");v.push(k);var y=new O("Face Detector App","I made this web app as part of a Udemy course I took. It uses a face detection API to scan an image for a face, and uses CSS to put a box around the face. It also has a sign in and register page, which allows it to track the users data and store it in a database. All passwords are encriptend using bcrypt. This app consists of a frontend, backend, and SQL database. It is hosted for free through Heroku.",f,"https://github.com/ChrisTague1/face-detection-app","http://smart-brain23.herokuapp.com/");v.push(y);var I=new O("Portfolio","If you have not seen this project yet, you should really check it out! This is a portfolio made to collect my finished projects. It is continually getting updated, and will continue to grow!",x,"https://github.com/ChrisTague1/portfolio","https://christague1.github.io/portfolio/");v.push(I);var N=v,T=(a(17),function(){return Object(l.jsx)("section",{id:"contact",children:Object(l.jsxs)("div",{className:"contact-text",children:[Object(l.jsx)("h2",{children:"Contact Information"}),Object(l.jsx)("p",{children:"chris.tague3@gmail.com | 563-949-7476"})]})})}),S=(a(18),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(u,{profile:j}),Object(l.jsx)(b,{projectList:N}),Object(l.jsx)(T,{})]})}}]),a}(s.Component)),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),i(e),n(e),o(e)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),C()}],[[19,1,2]]]);
//# sourceMappingURL=main.e3e0f3c3.chunk.js.map