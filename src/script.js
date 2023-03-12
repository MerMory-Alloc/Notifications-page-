
let body=document.body;
let notf_title_container = document.getElementsByClassName("container_notf");
let nbr_notf=document.querySelector(".number_of_notf");
let mark_as_read=document.querySelector(".mrk_as_read");
mark_as_read.style.cursor = "pointer";

fetch("./notification.json")
  .then((response) => response.json())
  .then((notification) => {
    const nbr=unreadNotifications(notification);
    if(nbr > 0)
      nbr_notf.innerHTML = nbr;
    addNotf(notification);
  });

function unreadNotifications(notf){
  let count=0;
  for(let i=0;i<notf.length;i++){
    if (notf[i].read === false)
      count++;
  }
  return count;
}

function addNotf(notf){
  let notf_element;
  for (let i = 0; i < notf.length; i++) {
    notf_element=buildNotfComponent();
    body.appendChild(notf_element);

    let profile_icon=notf_element.querySelector(".profile_icon");
    let profile_name=notf_element.querySelector(".profile_name");
    let title=notf_element.querySelector(".title");
    let subject=notf_element.querySelector(".subject");
    let time=notf_element.querySelector(".time");
    let additional_content=notf_element.querySelector(".additional_content");
    let img_post_cont=notf_element.querySelector(".img_post_cont");

    profile_icon.src=notf[i].from.profile_icon;

    profile_name.innerHTML=notf[i].from.profile_name;
    profile_name.style.cursor = "pointer";
    profile_name.addEventListener("mouseenter", (e) => {
      profile_name.style.color = "#0A317B";
    });
    profile_name.addEventListener("mouseleave", (e) => {
      profile_name.style.color = "#1C202B";
    });

    title.innerHTML=notf[i].title;

    subject.innerHTML=notf[i].subject.subject_title;
    subject.style.cursor = "pointer";
    if(notf[i].subject.subject_type === "group")
      subject.classList.add("text-[#0A317B]") ;
    else {
      subject.addEventListener("mouseenter", (e) => {
        subject.style.color = "#0A317B";
      });
      subject.addEventListener("mouseleave", (e) => {
        subject.style.color = "#5E6778";
      });
    }

    time.innerHTML=notf[i].time;

    additional_content.style.cursor = "pointer";
    if(notf[i].additional_content === "")
      additional_content.classList.add("hidden");
    else
      additional_content.innerHTML=notf[i].additional_content;
    additional_content.addEventListener("mouseenter", (e) => {
      additional_content.style.backgroundColor = "hsl(205, 33%, 90%)";
    });
    additional_content.addEventListener("mouseleave", (e) => {
      additional_content.style.backgroundColor = "#fff";
    });

    img_post_cont.style.cursor = "pointer";
    if(notf[i].img_post ==="")
      img_post_cont.classList.add("hidden");
    else
      notf_element.querySelector(".image_content").src=notf[i].img_post;

    if(notf[i].read === true){
      notf_element.querySelector(".red_circle").classList.add("hidden");
      notf_element.classList.replace("bg-[#E5EFFA]","bg-white");
    }
  }
}

function buildNotfComponent(){
  let newElement = document.createElement('div');
  newElement.classList.add("notf","flex","p-4","bg-[#E5EFFA]","rounded-lg","my-2");
  let notf_element=`
    <div class="img_container mr-3 pt-1" style="max-width:50px; width:100%;">
      <img alt="" class="profile_icon">
    </div>
    <div class="content text-[#5E6778] grow">
      <span class="profile_name text-[#1C202B] font-extrabold"></span>
      <span class="title ml-1"></span>
      <span class="subject font-extrabold ml-1"></span>
      <div class="red_circle bg-[#F65351] ml-1 rounded-full w-2 h-2 inline-block"></div>
      <div class="time text-[#939DAE]"></div>
      <div class="additional_content border-2 px-6 py-4 mt-3 rounded border-[#939DAE]"></div>
    </div>
    <div class="img_post_cont rounded " style="max-width:50px; width:100%;">
      <img alt="" class="image_content w-full">
    </div>`;

  newElement.innerHTML = notf_element;

  return newElement;
}
