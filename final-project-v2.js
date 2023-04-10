//WIP - Dave to forward article for reference 
// link to Job Search button

const jobListings = [{
    jobID: 0,
    jobType: 'Manager',
    jobName: 'Manager Planning and Building',
    companyName: 'Hepburn Shire Council',
}, {
    jobID: 1,
    jobType: 'Director',
    jobName: 'Director Connected Communities',
    companyName: 'City of Whittlesea',
}, {
    jobID: 2,
    jobType: 'Manager',
    jobName: 'Manager Finance',
    companyName: 'City of Ballarat',
}];

const searchBar = document.getElementById('search');

searchBar.addEventListener('keyup', searchJobs);

function searchJobs(e) {
    const searchValue = e.target.value;
        const result = [];
        
        for (let i = 0; i < jobListings.length; i++) {
            if (searchValue == jobListings[i].jobName) {
                result.push(jobListings[i].jobName)
            }
        }
    return result;
}








// was thinking to do a side menu for mobile option - similar to slack exercise

//function sideMenuAppears(){
//     document.getElementById('side-menu').classList.add('show-menu');
// }

// function sideMenuDisappears(){
//     document.getElementById('side-menu').classList.remove('show-menu')
// }

// document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);

// document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);