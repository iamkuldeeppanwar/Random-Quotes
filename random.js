var i=0;
                fetch(`https://type.fit/api/quotes`)
                .then(data=>{
                        return data.json();
                        console.log(data);
                }).then(data=>{ 
                        var button = document.getElementById("btn");
                        button.addEventListener('click', () => {
                        getResult(data)
                        })
                        function getResult(data){
                                var div=document.getElementById("Quotes");
                                if(i<1643){
                                div.innerHTML="";
                                div.innerHTML+="<h3>"+data[i].text+"."+"<h1>"+"_"+data[i].author+"</h1></h3>";
                                i++;
                        }
                }             
        });              