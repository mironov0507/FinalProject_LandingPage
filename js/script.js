let navM = [['#m1', 'Преимущества'], ['#m2', 'Как это работает'], ['pages/catalog_chairs.html', 'Каталог стульев'], ['pages/catalog_tables.html', 'Каталог столов'], ['#m3', 'Галерея'], ['pages/reviews.html', 'Отзывы'], ['#m4', 'Контакты']];

class Popup{
    constructor(option){
        this.create(option);
        this.addEvent();
    }

    open(){
        let header = document.querySelector('header');
        header.appendChild(this.html);
    }

    close(){
        this.html.remove();
    }

    addEvent(){
        this.html.addEventListener('click', (event) =>{
            if(event.target.classList.contains('closed')){
                this.close();
            }
        })
    }

    create(navM){
        this.navLi = navM;
        this.html = this.createHtml();
    }

    createHtml(){
        this.navMob = document.createElement('div');
        this.navMob.classList.add('nav_mob');

        let list = '';

        this.navLi.forEach((el) =>{
            list += `<li><a class="closed" href=${el[0]}>${el[1]}</a></li>`
        });

        this.navMob.innerHTML = `
        <div class="bg_close closed"></div>
        <div class="but_close closed">x</div>
        <ul>
            ${list}
        </ul>
        `
        return this.navMob
    }
}

let popupNav = new Popup(navM);
let btnB = document.querySelector('.burger');
btnB.addEventListener('click', () =>{
    popupNav.open();
});


class PopupOrder{
    constructor(){
        this.html = this.createHtml();
        this.addEvent();
    }
    
    open(){
        let main = document.querySelector('main');
        main.appendChild(this.html);
    }

    close(){
        this.html.remove();
        document.location.reload();
    }

    addEvent(){
        this.html.addEventListener('click', (event) =>{
            if(event.target.classList.contains('closed')){
                this.close();
            }
        })
    }

    createHtml(){
        this.popOrder = document.createElement('div');
        this.popOrder.classList.add('wrapper_ord');
        this.popOrder.innerHTML = `
        <div class="bg_form closed"></div>
        <div class="pop_ord">
            <div class="but_close gray closed">x</div>
            <form action="/" method="POST">
                <div class="field"> Ваше имя<br>
                    <input type="text" name="name">
                </div>
                <div class="field"> Ваш телефон<br>
                    <input type="tel" pattern="[0-9]*" name="phone" placeholder="+375 (__) ___-__-__">
                </div>
                <div class="text_order"><p>Для согласования заказа нажмите Отправить, <br> и мы Вам перезвоним!</p></div>
                <button type="submit" class="closed">Отправить</button>
            </form>
        </div>
        `
        return this.popOrder
    }
}

let popOrder = new PopupOrder();
let btnOrd = document.querySelectorAll('.openOrd');
btnOrd.forEach(el =>{
    el.addEventListener('click', () =>{
        popOrder.open();
    });
})


class PopupExemple{
    constructor(){
        this.html_1 = this.createHtml_1();
        this.html_2 = this.createHtml_2();
        this.addEvent();
    }
    
    open(e){
        let main = document.querySelector('main');

        if(e == 'ex_1'){
            main.appendChild(this.html_1);
            return
        };
        if(e == 'ex_2'){
            main.appendChild(this.html_2);
        };
        
    }

    close(block){
        block.remove();
    }

    addEvent(){
        this.html_1.addEventListener('click', (event) =>{
            if(event.target.classList.contains('closed')){
                this.close(this.html_1);
            }
        })

        this.html_2.addEventListener('click', (event) =>{
            if(event.target.classList.contains('closed')){
                this.close(this.html_2);
            }
        })
    }

    createHtml_1(){
        this.popExemple_1 = document.createElement('div');
        this.popExemple_1.classList.add('wrapper_exm');
        this.popExemple_1.innerHTML = `
        <div class="bg_form closed"></div>
        <div class="pop_exm">
            <div class="but_close gray closed">x</div>
            <div class="title_pop">Пример стула-трансформера</div>
            <div class="wrapper_foto">
                <div class="item_pop f_1"></div>
                <div class="item_pop f_2"></div>
                <div class="item_pop f_3"></div>
                <div class="item_pop f_4"></div>
            </div>
        </div>
        `
        return this.popExemple_1
    }

    createHtml_2(){
        this.popExemple_2 = document.createElement('div');
        this.popExemple_2.classList.add('wrapper_exm');
        this.popExemple_2.innerHTML = `
        <div class="bg_form closed"></div>
        <div class="pop_exm">
            <div class="but_close gray closed">x</div>
            <div class="title_pop">Пример стола-трансформера</div>
            <div class="wrapper_foto">
                <div class="item_pop f_5"></div>
                <div class="item_pop f_6"></div>
                <div class="item_pop f_7"></div>
                <div class="item_pop f_8"></div>
            </div>
        </div>
        `
        return this.popExemple_2
    }
}

let popupExemple = new PopupExemple();

let btnChr = document.querySelector('.chair');
btnChr.addEventListener('click', () =>{
    popupExemple.open('ex_1');
});

let btnTbl = document.querySelector('.table');
btnTbl.addEventListener('click', () =>{
    popupExemple.open('ex_2');
});




let sld = {
    name: 'slider',
    next: 'next',
    prev:'prev'
};

let slider = function(info){

    let slider = document.querySelector(`#${info.name}`);
    if(!slider) return;

    let promoList = slider.querySelector('ul');
    if(!promoList) return;

    let item = promoList.querySelectorAll('li');
    if(item.length == 0) return;

    let bPrev = slider.querySelector(`#${info.prev}`),
        bNext = slider.querySelector(`#${info.next}`);

        bPrev.classList.add('last');

    let prevNext = function(type, button){
        let sliderItem = item[0],
        ml = sliderItem.style.marginLeft ? Math.abs(parseInt(sliderItem.style.marginLeft)) : 0;

        let mlDef = ml,
            step = 100;

        let mooveSlider = function(){
            ml = ml+5*(type == 'prev'? -1 : 1)
            sliderItem.style.marginLeft = `-${ml}%`;

            if(type == 'next' && ml < mlDef + step || type == 'prev' && ml > mlDef - step){
                window.requestAnimationFrame(mooveSlider);
            }else{
                button.disabled = false;
            }
        };

        if(type == 'next' && (ml < (item.length-1)*100) || type == 'prev' && ml > 0){
            button.disabled = true;

            if(type == 'next' && (ml == (item.length-2)*100)){
                bNext.classList.add('last');
            }else{
                bNext.classList.remove('last');
            }

            if(type == 'prev' && ml == 100){
                bPrev.classList.add('last');
            }else{
                bPrev.classList.remove('last');
            }

            mooveSlider();
        }
    }

    if(info.next && info.prev){

            if(bPrev && bNext){
                bPrev.addEventListener('click', function(){
                    prevNext('prev', this);
                });

                bNext.addEventListener('click', function(){
                    prevNext('next', this);
                });

            }
    }

 
};

slider(sld);

