parent = document.querySelector(".imgs")

cur_img = parent.firstChild.nextElementSibling
cur_l = ''
cur_r = ''

index_img = parseInt(cur_img.alt)
ind_l = 0
ind_r = 0

let images = parent.querySelectorAll('*');


clk_sound = new Audio("sounds/clk.mp3")

cur_next = ''
cur_prev = ''

function next() {

    clk_sound.play()
    
    if(index_img<24){
        images.forEach(function(e) {
            e.style.display = 'none';
        });
        cur_img = cur_img.nextElementSibling

        giveStyle()
    }
    
}


function prev() {

    clk_sound.play()

    console.log(index_img)

    if(index_img>1){
        images.forEach(function(e) {
            e.style.display = 'none';
        });
        cur_img = cur_img.previousElementSibling
    
        giveStyle()
    }

}


function giveStyle() {

    index_img = parseInt(cur_img.alt)
    
    cur_img.style.display = 'block';

    images.forEach(function(e) {
        e.className=""
    });
    

    cur_img.classList.add('c_el');

    cur_r = cur_img.nextElementSibling

    cur_l = cur_img.previousElementSibling

    ind_l=index_img-1
    ind_r=index_img+1


    for(i=1; i<=4; i++){
        if(ind_r<=24){

            cur_r.style.display = 'block';

            cur_r.classList.remove("imga")
            cur_r.classList.add(`${"r".repeat(i)}_el`);

            ind_r++

            cur_r = cur_r.nextElementSibling

            // console.log(i+"left")
        }
        
        if(ind_l>0){

            cur_l.style.display = 'block';

            cur_l.classList.remove("imga")
            cur_l.classList.add(`${"l".repeat(i)}_el`);

            ind_l--

            cur_l = cur_l.previousElementSibling


            // console.log(i+"right")
        }
    }

    images.forEach(function(e) {
        if(e.className==''){
            e.style.display="none"
        }
    });
}