var fullName = 'Eric Pinheiro';
console.log('Name: ' + fullName.toUpperCase());
console.log('Career: Data Analyst / Scheduling Specialist');
console.log("Description: Nerd, Traveler, Hack n' Slash Game Fanatic");
console.log('\nMy Interests:');
var interests = ['Travel', 'Japanese Culture', 'Action Games', 'Illustration', 'Collecting', 'Traditional Animation'];
for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
    var k = interests_1[_i];
    console.log('* ' + k);
}
;
console.log('\nMy Previous Experience:');
;
var positions = [
    {
        companyName: 'UAB',
        jobTitle: 'Health Informatics Capstone Research for Grandview Medical Center',
        description: 'Created series of reports to address causes of bottlenecking in patient discharge rates at the hospital.'
    },
    {
        companyName: 'Grandview Medical Center',
        jobTitle: 'Central Scheduling',
        description: 'Used Cerner appointment software to schedule testing for patients, managed physician orders, made and recived phone calls for scheduling.'
    },
    {
        companyName: 'Dr. J. B. Cavender',
        jobTitle: 'Freelance Assistant',
        description: 'Shadowed physician using an Electronic Health Record (EHR) helped plan an improved replacement system. Created PowerPoint animations for proposal of new system to the American College of Cardiology (ACC).'
    }
];
function displayPosition(positions) {
    for (var i = 0; i < positions.length; i++) {
        console.log('* ' + positions[i].companyName + ': ' + positions[i].jobTitle + ' - ' + positions[i].description);
    }
}
;
displayPosition(positions);
console.log('\nMy Skills:');
;
var skills = [
    {
        skill: 'Tableau',
        cool: false
    },
    {
        skill: 'SQL',
        cool: false
    },
    {
        skill: 'Excel + PivotTables',
        cool: false
    },
    {
        skill: 'Portuguese',
        cool: true
    },
    {
        skill: 'acting',
        cool: true
    },
    {
        skill: 'customer communication',
        cool: false
    },
    {
        skill: 'Clip Studio Paint',
        cool: true
    }
];
function displaySkill(skills) {
    for (var j = 0; j < skills.length; j++) {
        if (skills[j].cool === true) {
            console.log('* BAM: ' + skills[j].skill);
        }
        else {
            console.log('* ' + skills[j].skill);
        }
    }
}
;
displaySkill(skills);
