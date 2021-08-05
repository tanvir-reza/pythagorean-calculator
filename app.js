const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    function pythagoreanTriplets(limit)
    {
      let a, b, c = 0;
        let m = input1.value;
     
        while (c < limit)
        {
             
            // Now loop on j from 1 to i-1
            for(let n = 1; n < m; ++n)
            {
                a = m * m - n * n;
                b = 2 * m * n;
                c = m * m + n * n;
     
                if (c > limit)
                    break;
     
                    document.write(a + " " + b + " " + c + "</br>");  
            }
            m++;
        }
    }
    pythagoreanTriplets(input2.value);
    
})



