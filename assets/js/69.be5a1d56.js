(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{267:function(e,t,a){"use strict";a.r(t);var o=a(7),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This page describes how to run a local instance of the website for viewing local edits. Not all contributors to the site will need or want to do this.")]),e._v(" "),a("h2",{attrs:{id:"why-build-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-build-locally"}},[e._v("#")]),e._v(" Why build locally?")]),e._v(" "),a("p",[e._v("For anything more complex than minor text edits, you may find that the Github website editor is inadequate. The preview panel doesn't always show perfect results, for example. Sometimes it's useful to see immediate results of a change (maybe you're not quite sure what best table layout or heading to use, for example) -- and it takes Github around five minutes to publish a change.")]),e._v(" "),a("p",[e._v("In these situations it's a lot easier to build and test locally, and then only push your changes to Github when you're ready to publish a pull request.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("COMMAND LINE? WHAT COMMAND LINE?")]),e._v(" "),a("p",[e._v("The following instructions require familiarity with the command-line terminal window. If you are unfamiliar with the command line for your computer, you might want to continue using the Github website.")]),e._v(" "),a("p",[e._v("We're glad you want to make bigger changes, though, so if you can figure out these instructions, great!!!")])]),e._v(" "),a("h2",{attrs:{id:"_1-install-software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-software"}},[e._v("#")]),e._v(" 1. Install software")]),e._v(" "),a("p",[e._v("The following software is required to build TF Resource locally -- all of this is free, open source software:")]),e._v(" "),a("ul",[a("li",[e._v("Nodejs, "),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node installer here"),a("OutboundLink")],1),e._v(". Download the "),a("strong",[e._v("recommended LTS")]),e._v(" (long-term support) version")]),e._v(" "),a("li",[e._v("Git, "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git installer here"),a("OutboundLink")],1),e._v(" if you don't already have Git installed. (Note that the VS Code IDE recommended below has a copy Git included)")])]),e._v(" "),a("p",[e._v("In addition, you will need a good Markdown text editor. We recommend using the free tool VS Code, as that's what we are using. There are plenty of others, too, if you have preferences about text editors and IDE's.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code installer for Windows/Mac/Linux"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"_2-set-up-your-local-copy-of-the-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-up-your-local-copy-of-the-site"}},[e._v("#")]),e._v(" 2. Set up your local copy of the site")]),e._v(" "),a("ul",[a("li",[e._v("On Github, create your personal fork of the repo if you haven't already, using the 'Fork' button in the upper right")])]),e._v(" "),a("p",[e._v('Now "clone" (download a copy) of the site on your computer, and install all important dependencies using the following commands:')]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("your-github-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("/website.git tfresource\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" tfresource\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\nnpx "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[e._v('If you use a GUI for git, such as Sourcetree or GitKraken, be sure to clone the "source" branch (not the "master" branch which your GUI may default to).')]),e._v(" "),a("h2",{attrs:{id:"_3-make-your-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-make-your-changes"}},[e._v("#")]),e._v(" 3. Make your changes")]),e._v(" "),a("p",[e._v("Now you are ready to build the site (i.e., convert the markdown and page templates to an HTML website) and run a local development web server to review the site.")]),e._v(" "),a("ul",[a("li",[e._v("Start a local web server which builds and serves the site (this command will take a minute or two):\n"),a("ul",[a("li",[a("code",[e._v("npx yarn serve")])]),e._v(" "),a("li",[e._v("If this command fails, you may need to remove node_modules with the command "),a("code",[e._v("rm -rf node_modules")]),e._v(", and rerun "),a("code",[e._v("npx yarn install")]),e._v(" and "),a("code",[e._v("npx yarn serve")])])])]),e._v(" "),a("li",[e._v("Open a browser to "),a("code",[e._v("http://localhost:8080")]),e._v(" to view your local copy of the site (using https may cause errors in some browsers).")]),e._v(" "),a("li",[e._v("Edit any pages in the "),a("code",[e._v("tfresource/topics")]),e._v(" subfolder")]),e._v(" "),a("li",[e._v("Changes should hot-reload / show up automatically in the web browser, but if you don't see your changes you can click reload.")])]),e._v(" "),a("h2",{attrs:{id:"_4-creating-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-creating-a-pull-request"}},[e._v("#")]),e._v(" 4. Creating a pull request")]),e._v(" "),a("p",[e._v("When you're happy with your set of changes to one or multiple files, push them to Github and create a pull request.")]),e._v(" "),a("p",[e._v("You can do this from inside VS Code (go to the source-control panel on the left nav, and add/commit then push your files) , or from the command line:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" topics/*\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Description of my changes"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push\n")])])]),a("p",[e._v("You then go back to the Github website to create the pull request.")])])}),[],!1,null,null,null);t.default=s.exports}}]);