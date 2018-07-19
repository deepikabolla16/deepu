//function getfile(file,callback)
// {
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange =function()
//   {
//     if(xhr.readyState=== 4 && xhr.status=="200")
//     {
//       callback(xhr.responseText);
//   }
// };
// xhr.send(null);
//
// }
// getfile("data.json",function(text)
// {
//   var data= JSON.parse(text);
//    console.log(data);
//     details(data.basics);
//     career(data.CareerObjective);
//     education(data.education);
//     skills(data.skills);
// })
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok)
      {
        resolve(response.json());
      }
        else{
          reject(new Error("error"));
      }
    })
  })
}
var newfile=loadjson("data.json");
newfile.then(data=>
{
  details(data.basics);
  career(data.CareerObjective);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})
var child=document.querySelector(".childone");
function details(det){
var img=document.createElement("img");
img.src=det.image;
child.appendChild(img);

var name=document.createElement("h2");
name.textContent=det.name;
child.appendChild(name);

var phoneno=document.createElement("h3");
phoneno.textContent=det.phoneno;
child.appendChild(phoneno);

var email=document.createElement("a");
email.href = "mailto:deepika.bolla7j@gmail.com";
email.textContent=det.email;
child.appendChild(email);
var Address=document.createElement("h3");
Address.textContent=det.Address;
child.appendChild(Address);


var b=document.createElement("hr");
child.appendChild(b);
}
var child2=document.querySelector(".childtwo");
function career(det){
  var career=document.createElement("h2");
  career.textContent=det.career;
  child2.appendChild(career);

  var c=document.createElement("hr");
  child2.appendChild(c);

var info=document.createElement("h3");
info.textContent=det.info;
child2.appendChild(info);
}

function education(edu)
{
  var ed=document.createElement("h3");
  ed.textContent="Educational Qualification:";
  child2.appendChild(ed);

  var d=document.createElement("hr");
  child2.appendChild(d);

 for(i=0;i < edu.length;i++)
 {
   var deg=document.createElement("h3");
   deg.textContent=edu[i].degree;
   child2.appendChild(deg);

   var eduul=document.createElement("ul");
   var ins=document.createElement("li");
   ins.textContent=edu[i].institute;
   eduul.appendChild(ins);
   child2.appendChild(eduul);

   var eduul=document.createElement("ul");
   var  dur=document.createElement("li");
   dur.textContent=edu[i].duration;
   eduul.appendChild(dur);
   child2.appendChild(eduul);

   var eduul=document.createElement("ul");
   var bran=document.createElement("li");
   bran.textContent=edu[i].branch;
   eduul.appendChild(bran);
   child2.appendChild(eduul);

 }
}

function skills(skillinfo)
{
  var s=document.createElement("h3");
  s.textContent="Technical skills";
  child2.appendChild(s);

  var h=document.createElement("hr");
  child2.appendChild(h);

  var skilldata=document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);

tabledata="";
for(i=0;i<skillinfo.length;i++)
{
  tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
}
skilldata.innerHTML=tabledata;

}
function achievements(achinfo)
{
  var m=document.createElement("h3");
  m.textContent="achievements";
  child2.appendChild(m);

  var n=document.createElement("hr");
  child2.appendChild(n);

  var achdata=document.createElement("table");
  achdata.border="1";
  child2.appendChild(achdata);

tabledata="";
for(i=0;i<achinfo.length;i++)
{
  tabledata+="<tr><td>"+achinfo[i].title+"</td><td>"+achinfo[i].data+"</td></tr>";
}
achdata.innerHTML=tabledata;

}
