

let seatCount = 0;
let totalPriceAmount = 0;
let grandTotalAmount = 0;

const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');


const seats = document.querySelectorAll('.seat');

const totalSeat = document.getElementById('total-seat');
const totalSeatNumber = parseInt(totalSeat.innerText);

const selectedSeatNumber = document.getElementById('selected-seat-number');

const selectedSeatDetails = document.getElementById('selected-seat-details');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        seat.classList.add('bg-[#1DD100]', 'text-white');
        seatCount++;
        const remainingSeat = totalSeatNumber - seatCount;
        totalSeat.innerText = remainingSeat;

        selectedSeatNumber.innerText = seatCount;

        
        const li = document.createElement('li');
    
        li.innerText = `${seat.innerText} Economy 550` ;
        selectedSeatDetails.appendChild(li);
        
        totalPriceAmount = totalPriceAmount +550;
        totalPrice.innerText = totalPriceAmount;

       
       grandTotal.innerText = totalPriceAmount
       grandTotalAmount = parseInt(grandTotalAmount.innerText);

            const couponBtn = document.getElementById('coupon-code');
            couponBtn.addEventListener('click',function(){
                
                const couponInput = document.getElementById('coupon-input').value;
            
                if(couponInput ==='NEW15'){
                    const NewGrandTotalAmount = parseInt(totalPriceAmount*0.85);
                    
                    grandTotal.innerText = NewGrandTotalAmount;
                    console.log(NewGrandTotalAmount);
                }
                else if(couponInput ==='Couple 20'){
                    const NewGrandTotalAmount = parseInt(totalPriceAmount*0.80);
                    
                    grandTotal.innerText = NewGrandTotalAmount;
                    console.log(NewGrandTotalAmount);
                }
                else{
                    alert('Invalid Coupon!!');
                }
            
           
           
       })
       
    })


}












