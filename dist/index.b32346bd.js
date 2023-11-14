// All items we'd like to add
const e=[{href:"index.html",text:"Our Story"},{href:"index5.html",text:"Explore"}];window.addEventListener("DOMContentLoaded",e=>{l()});// create elements
const t=document.createElement("nav");t.className="menu";const n=document.createElement("ol"),l=()=>{window.location.pathname,document.querySelector(".menu-item");for(let l=0;l<e.length;l++){let a=document.createElement("li");a.className="menu-item";let d=document.createElement("a");d.href=e[l].href,d.innerHTML=e[l].text,a.appendChild(d);//if subitems exists , then render them.
let o=e[l].subItems;if(o&&o.length){let e=document.createElement("ol");o.forEach(t=>{let n=document.createElement("li"),l=document.createElement("a");n.className="menu-item",e.className="sub-menu",l.href=t.href,l.innerHTML=t.text,n.appendChild(l),e.appendChild(n)}),a.appendChild(e)}// Add anchor to list item, and list item to list
n.appendChild(a),t.appendChild(n)}};// Add list to body (or anywhere else)
window.onload=function(){document.body.appendChild(t)};class a extends HTMLElement{connectedCallback(){this.innerHTML=`
        <div class="containar">
        
    <footer>
   
<div class="footer-content">
    <h4>Get help</h4>
    <br>
    <ul>
        <li><a href="index2.html">Futhi</a></li>
    </ul>
</div>
<div class="footer-content">
    <h4>Contact us</h4>
    <br>
    <div class="social-links">
    <ul>
    <a href="#"><i class="fab fa-instagram"></i></a>
        </ul>

    </div>   
    
</div>
</div>

</div>

</div>

    </footer>

        `}}customElements.define("my-footer",a);