parent = document.querySelector(".imgs")
ind_bnt = document.getElementById("indicator_btn")
menu_btn = document.querySelector('.buttons')

cur_img = parent.firstChild.nextElementSibling
cur_l = ''
cur_r = ''

index_img = parseInt(cur_img.alt)
ind_l = 0
ind_r = 0

let images = parent.querySelectorAll('*');

left_btn = document.getElementById('left_btn')
right_btn = document.getElementById('right_btn')
in_db = document.querySelector('.in_db')


src_of_images = []

is_anim_going=false



for(i=0; i<images.length; i++){
    newBtn = document.createElement('button')
    newBtn.id = `button${i}`
    newBtn.innerHTML = i+1
    ind_bnt.appendChild(newBtn)

    console.log(1)
}

let allbuttons = ind_bnt.querySelectorAll('*');

allbuttons[index_img].style.backgroundColor = 'gray'



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



cur_next = ''
cur_prev = ''

function next() {
    if(is_anim_going==false){
        if(index_img<images.length-1){
            images.forEach(function(e) {
                e.style.display = 'none';
            });
            cur_img = cur_img.nextElementSibling

            giveStyle()
        }

        else{
            cur_img = images[0]
            giveMoreAnim()
        }
    }
        
    
}


function prev() {
    if(is_anim_going==false){
        if(index_img>0){
            images.forEach(function(e) {
                e.style.display = 'none';
            });
            cur_img = cur_img.previousElementSibling
        
            giveStyle()
        }
        else{
            cur_img = images[images.length-1]
            giveMoreAnim()

        }
    }
}

async function giveMoreAnim(){
    is_anim_going = true
    op_counter = 0
    op_of_images = []
    images.forEach(function(e) {
        op_of_images.push(e.style.opacity)
        e.style.opacity = 0
    });
    await sleep(500)
    images.forEach(function(e) {
        e.style.opacity = op_of_images[op_counter]
        op_counter++
    });

    giveStyle()

    is_anim_going = false
}


function giveStyle() {
    
    clk_sound = new Audio("sounds/clk.mp3")
    clk_sound.play()

    allbuttons.forEach(function(e) {
        e.style.backgroundColor = 'lightgray'
    });
    
    console.log(index_img+ "!!!")
    index_img = parseInt(cur_img.alt)

    document.getElementById(`button${index_img}`).style.backgroundColor = 'gray'
    
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
        if(ind_r<=images.length-1){

            cur_r.style.display = 'block';

            cur_r.classList.remove("imga")
            cur_r.classList.add(`${"r".repeat(i)}_el`);

            ind_r++

            cur_r = cur_r.nextElementSibling

            // console.log(i+"left")
        }
        
        if(ind_l>=0){

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


ind_bnt.onclick = async function() {
    ebal_v_rot_animation = index_img
    ind_index = parseInt(event.target.id.slice(6, event.target.id.length))
    
    console.log(ind_index)

    if(isNaN(ind_index)!==true){
        op_counter = 0
        op_of_images = []
        if(Math.abs(ebal_v_rot_animation-ind_index)>4){
            images.forEach(function(e) {
                op_of_images.push(e.style.opacity)
                // e.src = 'sounds/kostil.jpg'
                e.style.opacity = 0
            });
            await sleep(500)
            images.forEach(function(e) {
                // e.src = src_of_images[src_counter]
                
                e.style.opacity = op_of_images[op_counter]
                op_counter++
            });

            console.log('jhahahahajhas')

        }

        cur_img = images[ind_index]
        giveStyle() 
    }
};


parent.onclick = function() {

    ind_index = parseInt(event.target.alt)
    console.log(ind_index)

    if(isNaN(ind_index)!==true){
        cur_img = images[ind_index]
        giveStyle() 
    }

};


function change_imgs_count() {
    if(event.target.value > 0 && event.target.value % 1===0 && event.target.value <= 100){
        images.forEach(function(e) {
            parent.removeChild(e)
        });

        allbuttons.forEach(function(e) {
            ind_bnt.removeChild(e)
        });
        

        for(i=0; i<event.target.value; i++){
            newImg = document.createElement('img')
            newImg.alt = i
            newImg.src = `https://picsum.photos/${1000 + parseInt(i)}/500`
            newImg.display = 'none'
            parent.appendChild(newImg)

            console.log(newImg)
        }

        cur_img = parent.firstChild.nextElementSibling
        
        index_img = parseInt(cur_img.alt)

        images = parent.querySelectorAll('*');


        for(i=0; i<images.length; i++){
            newBtn = document.createElement('button')
            newBtn.id = `button${i}`
            newBtn.innerHTML = i+1
            ind_bnt.appendChild(newBtn)
        
            console.log(1)
        }
        
        allbuttons = ind_bnt.querySelectorAll('*');
        
        allbuttons[index_img].style.backgroundColor = 'gray'

        giveStyle()
    }
}


function changeDirect() {
    if(event.target.value=='d_hor'){
        parent.style.display = 'flex'
        parent.style.position = 'absolute'
        parent.style.top = '20%'

        menu_btn.style.width = '100%'
        menu_btn.style.right = '0%'
        menu_btn.style.bottom = '5%'
        console.log(menu_btn.style.top)

        in_db.style.display = 'flex'

        left_btn.innerHTML = '←'
        right_btn.innerHTML = '→'

        left_btn.style.width = '500px'
        right_btn.style.width = '500px'
        
    }
    else if(event.target.value=='d_ver'){
        parent.style.display = 'block'
        parent.style.position = 'absolute'
        parent.style.top = '5%'
        parent.style.left = '0%'

        in_db.style.display = 'block'

        menu_btn.style.width = '50%'
        menu_btn.style.right = '0%'
        menu_btn.style.bottom = '30%'

        left_btn.innerHTML = '↑'
        right_btn.innerHTML = '↓'

        left_btn.style.width = '100%'
        right_btn.style.width = '100%'
    }
}
