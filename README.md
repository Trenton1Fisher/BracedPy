
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://braced.trentonfisher.xyz">
    <img src="https://github.com/user-attachments/assets/7f74f71d-d9c9-4192-bb16-b963a00cd374" alt="Logo">
  </a>

<h3 align="center">BracedPy</h3>

  <p align="center">
    Website allowing users to interact with a code editor to compile and run a small subset of python using a more C style syntax
    <br />
    <a href="https://job.trentonfisher.xyz">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#prerequisites">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">More ScreenShots</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This project is a website that allows users to explore the documentation and interact with a live code editor for a custom-built compiler. The intepreter is designed for a small subset of Python, 
but it follows a more C-like syntax, using curly braces `{}` for block structures and semicolons `;` to terminate statements.

### Key Features:
- **Code Editor**: An interactive web-based code editor where users can write and compile code using the C-style Python syntax.
- **Intepreter**: A custom-built intepreter that parses and executes code written in this Python subset.
- **Documentation**: Documentation that explains the language syntax, rules, and usage examples, helping users learn and understand the supported features.
- **Execution Environment**: Users can compile and run their code directly in the browser, making it easy to test and experiment with the language.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- ⚡️ React
- 🐘 NodeJs
- ✨ C
- 💨 Flex

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This section explains how to get started with running the project locally. Follow these steps in order to set up and run the job search app on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**  
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/Trenton1Fisher/BracedPy.git
2. Install NPM packages in both server and client directories
   ```sh
   cd server/
   npm install
   cd client/
   npm install
   ```
3. Run makefile inside compiler directory to get executable files
```sh
  cd compiler/
  make clean  (Delete Any executable files already made)
  make
```
4. Run Both Server and Client Code in two terminals at the same time
   ```sh
   cd server/
   npm run dev
   cd client/
   npm run dev
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## More Screenshots

- Documentation Page
  <img src="https://github.com/user-attachments/assets/e1528e72-1db2-4d58-aa08-2329b5c5434d" alt="Documentation Page" />

- Code Editor Page
  <img src="https://github.com/user-attachments/assets/7ca6561c-67d1-4b4d-b109-c5117de2b76b" alt="Code Editor Page"/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Trenton Fisher
trenton0fisher@gmail.com

Project Link: [View Live Site](https://braced.trentonfisher.xyz)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
