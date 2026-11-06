'use strict';
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.Planner=factory();})(globalThis,function(){
const text=(v,max)=>typeof v==='string'&&v.trim().length>0&&v.length<=max;
function dateOK(v){if(typeof v!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(v))return false;const d=new Date(v+'T00:00:00Z');return Number.isFinite(d.getTime())&&d.toISOString().slice(0,10)===v;}
function timeOK(v){return typeof v==='string'&&/^([01]\d|2[0-3]):[0-5]\d$/.test(v)}
function minutes(v){return Number(v.slice(0,2))*60+Number(v.slice(3,5))}
function conflict(a,b){return a.day===b.day&&minutes(a.start)<minutes(b.end)&&minutes(b.start)<minutes(a.end)}
function validate(raw){
 if(!raw||raw.version!==1||!Array.isArray(raw.courses)||!Array.isArray(raw.tasks)||raw.courses.length>200||raw.tasks.length>2000)throw Error('Format cadangan tidak valid atau terlalu besar.');
 const ids=new Set();function unique(id){if(!text(id,100)||ids.has(id))throw Error('ID kosong atau duplikat.');ids.add(id);return id}
 const courses=raw.courses.map(c=>{if(!c||!text(c.name,100)||!Number.isInteger(c.day)||c.day<0||c.day>6||!timeOK(c.start)||!timeOK(c.end)||minutes(c.start)>=minutes(c.end)||typeof c.location!=='string'||c.location.length>100)throw Error('Data mata kuliah tidak valid.');return{id:unique(c.id),name:c.name.trim(),day:c.day,start:c.start,end:c.end,location:c.location.trim()}});
 for(let i=0;i<courses.length;i++)for(let j=i+1;j<courses.length;j++)if(conflict(courses[i],courses[j]))throw Error('Cadangan berisi jadwal yang bentrok.');
 const tasks=raw.tasks.map(t=>{if(!t||!text(t.title,200)||!dateOK(t.due)||typeof t.done!=='boolean'||typeof t.courseId!=='string'||(t.courseId!==''&&!courses.some(c=>c.id===t.courseId)))throw Error('Data tugas tidak valid atau mata kuliah tidak ditemukan.');return{id:unique(t.id),title:t.title.trim(),due:t.due,done:t.done,courseId:t.courseId}});
 return {version:1,courses,tasks};
}
function clashes(courses,candidate){return courses.filter(c=>c.id!==candidate.id&&conflict(c,candidate))}
return{dateOK,timeOK,validate,conflict,clashes};
});
