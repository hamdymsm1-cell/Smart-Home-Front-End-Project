let menu = {
    DevicesLink: { el: document.querySelector("#DevicesLink"), icon: document.querySelector("#DevicesLink i") },
    RoomsLink: { el: document.querySelector("#RoomsLink"), icon: document.querySelector("#RoomsLink i") },
    AutomationLink: { el: document.querySelector("#AutomationLink"), icon: document.querySelector("#AutomationLink i") },
    EnergyLink: { el: document.querySelector("#EnergyLink"), icon: document.querySelector("#EnergyLink i") },
    SecurityLink: { el: document.querySelector("#SecurityLink"), icon: document.querySelector("#SecurityLink i") },
    SettingsLink: { el: document.querySelector("#SettingsLink"), icon: document.querySelector("#SettingsLink i") },
};

// Displaying the Sections by the Dashboard

let sideBar = document.querySelector("#sideBar");
let mainSec = document.querySelector("#main");
let DevicesSec = document.querySelector("#DevicesSection");
let RoomsSec = document.querySelector("#Rooms");
let AutomationSec = document.querySelector("#Automation");
let Energy = document.querySelector("#Energy");
let Security = document.querySelector("#Security");
let Settings = document.querySelector("#Settings");
let Contact = document.querySelector("#Contact-Sec");

// Sidebar links
const DasbhoardLink = sideBar.querySelector("#DashboardLink");
const DevicesLink = sideBar.querySelector("#DevicesLink");
const RoomsLink = sideBar.querySelector("#RoomsLink");

DevicesSec.style.display = "none";
RoomsSec.style.display = "none";
mainSec.style.display = "none";
AutomationSec.style.display = "none";
Contact.style.display = "none";
Energy.style.display = "none";
Security.style.display = "none";
Settings.style.display = "none";



let cardState1 = document.querySelector("#CCV-state");
let cardState2 = document.querySelector("#door-state");

let switch1 = document.querySelector("#CCV-switch");
let switch2 = document.querySelector("#Door-switch");

let checkBox1= switch1.querySelector("#toggleSwitch");
let checkBox2 = switch2.querySelector("#toggleSwitch");

checkBox1.addEventListener('change', (event) =>{
    if(checkBox1.checked){
        cardState1.classList.remove("off");
        cardState1.style.color = "green";
        cardState1.textContent = "ON";
    }else{        
        cardState1.classList.remove("on");
        cardState1.style.color = "red"
        cardState1.textContent = "OFF";
    }
})

checkBox2.addEventListener('change', (event) =>{
    if(checkBox2.checked){
        cardState2.classList.add("on");
        cardState2.classList.remove("off");
        cardState2.textContent = "Opened";
    }else{
        cardState2.classList.add("off");
        cardState2.classList.remove("on");
        cardState2.textContent = "Closed";
    }
})



function resetAll1() {
    Object.values(menu).forEach(item => {
        item.el.classList.remove("selected-ul");
        item.el.style.color = "var(--common-color)";
        item.icon.style.color = "var(--common-color)";
    });
}

let homenavlink = document.querySelector(".home-link");
let contactnavlink = document.querySelector(".contact-link");
let footernavlink = document.querySelector(".footer-link");

function resetNavLinks(){
    homenavlink.classList.remove("active");
    contactnavlink.classList.remove("active");
    footernavlink.classList.remove("active");
}

let mainContent = document.querySelector("#mainContent");

let hero = document.querySelector("#hero");
let glows = document.querySelector("#glows");

function showingStarter(){
    
    // Glow displaying
    glows.style.display = "block";

    // Hero displaying
    hero.style.display = "flex";
    hero.style.justifyContent = "center";
    hero.style.alignItems = "center";

    mainContent.classList.add("hide");

}

function hidingStarter(){

    // Glow displaying
    glows.style.display = "none";

    // Hero displaying
    hero.style.display = "none";
    
    mainContent.classList.remove("hide");

}

window.onload = () =>{
    resetNavLinks();
    resetAll1();
    showingStarter();

    cardState1.classList.remove("off");
    cardState1.classList.add("on");
    cardState1.textContent = "ON";
    checkBox1.checked = true
    
    cardState2.classList.add("on");
    cardState2.classList.remove("off");
    cardState2.textContent = "Opened";
    checkBox2.checked = true

    
    if(!localStorage.getItem("last_section")) {
        mainSec.style.display = "block";
        mainSec.style.animation = "fade-in 1.4s ease-in-out forwards";

        homenavlink.classList.add("active");
    }
    
    if(localStorage.getItem("last_section") == "DevicesSec"){
        DevicesSec.style.display = "block";
        DevicesSec.style.animation = "fade-in 1.4s ease-in-out forwards";

        menu["DevicesLink"].el.classList.add("selected-ul");
        menu["DevicesLink"].el.style.color = "white";
        menu["DevicesLink"].icon.style.color = "white";

        resetNavLinks();
    }
    else if(localStorage.getItem("last_section") == "RoomsSec"){
        RoomsSec.style.display = "block";
        RoomsSec.style.animation = "fade-in 1.4s ease-in-out forwards";

        menu["RoomsLink"].el.classList.add("selected-ul");
        menu["RoomsLink"].el.style.color = "white";
        menu["RoomsLink"].icon.style.color = "white";

        resetNavLinks();
    }
    else if (localStorage.getItem("last_section") == "AutomationSec"){
        AutomationSec.style.display = "flex";
        AutomationSec.style.alignItems = "center";
        AutomationSec.style.flexDirection = "column";
        AutomationSec.style.animation = "fade-in 1.4s ease-in-out forwards";

        menu["AutomationLink"].el.classList.add("selected-ul");
        menu["AutomationLink"].el.style.color = "white";
        menu["AutomationLink"].icon.style.color = "white";
    }
    else if (localStorage.getItem("last_section") == "EnergySec"){
        Energy.style.display = "flex";
        Energy.style.alignItems = "center";
        Energy.style.flexDirection = "column";
        Energy.style.gap = "40px";
        Energy.style.animation = "fade-in 1.4s ease-in-out forwards";

        menu["EnergyLink"].el.classList.add("selected-ul");
        menu["EnergyLink"].el.style.color = "white";
        menu["EnergyLink"].icon.style.color = "white";
    }
    else if (localStorage.getItem("last_section") == "SecuritySec"){
        Security.style.display = "flex";
        Security.style.alignItems = "center";
        Security.style.flexDirection = "column";
        Security.style.gap = "40px";
        Security.style.animation = "fade-in 1.4s ease-in-out forwards";

        menu["SecurityLink"].el.classList.add("selected-ul");
        menu["SecurityLink"].el.style.color = "white";
        menu["SecurityLink"].icon.style.color = "white";
    }
    else if (localStorage.getItem("last_section") == "SettingsSec"){
        Settings.style.display = "flex";
        Settings.style.alignItems = "center";
        Settings.style.flexDirection = "column";
        Settings.style.gap = "40px";
        Settings.style.animation = "fade-in 1.4s ease-in-out forwards";

        menu["SettingsLink"].el.classList.add("selected-ul");
        menu["SettingsLink"].el.style.color = "white";
        menu["SettingsLink"].icon.style.color = "white";
    }
    else if(localStorage.getItem("last_section") == "Contact"){
        Contact.style.display = "flex";
        Contact.style.justifyContent = "center";
        Contact.style.alignItems = "center";
        Contact.style.animation = "fade-in 1.4s ease-in-out forwards";

        contactnavlink.classList.add("active");
        homenavlink.classList.remove("active");
        footernavlink.classList.remove("active");
    }

    setTimeout(() =>{
        hidingStarter();
    },1000);

}

window.onscroll = () =>{
    if(scrollY >= 350 && mainSec.style.display == "block"){
        footernavlink.classList.add("active");
        homenavlink.classList.remove("active");
    }else if (scrollY <=349 && mainSec.style.display == "block"){
        footernavlink.classList.remove("active")
        homenavlink.classList.add("active")
    }
}

function selectNav(id, className){
    if(id == "active") return;

    resetNavLinks();

    let navbarLink = document.querySelector(`.${className}`);
    
    navbarLink.classList.add("active");
}

function select(id) {
    // Check if the id belongs to a sidebar menu item first
    if (menu[id]) {
        if (menu[id].el.classList.contains("selected-ul")) return;

        resetAll1();

        menu[id].el.classList.add("selected-ul");
        menu[id].el.style.color = "white";
        menu[id].icon.style.color = "white";
    } else {
        // If it's a navbar link like Contact, clear sidebar selections
        resetAll1();
    }

    if (id == "Home-Nav-Link") {
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Security.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.removeItem("last_section")

        resetNavLinks();

        homenavlink.classList.add("active");

        setTimeout(() => {
            mainSec.style.display = "block";
            mainSec.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 600)
    } else if (id == "Footer-Nav-Link") {
        if(!localStorage.getItem("last_section")){
            footernavlink.classList.add("active");

            window.scrollTo({ top: 392, behavior: 'smooth' }); 

            return ;
        }
        
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Security.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.removeItem("last_section")

        resetNavLinks();

        footernavlink.classList.add("active");

        setTimeout(() => {
            mainSec.style.display = "block";
            mainSec.style.animation = "fade-in ease-in-out 1.4s forwards";

            setTimeout(() =>{
                window.scrollTo({ top: 392, behavior: 'smooth' }); 
            },300)

        }, 600)
    } else if (id == "DevicesLink") {
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 200)
        mainSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { mainSec.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Security.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.setItem("last_section", "DevicesSec")

        resetNavLinks();

        setTimeout(() => {
            DevicesSec.style.display = "block";
            DevicesSec.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 600)
    } else if (id == "RoomsLink") {
        mainSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { mainSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Security.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.setItem("last_section", "RoomsSec")

        resetNavLinks();

        setTimeout(() => {
            RoomsSec.style.display = "block";
            RoomsSec.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 600)
    } else if (id == "AutomationLink") {
        mainSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { mainSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Security.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.setItem("last_section", "AutomationSec")

        resetNavLinks();

        setTimeout(() => {
            AutomationSec.style.display = "flex";
            AutomationSec.style.alignItems = "center";
            AutomationSec.style.flexDirection = "column";
            AutomationSec.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 600)
    }
    else if (id == "EnergyLink") {
        mainSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { mainSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Security.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.setItem("last_section", "EnergySec")

        resetNavLinks();

        setTimeout(() => {
            Energy.style.display = "flex";
            Energy.style.alignItems = "center";
            Energy.style.flexDirection = "column";
            Energy.style.gap = "40px";
            Energy.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 1000)
    }
    else if (id == "SecurityLink") {
        mainSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { mainSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.setItem("last_section", "SecuritySec");

        resetNavLinks();

        setTimeout(() => {
            Security.style.display = "flex";
            Security.style.alignItems = "center";
            Security.style.flexDirection = "column";
            Security.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 1000)
    }
    else if (id == "SettingsLink") {
        mainSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { mainSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 300)
        Contact.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Contact.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Security.style.display = "none"; }, 300)

        localStorage.setItem("last_section", "SettingsSec");

        resetNavLinks();

        setTimeout(() => {
            Settings.style.display = "flex";
            Settings.style.alignItems = "center";
            Settings.style.flexDirection = "column";
            Settings.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 1000)
    }
    else if (id === 'Contact-Nav-Link') {
        mainSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { mainSec.style.display = "none"; }, 200)
        DevicesSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { DevicesSec.style.display = "none"; }, 300)
        RoomsSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { RoomsSec.style.display = "none"; }, 300)
        AutomationSec.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { AutomationSec.style.display = "none"; }, 300)
        Energy.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Energy.style.display = "none"; }, 300)
        Security.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Secrurity.style.display = "none"; }, 300)
        Settings.style.animation = "fade-out 1s ease-in-out forwards";
        setTimeout(() => { Settings.style.display = "none"; }, 300)

        localStorage.setItem("last_section", "Contact")

        setTimeout(() => {
            Contact.style.display = "flex";
            Contact.style.justifyContent = "center";
            Contact.style.alignItems = "center";
            Contact.style.animation = "fade-in ease-in-out 1.4s forwards";
        }, 400)
    }
}

function onEnter(id) {
    if (menu[id].el.classList.contains("selected-ul")) return;
    menu[id].el.style.color = "var(--link-light-color)";
    menu[id].icon.style.color = "var(--link-light-color)";
}

function onLeave(id) {
    if (menu[id].el.classList.contains("selected-ul")) return;
    menu[id].el.style.color = "var(--common-color)";
    menu[id].icon.style.color = "var(--common-color)";
}

const chart1 = {

    series: [
        {
            data: [
                20,
                20,
                33,
                40,
                28,
                21,
                34,
                24,
                49,
                18
            ]
        }
    ],

    chart: {
        type: "area",

        height: 50,

        sparkline: {
            enabled: true
        },

        toolbar: {
            show: false
        }
    },

    stroke: {
        curve: "smooth",

        width: 3
    },

    colors: [
        "#fffefd",
    ],

    fill: {

        type: "gradient",

        gradient: {

            shadeIntensity: .5,

            opacityFrom: .5,

            opacityTo: 0,

            stops: [
                0,
                100
            ]

        }

    },

    tooltip: {
        enabled: true
    }

};


new ApexCharts(
    document.querySelector("#chart1"),
    chart1
).render();

// Chart 2

const chart2 = {

    series: [
        {
            data: [
                2,
                12,
                4,
                1,
                6,
                0,
                5,
                3,
                8
            ]
        }
    ],

    chart: {
        type: "bar",

        height: 50,

        sparkline: {
            enabled: true
        },

        toolbar: {
            show: false
        }
    },

    plotOptions: {

        bar: {

            borderRadius: 2,

            columnWidth: "30%"
        }

    },

    colors: [
        "#f28a35"
    ],

    tooltip: {
        enabled: true
    }

};


new ApexCharts(
    document.querySelector("#chart2"),
    chart2
).render();

// Chart 3

const chart3 = {

    series: [
        {
            data: [
                2,
                4.5,
                3,
                2.5,
                0.1,
            ] // 12.1
        }
    ],

    chart: {
        type: "area",

        height: 50,

        sparkline: {
            enabled: true
        },

        toolbar: {
            show: false
        }
    },

    stroke: {

        curve: "smooth",

        width: 2
    },

    colors: [
        "#f28a35"
    ],

    fill: {
        type: "gradient",

        gradient: {

            shadeIntensity: 1,

            opacityFrom: .9,

            opacityTo: 0,

            stops: [
                0,
                100
            ]

        }
    },

    tooltip: {
        enabled: true
    }

};


new ApexCharts(
    document.querySelector("#chart3"),
    chart3
).render();

// char4
const chart4 = {

    series: [
        {
            data: [
                10,
                25,
                50,
                65,
                60,
                72,
                68,
                85,
                80
            ]
        }
    ],

    chart: {
        type: "area",

        height: 50,

        sparkline: {
            enabled: true
        },

        toolbar: {
            show: false
        }
    },

    stroke: {

        curve: "smooth",

        width: 3
    },

    colors: [
        "#ffffff"
    ],

    fill:{
        type: "gradient",

        gradient: {

            shadeIntensity: 1,

            opacityFrom: .5,

            opacityTo: 0,

            stops: [
                0,
                100
            ]

        }
    },

    tooltip: {
        enabled: true
    }

};


new ApexCharts(
    document.querySelector("#chart4"),
    chart4
).render();


// The Under Sec Actions

const swiper4 = new Swiper(".roomsSwiper", {

    slidesPerView: 1,

    speed: 700,

    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});




const toggleSwitchs = document.querySelectorAll("#toggleSwitch");

function resetSWT(){
    toggleSwitchs.forEach((swt) => {
        swt.checked = false;
    })
}


// Drop Down Section

let selected = document.querySelector("#selected");
let activeSelect;
let menu1 = document.querySelector("#menu");

let option = selected?.querySelector(".option");

setTimeout(()=>{
    activeSelect = selected?.querySelector(".option")?.textContent;
},.1)

function dropLi(){
    if(menu1.classList.contains("dropdown-show")){
        menu1.classList.remove("dropdown-show");
        menu1.classList.add("dropdown-hide");

        setTimeout(() => {
            menu1.style.display = "none";
        },600);
        
    }else{
        menu1.classList.remove("dropdown-hide");
        menu1.classList.add("dropdown-show");

        menu1.style.display = "block";
    }
}

function dropDown(element){
    
    activeSelect = element?.textContent;
    
    option.textContent = activeSelect;

    menu1.classList.add("dropdown-hide");
}

// Charts

const energyChart = new ApexCharts(
    document.querySelector("#energyChart"),
    {
        chart: {
            type: "bar",
            height: 200,
            toolbar: {
                show: false
            }
        },

        series: [{
            name: "Energy",
            data: [10, 11, 13, 11, 8, 15]
        }],

        xaxis: {
            categories: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"]
        },

        yaxis: {
            min: 0,
            max: 15
        },

        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: "35%"
            }
        },

        colors: ["#f1771a"],

        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                gradientToColors: ["#f3882f"],
                opacityFrom: .6,
                opacityTo: 1,
                stops: [0, 100]
            }
        },

        grid: {
            borderColor: "#e5ded74d"
        },

        dataLabels: {
            enabled: false
        },

        legend: {
            show: true
        }
    }
);

energyChart.render();




// Circle Chart

const energyCircle = new ApexCharts(
    document.querySelector("#energyCircle"),
    {
        chart: {
            type: 'radialBar',
            width: '100%',
            height: '100%',
        },

        series: [72],

        colors: ["#f7710b"],

        plotOptions: {
            radialBar: {
                hollow: {
                    size: "58%"
                },

                track: {
                    background: "rgba(241, 128, 41, 0.38)",
                    opacity: 1,
                    strokeWidth: "100%"
                },


                dataLabels: {
                    name: {
                        show: true,
                        offsetY: 25,
                        fontSize: "16px",
                    },

                    value: {
                        offsetY: -14,
                        fontSize: "30px",
                        fontWeight: 600
                    }
                }
            }
        },

        labels: ["kWh"]
    }
);

energyCircle.render();




const enrgChart = {

    series: [
        {
            data: [
                2,
                4.5,
                3,
                1.5,
                4.1,
                8,
                1.5,
                3,
                3.5,
                5.1,
                0.1,
                0.5,
                2,
                6.5,
                8.1,
                1,
                4.5,
                8,
                1.5,
                2.1,
            ] // 12.1
        }
    ],

    chart: {
        type: "area",

        height: 150,

        sparkline: {
            enabled: true
        },

        toolbar: {
            show: false
        }
    },

    stroke: {

        curve: "smooth",

        width: 2
    },

    colors: [
        "#f28a35"
    ],

    fill: {
        type: "gradient",

        gradient: {

            shadeIntensity: 1,

            opacityFrom: .9,

            opacityTo: 0,

            stops: [
                0,
                100
            ]

        }
    },

    tooltip: {
        enabled: true
    }

};


new ApexCharts(
    document.querySelector("#EnergyChart"),
    enrgChart
).render();



// char4
const SecruityChart = {

    series: [
        {
            data: [
                10,
                25,
                50,
                65,
                60,
                72,
                68,
                85,
                80
            ]
        }
    ],

    chart: {
        type: "area",

        height: 150,

        sparkline: {
            enabled: true
        },

        toolbar: {
            show: false
        }
    },

    stroke: {

        curve: "smooth",

        width: 3
    },

    colors: [
        "#ffffff"
    ],

    fill: {
        type: "gradient",

        gradient: {

            shadeIntensity: 1,

            opacityFrom: .5,

            opacityTo: 0,

            stops: [
                0,
                100
            ]

        }
    },

    tooltip: {
        enabled: true
    }

};


new ApexCharts(
    document.querySelector("#SecurityChart"),
    SecruityChart
).render();