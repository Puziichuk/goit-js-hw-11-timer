// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
    clockface: document.querySelector('#timer'),
    daysBtn: document.querySelector('[data-value="days"]'),
    hoursBtn: document.querySelector('[data-value="hours"]'),
    minsBtn: document.querySelector('[data-value="mins"]'),
    secsBtn: document.querySelector('[data-value="secs"]'),
};



const timer = {
    start() {
        const endTime = new Date('Jul 17, 2021');

        setInterval(() => {
            const currentTime = new Date();
            const deltaTime = endTime - currentTime;
            const time = getTimeComponents(deltaTime);
            updateClockface(time);
            
            // console.log(time);
    }, 1000);
    },
};

timer.start();

function updateClockface({  days, hours, mins, secs }) {

    refs.daysBtn.textContent = `${days}`;
    refs.hoursBtn.textContent = `${hours}`;
    refs.minsBtn.textContent = `${mins}`;
    refs.secsBtn.textContent = `${secs}`;
}



function pad(value) {
    return String(value).padStart(2, '0');
}


function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days,hours, mins, secs };

}