function book(){
const s=document.getElementById('service').value;
const t=document.getElementById('time').value;
const r=document.getElementById('result');
r.innerText=s&&t?`✅ Ви забронювали "${s}" на ${t}`:"❌ Оберіть послугу та час";
}