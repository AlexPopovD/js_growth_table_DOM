var e=document.querySelector(".container"),t=document.querySelector(".field tbody"),r=function(){var r=t.querySelector("tr").querySelectorAll("td").length,l=t.rows.length;e.querySelector(".append-row").disabled=l>=10,e.querySelector(".remove-row").disabled=l<=2,e.querySelector(".append-column").disabled=r>=10,e.querySelector(".remove-column").disabled=r<=2};e.addEventListener("click",function(e){var l=e.target.closest(".button"),n=t.querySelector("tr").querySelectorAll("td").length,o=t.rows.length,c=t.querySelectorAll("tr");if(l.classList.contains("append-row")){if(o>=10){l.setAttribute("disabled","");return}for(var d=document.createElement("tr"),i=0;i<n;i++){var a=document.createElement("td");d.appendChild(a)}t.appendChild(d)}if(l.classList.contains("remove-row")){if(o<=2){l.setAttribute("disabled","");return}t.lastElementChild.remove()}if(l.classList.contains("append-column")){if(n>=10){l.setAttribute("disabled","");return}c.forEach(function(e){var t=document.createElement("td");e.appendChild(t)})}if(l.classList.contains("remove-column")){if(n<=2){l.setAttribute("disabled","");return}c.forEach(function(e){e.lastElementChild.remove()})}r()}),r();
//# sourceMappingURL=index.e3b14fd4.js.map
