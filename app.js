const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const form = document.getElementById('form');
let x = 0;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(Number(input1.value) && Number(input2.value)){
        if(input1.value >=2 && input2.value <= 20000){
        function pythagoreanTriplets(limit)
        {
         let a, b, c = 0;
         let m = input1.value;
     
         while (c < limit)
         {
             
            for(let n = 1; n < m; ++n)
            {
                a = m * m - n * n;
                b = 2 * m * n;
                c = m * m + n * n;
     
                if (c > limit)
                    break;
     
                // document.write(a + " " + b + " " + c + "</br>");

                x++;
               document.querySelector('#triangle').classList.add('off');
               document.querySelector('#valo').classList.add('off');
                document.querySelector('#result').classList.add('on');
                var h = document.querySelector('#res');
                h.insertAdjacentHTML('beforeend', '{(');
                h.insertAdjacentHTML('beforeend', a);
                h.insertAdjacentHTML('beforeend', ',');
                h.insertAdjacentHTML('beforeend', b);
                h.insertAdjacentHTML('beforeend', ',');
                h.insertAdjacentHTML('beforeend', c);
                h.insertAdjacentHTML('beforeend', ')}');

                h.insertAdjacentHTML('beforeend' ,'<br>')
                console.log(a, b ,c);
                

            }
                m++;
               
         }
            if(x==0){
                document.querySelector('#triangle').classList.add('off');
               document.querySelector('#valo').classList.add('off');
               document.querySelector('#error').classList.add('on');
                document.querySelector('#error').innerHTML = "Error <br> Result Not Found !!";
            }
        }
    pythagoreanTriplets(input2.value);
        }
        else{
            document.querySelector('#triangle').classList.add('off');
               document.querySelector('#valo').classList.add('off');
               document.querySelector('#error').classList.add('on');
            document.querySelector('#error').innerHTML = "Error <br> Enter Valid Data !!";
        }
    }
    else{
        document.querySelector('#triangle').classList.add('off');
               document.querySelector('#valo').classList.add('off');
               document.querySelector('#error').classList.add('on');
        document.querySelector('#error').innerHTML="Error <br> Enter Numerical Value !!";
    }
    
})



