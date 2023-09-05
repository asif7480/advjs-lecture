        // let p1 = document.getElementById("p1").value
        // let p2 = document.getElementById("p2").value
        // let output = document.getElementById("output").value

        // function validation(){
        //     if(p1 !== "" && p2 !== ""){
        //         console.log(p1,p2);
        //         if(p1 === p2){
        //             return true
        //         }else{
        //             alert("Both Password must be same.")
        //             // output.innerHTML = "Both Password must be same."
        //         }
        //     }
        //         alert("Enter both passwords.")
        //         return false
        //         // output.innerHTML = "Enter both passwords."
            
        // }


        function validate() {
            var n1 = document.getElementById('num1');
            var n2 = document.getElementById('num2');
            if(n1.value != '' && n2.value != '') {
                if(n1.value == n2.value) {
                    return true;
                }
            }
            alert("The values should be equal and not blank");
            return false;
        }        