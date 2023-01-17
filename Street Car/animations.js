const introTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#intro",
        start: "top top -100",
        // scrub: true,
        snap: {
            snapTo: "labelsDirectional", 
            duration: 1,
            delay: 0,
            ease: "power1.inOut"
        },
        toggleActions: 'play none none reverse'
    }
});
const carterTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#carter",
        start: "top 10",
        // snap: {
        //     snapTo: "labelsDirectional", 
        //     duration: 1,
        //     delay: 0,
        //     ease: "power1.inOut"
        // }
    }
});

const galleryTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#gallery",
        start: "top 10",
    }
});
// const story1TL = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.part-one',
//         start: 'top 80%',
//         end: 'center center',
//         scrub: true,
//         toggleActions: 'play none none reverse'
//     }
// });
// const story2TL = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.part-two',
//         start: 'top 80%',
//         end: '+=200',
//         scrub: true,
//         toggleActions: 'play none none reverse'
//     }
// });

introTL.addLabel('start')
.fromTo(
    "#logo-round", {
        scale: 4, 
        fill: "#fff",
        backgroundColor: "transparent",
        top: 400
    }, {
        scale: 1, 
        duration: .5,
        fill: "#245289",
        backgroundColor: "#fff",
        boxShadow: "1px 1px 7px rgba(0,0,0,.25)",
        top: 5
    }, 0
).fromTo(
    'header', {
        top: -100
    }, {
        top: 0
    }, 0.1
).addLabel('end');

carterTL.addLabel('carter-start')
.from(
    '.bio', {
        x: '30%'
    }
)
.from(
    ".bio h2", {
        x: '5%',
        opacity: 0
    }, 0
).from(
    '.bio p', {
        x: '-5%',
        opacity: 0
    }, 0
).from(
    '#carter img', {
        y: '20%',
        opacity: 0
    }, 0
).addLabel('end');

galleryTL.addLabel('gallery-start')
.from(
    '#gallery', {
        scale: 2,
        padding: 0,
        duration: 1
    }
).addLabel('gallery-end');


// story1TL.addLabel('part-one')
// .to(
//     '.part-one', {     
//         color: '#ffff',
//         duration: 1
//     }
// ).addLabel('part-one-end');

// story2TL.addLabel('part-two')
// .to(
//     '.wall-img', {
//         filter: 'grayscale(0)',
//         duration: 2
//     }, 0
// )
// .to(
//     '.part-two', {
//         color: '#ffff',
//         duration: 1
//     }, 0
// ).addLabel('part-two-end')