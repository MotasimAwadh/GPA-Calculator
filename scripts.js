function calculateGPA() {
    const courses = [
        { id: 'EL111', credits: 3 }, { id: 'EL112', credits: 3 }, { id: 'AR113', credits: 3 },
        { id: 'GB102', credits: 3 }, { id: 'GR118', credits: 3 }, { id: 'GT101', credits: 3 },
        { id: 'GR121', credits: 3 }, { id: 'TM111', credits: 8 }, { id: 'TM112', credits: 8 },
        { id: 'TM255', credits: 8 }, { id: 'T215B', credits: 8 }, { id: 'TM355', credits: 8 },
        { id: 'TM351', credits: 8 }, { id: 'TM354', credits: 8 }, { id: 'TM471', credits: 8 },
        { id: 'M251', credits: 8 }, { id: 'M269', credits: 8 }, { id: 'TM105', credits: 4 },
        { id: 'TM103', credits: 4 }, { id: 'MT131', credits: 4 }, { id: 'MT132', credits: 4 },
        { id: 'MST129', credits: 4 }, { id: 'TM260', credits: 4 }, { id: 'MT390', credits: 3 },
        { id: 'MT101', credits: 3 }
    ];

    let totalPoints = 0.0;
    let totalCredits = 0;

    courses.forEach(course => {
        const grade = document.getElementById(course.id).value;
        if (grade !== 'null') {
            totalPoints += parseFloat(grade) * course.credits;
            totalCredits += course.credits;
        }
    });

    const resultDiv = document.getElementById('result');

    if (totalCredits > 0) {
        let gpa = (totalPoints / totalCredits);
        let res = Math.round(gpa * 100.0) / 100.0;

        if (res === 0.0) res = '0.0'

        resultDiv.innerText = `Your GPA: ${res}`;

        if (res < 2.0) {
            resultDiv.style.color = '#FF0000'; // red
        } else if (res >= 3.73) {
            resultDiv.style.color = '#1B9E00'; // green
        } else {
            resultDiv.style.color = ''; // black
        }


    } else {
        resultDiv.style.color = '#FF9000'; // yellow
        resultDiv.innerText = `Your GPA: N/A (No grades available)`;
    }
}

function goToTranscript() {
    window.open("https://sis.aou.edu.kw/spkwt/grades/transcript");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Update button text
    const btn = document.getElementById("darkModeBtn");
    if (body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        btn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
}

/*
// Load theme on page load
document.body.classList.add("dark-mode");
window.onload = function () {
    const theme = localStorage.getItem("theme");
    const body = document.body;
    const btn = document.getElementById("darkModeBtn");

    if (theme === "dark") {
        body.classList.add("dark-mode");
        btn.textContent = "☀️ Light Mode";
    }
};

 */