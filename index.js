//HW-09 README.md Generator//

//dependencies
const inquirer = require("inquirer");
const fs = require('fs');

//license information 
const mit = {
    copyright: 'Copyright (c) <year> <copyright holders>',
    permission: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',
    conditions: 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.',
    warranty: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}

const gpl3 = {
    version: 'Version 3, 29 June 2007',
    copyright: 'Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>',
    permission: 'Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.',
    preamble: [
        '### Preamble',
        'The GNU General Public License is a free, copyleft license for software and other kinds of works.',
        'The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.',
        'When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.',
        'To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.',
        'For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.',
        'Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.',
        "For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.",
        "Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.",
        "Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.",
        "The precise terms and conditions for copying, distribution and modification follow."
    ],
    terms: 'https://www.gnu.org/licenses/gpl-3.0.md',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}

const apache2 = {
    copyright: 'Copyright [yyyy] [name of copyright owner]',
    text: 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at',
    link: 'http://www.apache.org/licenses/LICENSE-2.0',
    warranty: 'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied See the License for the specific language governing permissions an limitations under the License.',
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
}

const bsd2 = {
    copyright:'Copyright <YEAR> <COPYRIGHT HOLDER>',
    text: 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:',
    termsList: [
        '1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.',
        '2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.'
    ],
    warranty: 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.',
    badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
}

const bsd3 = {
    copyright: 'Copyright <YEAR> <COPYRIGHT HOLDER>',
    text: 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:',
    termsList: [
        '1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.',
        '2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.',
        '3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.'
    ],
    warranty:'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.',
    badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
}




inquirer
    .prompt([{
        type: 'input',
        message: 'Enter Project Title:',
        name: 'title'
    },
    {
        type:'input',
        message: 'Enter Project Description:',
        name: 'description'
    },
    {
        type:'input',
        message: 'Enter Table of Contents (ex: entry1, entry2, ...):',
        name: 'toc'
    },
    {
        type:'input',
        message: 'Enter Installation Instructions:',
        name: 'inst'
    },
    {
        type:'input',
        message: 'Enter Usage Information:',
        name: 'use'
    },
    
    {
        type:'list',
        choices: ['MIT','gpl-3.0','apache-2.0','bsd-2-clause','bsd-3-clause','none'],
        name: 'license'
    },
    {
        type:'input',
        message: 'Enter Contribution Guidelines:',
        name: 'contribute'
    },
    {
        type:'input',
        message: 'Tests:',
        name: 'tests'
    },
    {
        type:'input',
        message: 'Enter GitHub Username:',
        name: 'ghu'
    },
    {
        type:'input',
        message: 'Enter Email Address:',
        name: 'mail'
    }
    ])
    .then(function(response){
        createReadMe(response);
        
    }).catch((error)=>{console.log(error)});


// create readme //

function createReadMe(data){
    //generate README.md with project title//
    fs.writeFile('README.md', `# ${data.title}`,function(err){
        if (err) {
            return console.log(err);
        }
    });
    let badge;
    //add license badge
    if(data.license === 'MIT'){
        badge = mit.badge;
    }
    else if(data.license === 'gpl-3.0'){
        badge = gpl3.badge;
    }
    else if(data.license === 'apache-2.0'){
        badge = apache2.badge;
    }
    else if(data.license === 'bsd-2-clause'){
        badge = bsd2.badge;
    }
    else if(data.license === 'bsd-2-clause'){
        badge = bsd3.badge;
    }

    if(badge){
        let badgeLine = '\n' + badge + '\n';
        fs.appendFile('README.md',badgeLine,function(err){
            if(err){
              return console.log(err);
            }
        })
    }
    
    //create project description


    //create table of contents


    //create installation info


    //usage info


    //add license info


    //contribution info


    //tests


    //questions
}