
        let a = document.getElementById('inp1');  
        let b = document.getElementById('inp2');     

        function add(){
            let addition = parseInt(a.value) + parseInt(b.value);
            document.getElementById('result').innerHTML = addition; 
        }

        function sub(){
            let subtract = parseInt(a.value) - parseInt(b.value);
            document.getElementById('result').innerHTML = subtract; 
        }

        function mul(){
            let multiply = parseInt(a.value) * parseInt(b.value);
            document.getElementById('result').innerHTML = multiply; 
        }

        function div(){
            let divide = parseFloat(a.value) / parseFloat(b.value);
            document.getElementById('result').innerHTML = divide; 
        }

        function Clear(){
            document.getElementById('result').innerHTML = "";
        }
