let d=document,Q=a=>d.querySelectorAll(a),q=a=>Q(a)[0];

window.onload=(()=>{
    q("div#loading-screen").classList.add("hidden");

    q("div#content").classList.remove("hidden")
    Q("div#content div:not(div#content * div)").forEach((portion,i)=>{
        console.log(portion,i);
        portion.classList.add("hidden");
        setTimeout(()=>{
            portion.classList.remove("hidden");
        },i*700+1000)
    })
})