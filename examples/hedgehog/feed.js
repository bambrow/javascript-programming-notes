
function resizeGame() {
    let canvas = $('.game');
    let width = canvas.width();
    canvas.css({'height': width*1.2 + 'px'});
}

function calculateRoute() {
    let sheep = $('div.sheep');
    let sheepPosition = sheep.position();
    let sheepImg = $('div.sheep div.image');
    let sheepWidth = sheepImg.width();
    let sheepHeight = sheepImg.height();
    let hedgehog = $('div.hedgehog');
    let hedgehogPosition = hedgehog.position();
    let hedgehogImg = $('div.hedgehog div.image');
    let hedgehogWidth = hedgehogImg.width();
    let hedgehogHeight = hedgehogImg.height();
    return {
        'st': sheepPosition.top + sheepHeight * 0.55,
        'sl': sheepPosition.left + sheepWidth * 0.35,
        'et': hedgehogPosition.top + hedgehogHeight * 0.35,
        'el': hedgehogPosition.left + hedgehogWidth * 0.42
    }
}

function hedgehogPick() {
    const words = [
        '我最喜欢吃小点心了！',
        '感谢投喂！',
        '口水都流出来啦！',
        '哼唧！好吃！',
        '吃了这么多小点心会不会变胖呀！',
        '来一起吃小点心吧！'
    ];
    return words[Math.floor(Math.random() * words.length)];
}

function sheepPick() {
    const words = [
        '快接住小点心！',
        '咩！去吧小点心！',
        '慢慢吃，还有好多！',
        '这可是我亲手做的！',
        '再来一颗！',
        '你一颗，我一颗！'
    ];
    return words[Math.floor(Math.random() * words.length)];
}

function readyDoc() {
    resizeGame();

    let score = 0;
    $('div.number').text(score);

    let audio = document.createElement('audio');
    audio.setAttribute('src', 'yum.m4a');

    let feeding = false;

    $('#sheep').click(function () {
        if (!feeding) {
            feeding = true;

            setTimeout(function() {
                let hedgehog = $('#hedgehog');
                hedgehog.attr('src', 'hedgehog2.png');
                $('div.hedgehog div.bubble').text(hedgehogPick());

                let sheep = $('div.sheep div.image');
                let sheepTop = sheep.position().top;
                sheep.css({'top': sheepTop*0.3 + 'px'});
                $('div.sheep div.bubble').text(sheepPick());

                let scoreImage = $('div.score div.image');
                let scoreImageTop = scoreImage.position().top;
                scoreImage.css({'top': scoreImageTop*0.3 + 'px'});

                let food = $('div.food');
                let foodPosition = calculateRoute();
                let foodStartCSS = {'top': foodPosition.st + 'px', 'left': foodPosition.sl + 'px', 'visibility': 'visible'};
                food.css(foodStartCSS);
                let animateCSS = {'top': foodPosition.et + 'px', 'left': foodPosition.el + 'px'};
                food.animate(animateCSS, 200, function () {
                    food.css({'visibility': 'hidden'});
                });

                audio.play();
                score += 10;
                $('div.number').text(score);

                setTimeout(function() {
                    hedgehog.attr('src', 'hedgehog1.png');
                    sheep.css({'top': sheepTop + 'px'});
                    scoreImage.css({'top': scoreImageTop + 'px'});
                    feeding = false;
                }, 300);
            }, 200);
        }
    });
}

$(document).ready(readyDoc);
$(window).resize(resizeGame);

