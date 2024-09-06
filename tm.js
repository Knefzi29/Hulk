function updateTime(){
  const n= new Date()
  const hours=String(n.getHours()).padStart(2, '0')
  const minutes=String(n.getMinutes()).padStart(2, '0')
  const second=String(n.getSeconds()).padStart(2, '0')
  document.getElementById("hrs").textContent=hours
  document.getElementById("min").textContent=minutes
  document.getElementById("sec").textContent=second
}
setInterval(updateTime, 1000)
updateTime()