import * as flsFunctions from './modules/functions.js'

(function () {

    flsFunctions.isWebp()
    gsap.registerPlugin(ScrollTrigger)
    let body = document.body
    console.log(window.innerHeight);

    function preloader(){
        let preloader = document.querySelector('.preloader')
        body.classList.add('lock')
        window.addEventListener('load', (e) =>{
            
            setTimeout(() =>{
                preloader.classList.add('hide')
                body.classList.remove('lock')
            }, 1500)
            setTimeout(() =>{
                preloader.style.display = 'none'
            }, 2000)
        })
    }
    preloader()
    function scrollAnimation() {
        let title = document.querySelectorAll('._shadow')
        let map = document.querySelector('.surf__section-img')
        let circles = document.querySelectorAll('.surfcircle')
        let plane = document.querySelector('.slide__plane')
        let coctail = document.querySelector('.slide__coctail')
        let hamm = document.querySelector('.slide2__hamm')
        let flower = document.querySelector('.slide2__flowerbig')
        let surfboard = document.querySelector('.shop__imgs')
        let circleinfo = document.querySelectorAll('.circleinfo')
        let shopBody = document.querySelector('.shop__body')
        let shopDop = document.querySelector('.shop__dop')



        ScrollTrigger.create({
            trigger: map,
            start: '0px 60%',
            end: '900px 60%',
            toggleClass: { targets: map, className: 'show' },
            scrub: true,
            onEnter: (e) => {
                circles.forEach((circle) => {
                    circle.classList.add('show')
                })
            },


        })
        title.forEach((tit) => {
            if (!tit.hasAttribute('data-noanimate')) {
                ScrollTrigger.create({
                    trigger: tit,
                    start: '0px 60%',
                    end: '700px 60%',
                    toggleClass: { targets: tit, className: 'show' },
                    scrub: true,
                    // markers:true,

                })
            }
        })
        let tl = gsap.timeline()
        tl.fromTo(plane, { x: 250 }, { x: 0 })
        
        ScrollTrigger.create({
            animation: tl,
            trigger: plane,
            start: '-250px 60%',
            end: '1300px 60%',
            scrub: true,
            
        })
        ScrollTrigger.create({
            trigger: coctail,
            start: '-250px 60%',
            end: '600px 60%',
            scrub: true,
            toggleClass: {targets: coctail, className: 'active'}
        })
        ScrollTrigger.create({
            trigger: hamm,
            start: '-250px 60%',
            end: '600px 60%',
            scrub: true,
            toggleClass: {targets: hamm, className: 'active'}
        })
        ScrollTrigger.create({
            trigger: flower,
            start: '-250px 60%',
            end: '600px 60%',
            scrub: true,
            toggleClass: {targets: flower, className: 'active'}
        })
        ScrollTrigger.create({
            trigger: surfboard,
            start: '0px 60%',
            end: '1600px 60%',
            scrub: true,
            // markers: true,
            toggleClass: {targets: surfboard, className: 'show'}, 
            
            onEnter: (e) =>{
                circleinfo.forEach((circle) =>{
                    circle.classList.add('show')
                })
                circleinfo[0].classList.add('active')
                shopBody.classList.add('show')
                shopDop.classList.add('show')
            }

        })
        
       



    }
    scrollAnimation()

    function hoverAnimaton() {
        let headLink = document.querySelectorAll('.link')
        let footerBtn = document.querySelectorAll('.footer__btn')

        headLink.forEach((link) => {

            link.addEventListener('mouseover', (e) => {
                link.classList.add('active')
            })
            link.addEventListener('mouseout', (e) => {
                link.classList.remove('active')
            })
        })
        footerBtn.forEach((btn) => {
            btn.addEventListener('mouseover', (e) => {
                btn.classList.add('active')
            })
            btn.addEventListener('mouseout', (e) => {
                btn.classList.remove('active')
            })
            btn.addEventListener('click', (e) => {
                e.preventDefault()
            })
        })
    }
    hoverAnimaton()
    function dinamicSlide() {
        let lines = document.querySelectorAll('.headcol')
        let ways = document.querySelectorAll('.way')
        let imgs = document.querySelectorAll('.head__background')
        let sheets = document.querySelectorAll('.sheet')
        // let headBody = document.querySelector('.head__body')
        let btnSlideLeft = document.querySelector('.head__arrowleft')
        let btnSlideRight = document.querySelector('.head__arrowright')
        let btnSlideNext = document.querySelector('.head__arrowright-next')
        let timer = 9 // css |=> headcol &__slideline.active {transition-duration: timer + 1}
        let timerCopy = 9
        let indLine = 1
        let timeTimer = 1000
        let timeOk = true

        setTimeout(() => {
            lines[indLine].classList.add('active')
            ways[indLine].classList.add('active')
            imgs[indLine].classList.add('active')
            sheets[indLine].classList.add('active')
        }, 1800)

        setInterval(() => {
            timer--

            btnSlideLeft.addEventListener('click', (e) => {
                if (timeOk) {
                    timer = timerCopy
                    indLine--

                    if (indLine < 0) {
                        indLine = lines.length - 1

                    }
                    vewLine(indLine)

                    timeOk = false
                    setTimeout(() => {
                        timeOk = true
                    }, timeTimer)
                }
            })
            btnSlideRight.addEventListener('click', (e) => {
                if (timeOk) {
                    timer = timerCopy
                    indLine++

                    if (indLine >= lines.length) {
                        indLine = 0
                    }
                    vewLine(indLine)

                    timeOk = false
                    setTimeout(() => {
                        timeOk = true
                    }, timeTimer)
                }

            })
            btnSlideNext.addEventListener('click', (e) => {
                if (timeOk) {
                    timer = timerCopy
                    indLine++

                    if (indLine >= lines.length) {
                        indLine = 0
                    }
                    vewLine(indLine)

                    timeOk = false
                    setTimeout(() => {
                        timeOk = true
                    }, timeTimer)
                }

            })

            function vewLine(ind) {
                lines.forEach((line) => {
                    line.classList.remove('active')
                })
                ways.forEach((way) => {
                    way.classList.remove('active')
                })
                imgs.forEach((img) => {
                    img.classList.remove('active')
                })
                sheets.forEach((sheet) => {
                    sheet.classList.remove('active')
                })
                lines[ind].classList.add('active')
                imgs[ind].classList.add('active')
                ways[ind].classList.add('active')
                sheets[ind].classList.add('active')



            }

            lines.forEach((line, index) => {
                line.addEventListener('click', (e) => {

                    if (!line.classList.contains('active')) {
                        if (timeOk) {
                            timer = timerCopy
                            indLine = index
                            vewLine(index)

                            timeOk = false
                            setTimeout(() => {
                                timeOk = true
                            }, timeTimer)
                        }

                    }
                })
            })

            if (timer < 0) {
                timer = timerCopy
                indLine++

                if (indLine >= lines.length) {
                    indLine = 0
                }

                vewLine(indLine)
            }

        }, 1000)



    }
    dinamicSlide()

    function modalMessage() {
        let message = document.querySelector('.message')
        let messageText = document.querySelector('.message-text')
        let messageBtn = document.querySelector('.message-agree')
        let elems = document.querySelectorAll('*')
        let status = true
        let timer = 9
        let timerCopy = 9

        let statusClick = {
            slide: 'It`s not a slider',
            rating: 'Thanks for the rating!',
        }

        elems.forEach((elem) => {
            elem.addEventListener('click', (e) => {
                if (elem.hasAttribute('data-noslide') || elem.hasAttribute('data-rating')) {

                    if (status) {
                        message.classList.add('show')

                        status = false

                        let interval = setInterval(() => {
                            timer--


                            if (timer <= 0) {
                                clearInterval(interval)
                                timer = timerCopy
                                message.classList.remove('show')
                                status = true
                            }

                            messageBtn.addEventListener('click', (e) => {
                                clearInterval(interval)
                                timer = timerCopy
                                message.classList.remove('show')
                                status = true
                                e.preventDefault()
                            })
                        }, 1000)

                        if (elem.hasAttribute('data-noslide')) {
                            messageText.textContent = `${statusClick.slide}`
                        } else if (elem.hasAttribute('data-rating')) {
                            messageText.textContent = `${statusClick.rating}`
                        }
                    }

                } else {
                    return
                }
            })
        })



    }
    modalMessage()

    function navigationBar() {
        let head = document.querySelector('.head')
        let headDay = document.querySelector('.head__day')
        let headMonth = document.querySelector('.head__month')
        let headMonthSpan = document.querySelector('.head__month span')
        let headYear = document.querySelector('.head__year span')
        let headLink = document.querySelectorAll('.head__link')
        let arrowDown = document.querySelector('.arrowdown')
        let burger = document.querySelector('.burger')
        let navBar = document.querySelector('.head__nav')


        let data = new Date()
        console.log(`year :${data.getFullYear()}`);
        console.log(`mounth :${data.getMonth()}`);
        console.log(`day :${data.getDate()}`);

        if (data.getMonth() >= 10) {
            headMonthSpan.textContent = 0
            headMonth.textContent = data.getMonth() + 1
        } else {
            headMonthSpan.textContent = data.getMonth() + 1
        }
        headDay.textContent = data.getDate()
        headYear.textContent = data.getFullYear()

        headLink.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault()

                let linkId = link.getAttribute('href').replace('#', '')
                let elemId = document.getElementById(linkId)

                burger.classList.remove('active')
                navBar.classList.remove('active')
                body.classList.remove('lock')

                elemId.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',

                })
            })
        })
        arrowDown.addEventListener('click', (e) => {
            window.scrollTo({
                behavior: 'smooth',
                top: head.offsetHeight,

            })
        })
        burger.addEventListener('click', (e) => {
            burger.classList.toggle('active')
            navBar.classList.toggle('active')
            body.classList.toggle('lock')
        })

        function scrollUp() {
            let upBtn = document.querySelector('.scrollup')

            window.addEventListener('scroll', (e) => {

                if (window.scrollY >= head.offsetHeight) {
                    upBtn.classList.add('show')
                } else {
                    upBtn.classList.remove('show')

                }

            })
            upBtn.addEventListener('mouseover', (e) => {
                upBtn.classList.add('active')
            })
            upBtn.addEventListener('click', (e) => {
                window.scrollTo({
                    behavior: 'smooth',
                    top: 0,
                })
            })
            upBtn.addEventListener('mouseout', (e) => {
                upBtn.classList.remove('active')
            })
        }
        scrollUp()


    }
    navigationBar()

    function mapButnCord() {
        let butnCord = document.querySelectorAll('.surfcircle')
        let mapCordN = document.querySelector('.surf__cord-n .surf__num')
        let mapCordW = document.querySelector('.surf__cord-w .surf__num')
        let imgSection = document.querySelector('.surf__section-img')
        let minCord = 50
        let maxCord = 200

        imgSection.addEventListener('click', (e) => {
            butnCord.forEach((btn) => {
                btn.classList.remove('active')
            })
        })
        function vewButn(ind) {
            butnCord.forEach((btn) => {
                btn.classList.remove('active')
            })
            butnCord[ind].classList.add('active')
        }
        butnCord.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                vewButn(index)
                e.stopPropagation()
                let rundomCordN = (Math.random() * (maxCord - minCord) + minCord)
                let rundomCordW = (Math.random() * (maxCord - minCord) + minCord)

                mapCordN.textContent = rundomCordN.toFixed(4)
                mapCordW.textContent = rundomCordW.toFixed(4)

            })
        })
    }
    mapButnCord()
    function cardEffect() {
        let optRow = document.querySelector('.opt__row')
        let cards = document.querySelectorAll('.card')
        let cardBtns = document.querySelectorAll('.card__btn')


        ScrollTrigger.matchMedia({

            '(max-width:630px)': function () {


                createScrollTriggersResize();

            },
            '(min-width:630px)': function () {
                createScrollTriggers();


            }

        })
        function createScrollTriggers() {
            ScrollTrigger.create({
                trigger: optRow,
                start: '-200px 60%',
                end: '900px 60%',
                toggleClass: { targets: optRow, className: 'show' },
                scrub: true,


            })
            cards.forEach((card) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: '0px 60%',
                    end: '900px 60%',
                    toggleClass: { targets: card, className: 'show' },
                    scrub: true,

                    onEnter: (e) => {
                        card.classList.add('lock')
                        setTimeout((e) => {
                            card.classList.remove('lock')
                        }, 1500)
                    }

                })
            })
        }
        function createScrollTriggersResize() {
            ScrollTrigger.create({
                trigger: optRow,
                start: '-200px 60%',
                end: '2500px 60%',
                toggleClass: { targets: optRow, className: 'show' },
                scrub: true,


            })
            cards.forEach((card) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: '200px 60%',
                    end: '900px 60%',
                    toggleClass: { targets: card, className: 'show' },
                    scrub: true,

                    onEnter: (e) => {
                        card.classList.add('lock')
                        setTimeout((e) => {
                            card.classList.remove('lock')
                        }, 1500)
                    }

                })
            })
        }




        cards.forEach((card) => {
            card.addEventListener('mouseover', (e) => {
                card.classList.add('active')
            })
            card.addEventListener('mouseout', (e) => {
                card.classList.remove('active')
            })
        })
        cardBtns.forEach((btn) => {
            btn.addEventListener('mouseover', (e) => {
                btn.classList.add('active')
            })
            btn.addEventListener('mouseout', (e) => {
                btn.classList.remove('active')
            })
            btn.addEventListener('click', (e) => {
                e.preventDefault()
            })
        })

    }
    cardEffect()
    function dinamicSlide2() {
        let imgs = document.querySelectorAll('.slide__img img')
        let imgsSection = document.querySelector('.slide__img')
        let sheets2 = document.querySelectorAll('.sheet2')
        let sheets3 = document.querySelectorAll('.sheet3')
        let slidecol = document.querySelectorAll('.col1 .col1__value')
        let slidecol2 = document.querySelectorAll('.col2 .col2__value')
        let slidecol3 = document.querySelectorAll('.col3 .col3__value')
        let slidecol4 = document.querySelectorAll('.col4 .col4__value')
        let btnSlideLeft = document.querySelector('.travel__arrowleft')
        let btnSlideRight = document.querySelector('.travel__arrowright')
        let cardBtns = document.querySelectorAll('.slide__btn')

        let indLine = 0
        let timeTimer = 1000
        let timeOk = true

        
        ScrollTrigger.matchMedia({

            '(max-width:630px)': function () {


                scrollTriggersResize();

            },
            '(min-width:630px)': function () {
                scrollTriggers();


            }

        })

        function scrollTriggersResize(){
            setTimeout(() => {
            imgs[indLine].classList.add('active')
            sheets2[indLine].classList.add('active')
            sheets3[indLine].classList.add('active')
            slidecol[indLine].classList.add('active')
            slidecol2[indLine].classList.add('active')
            slidecol3[indLine].classList.add('active')
            slidecol4[indLine].classList.add('active')

        }, 100)
        }
        function scrollTriggers(){
            ScrollTrigger.create({
                trigger: '.travel',
                start: '400px 60%',
                end: '1400px 60%',
                scrub: true,
                // markers: true,
    
                onEnter: (e) => {
                    imgs[indLine].classList.add('active')
                    sheets2[indLine].classList.add('active')
                    sheets3[indLine].classList.add('active')
                    slidecol[indLine].classList.add('active')
                    slidecol2[indLine].classList.add('active')
                    slidecol3[indLine].classList.add('active')
                    slidecol4[indLine].classList.add('active')
                }
            })
        }
        




        btnSlideLeft.addEventListener('click', (e) => {
            if (timeOk) {
                indLine--

                if (indLine < 0) {
                    indLine = imgs.length - 1

                }
                vewLine(indLine)

                timeOk = false
                setTimeout(() => {
                    timeOk = true
                }, timeTimer)
            }
        })
        btnSlideRight.addEventListener('click', (e) => {
            if (timeOk) {
                indLine++

                if (indLine >= imgs.length) {
                    indLine = 0
                }
                vewLine(indLine)

                timeOk = false
                setTimeout(() => {
                    timeOk = true
                }, timeTimer)
            }

        })


        function vewLine(ind) {
            imgs.forEach((img) => {
                img.classList.remove('active')
            })
            sheets2.forEach((sheet) => {
                sheet.classList.remove('active')
            })
            sheets3.forEach((sheet) => {
                sheet.classList.remove('active')
            })
            slidecol.forEach((col) => {
                col.classList.remove('active')
            })
            slidecol2.forEach((col2) => {
                col2.classList.remove('active')
            })
            slidecol3.forEach((col3) => {
                col3.classList.remove('active')
            })
            slidecol4.forEach((col4) => {
                col4.classList.remove('active')
            })
            imgs[ind].classList.add('active')
            sheets2[ind].classList.add('active')
            sheets3[ind].classList.add('active')
            slidecol[ind].classList.add('active')
            slidecol2[ind].classList.add('active')
            slidecol3[ind].classList.add('active')
            slidecol4[ind].classList.add('active')


        }
        let start = 0
        let over = 0
        let prue = false
        imgsSection.addEventListener('touchstart', (e) => {

            prue = true
            let elem = e.changedTouches[0]

            start = elem.clientX


        })

        imgsSection.addEventListener('touchend', (e) => {
            if (timeOk) {
                prue = false
                let elem = e.changedTouches[0]
                over = elem.clientX

                let calcSum = start - over

                if (calcSum > 0) {
                    indLine++

                    if (indLine >= imgs.length) {
                        indLine = 0
                    }

                    vewLine(indLine)
                } else if (calcSum == 0) {

                } else if (calcSum < 0) {
                    indLine--

                    if (indLine < 0) {
                        indLine = imgs.length - 1

                    }
                    vewLine(indLine)
                }
                timeOk = false
                setTimeout(() => {
                    timeOk = true
                }, timeTimer)
            }

        })

        cardBtns.forEach((btn) => {
            btn.addEventListener('mouseover', (e) => {
                btn.classList.add('active')
            })
            btn.addEventListener('mouseout', (e) => {
                btn.classList.remove('active')
            })
            btn.addEventListener('click', (e) => {
                e.preventDefault()
            })
        })
    }
    dinamicSlide2()

    function dinamicSlide3() {
        let cardBtns = document.querySelectorAll('.slide2__btn')
        let imgs = document.querySelectorAll('.slide2__img img')
        let imgsSection = document.querySelector('.slide2__img')
        let sheets2 = document.querySelectorAll('.sheet4')
        let sheets3 = document.querySelectorAll('.sheet5')
        let slidecol = document.querySelectorAll('.col5 .col5__value')
        let slidecol2 = document.querySelectorAll('.col6 .col6__value')
        let slidecol3 = document.querySelectorAll('.col7 .col7__value')
        let slidecol4 = document.querySelectorAll('.col8 .col8__value')
        let btnSlideLeft = document.querySelector('.sleep__arrowleft')
        let btnSlideRight = document.querySelector('.sleep__arrowright')


        let indLine = 0
        let timeTimer = 1000
        let timeOk = true


        ScrollTrigger.matchMedia({

            '(max-width:630px)': function () {


                scrollTriggersResize2();

            },
            '(min-width:630px)': function () {
                scrollTriggers2();


            }

        })

        function scrollTriggersResize2(){
            setTimeout(() => {
                imgs[indLine].classList.add('active')
                sheets2[indLine].classList.add('active')
                sheets3[indLine].classList.add('active')
                slidecol[indLine].classList.add('active')
                slidecol2[indLine].classList.add('active')
                slidecol3[indLine].classList.add('active')
                slidecol4[indLine].classList.add('active')
    
            }, 100)
        }
        function scrollTriggers2(){
            ScrollTrigger.create({
                trigger: '.sleep',
                start: '400px 60%',
                end: '1400px 60%',
                scrub: true,
    
                onEnter: (e) => {
                    imgs[indLine].classList.add('active')
                    sheets2[indLine].classList.add('active')
                    sheets3[indLine].classList.add('active')
                    slidecol[indLine].classList.add('active')
                    slidecol2[indLine].classList.add('active')
                    slidecol3[indLine].classList.add('active')
                    slidecol4[indLine].classList.add('active')
                }
            })
        }


        btnSlideLeft.addEventListener('click', (e) => {
            if (timeOk) {
                indLine--

                if (indLine < 0) {
                    indLine = imgs.length - 1

                }
                vewLine(indLine)

                timeOk = false

                setTimeout(() => {
                    timeOk = true
                }, timeTimer)
            }

        })
        btnSlideRight.addEventListener('click', (e) => {
            if (timeOk) {
                indLine++

                if (indLine >= imgs.length) {
                    indLine = 0
                }
                vewLine(indLine)

                timeOk = false
                setTimeout(() => {
                    timeOk = true
                }, timeTimer)
            }
        })

        function vewLine(ind) {
            imgs.forEach((img) => {
                img.classList.remove('active')
            })
            sheets2.forEach((sheet) => {
                sheet.classList.remove('active')
            })
            sheets3.forEach((sheet) => {
                sheet.classList.remove('active')
            })
            slidecol.forEach((col) => {
                col.classList.remove('active')
            })
            slidecol2.forEach((col2) => {
                col2.classList.remove('active')
            })
            slidecol3.forEach((col3) => {
                col3.classList.remove('active')
            })
            slidecol4.forEach((col4) => {
                col4.classList.remove('active')
            })
            imgs[ind].classList.add('active')
            sheets2[ind].classList.add('active')
            sheets3[ind].classList.add('active')
            slidecol[ind].classList.add('active')
            slidecol2[ind].classList.add('active')
            slidecol3[ind].classList.add('active')
            slidecol4[ind].classList.add('active')

        }
        let start = 0
        let over = 0
        let prue = false
        imgsSection.addEventListener('touchstart', (e) => {

            prue = true
            let elem = e.changedTouches[0]

            start = elem.clientX


        })

        imgsSection.addEventListener('touchend', (e) => {
            if (timeOk) {
                prue = false
                let elem = e.changedTouches[0]
                over = elem.clientX

                let calcSum = start - over

                if (calcSum > 0) {
                    indLine++

                    if (indLine >= imgs.length) {
                        indLine = 0
                    }

                    vewLine(indLine)
                } else if (calcSum == 0) {

                } else if (calcSum < 0) {
                    indLine--

                    if (indLine < 0) {
                        indLine = imgs.length - 1

                    }
                    vewLine(indLine)
                }
                timeOk = false
                setTimeout(() => {
                    timeOk = true
                }, timeTimer)
            }

        })

        cardBtns.forEach((btn) => {
            btn.addEventListener('mouseover', (e) => {
                btn.classList.add('active')
            })
            btn.addEventListener('mouseout', (e) => {
                btn.classList.remove('active')
            })
            btn.addEventListener('click', (e) => {
                e.preventDefault()
            })
        })
    }
    dinamicSlide3()

    function shopAnim() {
        let circle = document.querySelectorAll('.circleinfo')
        let shop = document.querySelector('.shop')
        let shopBtn = document.querySelectorAll('.shop__btn')

        function vewCircle(ind) {
            circle.forEach((cir) => {
                cir.classList.remove('active')
            })
            circle[ind].classList.add('active')
        }

        shop.addEventListener('click', (e) => {
            circle.forEach((cir) => {
                cir.classList.remove('active')
            })
        })
        circle.forEach((cir, index) => {
            cir.addEventListener('click', (e) => {
                vewCircle(index)
                e.stopPropagation()
            })
        })
        shopBtn.forEach((btn) => {
            btn.addEventListener('mouseover', (e) => {
                btn.classList.add('active')
            })
            btn.addEventListener('mouseout', (e) => {
                btn.classList.remove('active')
            })
            btn.addEventListener('click', (e) => {
                e.preventDefault()
            })
        })

    }
    shopAnim()


    let ratingActive
    let ratingValue
    function starRating() {
        const ratings = document.querySelectorAll('.rating')

        if (ratings.length > 0) {
            initRaitings()
        }


        function initRaitings() {


            ratings.forEach((rating) => {
                initRaiting(rating)
            })
        }
        function initRaiting(rating) {
            initRaitingVar(rating)

            setRatingActiveWidth()


            if (rating.classList.contains('rating_set')) {
                setRating(rating)
            }
        }

        function initRaitingVar(rating) {
            ratingActive = rating.querySelector('.rating__active')
            ratingValue = rating.querySelector('.rating__value')
        }
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const raitingActiveWidth = index / 0.05
            ratingActive.style.width = `${raitingActiveWidth}%`
        }

        function setRating(rating) {
            let ratingItems = rating.querySelectorAll('.rating__item')

            ratingItems.forEach((item, index) => {
                item.addEventListener('mouseenter', (e) => {
                    initRaitingVar(rating)
                    setRatingActiveWidth(item.value)
                })
                item.addEventListener('mouseleave', (e) => {
                    setRatingActiveWidth()
                })
                item.addEventListener('click', (e) => {
                    initRaitingVar(rating)
                    if (rating.dataset.ajax) {
                        setRatingValue(item.value, rating)
                    } else {
                        ratingValue.innerHTML = index + 1
                        setRatingActiveWidth()

                    }


                })
            })
        }
        async function setRatingValue(value, rating) {
            if (!rating.classList.contains('rating_sending')) {
                rating.classList.add('rating_sending')

                let response = await fetch('rating.json', {
                    method: 'GET',

                    // body: JSON.stringify({
                    //     userRating: value
                    // }),
                    // headers: {
                    //     'content-type': 'application/json'

                    // }

                })
                if (response.ok) {
                    const result = await response.json()

                    const newRating = result.newRating

                    ratingValue.innerHTML = newRating

                    setRatingActiveWidth()

                    rating.classList.remove('rating_sending')
                } else {
                    alert('error')

                    rating.classList.remove('rating_sending')
                }
            }
        }
    }
    starRating()


    SmoothScroll({
        animationTime: 1500,
        stepSize: 75,

        accelerationDelta: 30,
        accelerationMax: 2,

        keyboardSupport: true,
        arrowScroll: 50,


        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,


        touchpadSupport: true,
    })


})();
