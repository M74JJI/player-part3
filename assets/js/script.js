let songs = [
    {
        name: 'Bohemian Rhapsody',
        src: 'assets/songs/song1.mp3',
        cover: 'assets/images/song1.jpg',
        artist: 'Queen',
        lyrics: "6 | Mamaaa 9\n | Just killed a man\n 13 | Put a gun against his head, pulled my trigger\n17 | Now he's dead\n19.5 | Mamaaa, life had just begun,\n26.4 | But now I've gone and thrown it all away\n33 | Mama, oooh,\n39.5 | Didn't mean to make you cry,\n43 | If I'm not back again this time tomorrow,\n47.8 | Carry on, carry on as if nothing really matters \n64 | Too late, my time has come,\n71 | Sends shivers down my spine \n74 |  body's aching all The time \n78 |  Goodbye, everybody\n81 |  I've got to go \n84.7 |  Gotta leave you all behind and face the truth\n91.7 |  Mama, oooh\n98 | I don't want to die\n101 | I sometimes wish I'd never been born at all",
    },
    {
        name: 'The Phantom Of The Opera',
        src: 'assets/songs/song2.mp3',
        cover: 'assets/images/song2.jpg',
        artist: 'Nightwish',
        lyrics: '',
    },
    {
        name: 'To the Helfire',
        src: 'assets/songs/song3.mp3',
        cover: 'assets/images/song3.jpg',
        artist: 'Lorna Shore',
        lyrics: '',
    },
    {
        name: 'Hangar 18',
        src: 'assets/songs/song4.mp3',
        cover: 'assets/images/song4.jpg',
        artist: 'Megadeth',
        lyrics: '',
    },
    {
        name: 'Royalty(ft.Neoni)',
        src: 'assets/songs/song9.mp3',
        cover: 'assets/images/song9.jpg',
        artist: 'Egzod & Maestro Chives ',
        lyrics:
            "11.5 | I've been cold hearted\n" +
            "14 | But I'm just getting started\n" +
            '18 | Got my eyes on the the targetNow\n' +
            '22 | now\n' +
            "32 | 'Til the battles are won\n" +
            "35 | 'Til kingdom come\n" +
            "45 | I'll never run \n" +
            '48 | Best to give me your loyalty\n' +
            "52 | 'Cause I'm taking the world, you'll see\n" +
            "55 | They'll be calling me, calling me\n" +
            "58 | They'll be calling me royalty\n" +
            '60 | Best to give me your loyalty\n' +
            "64 | 'Cause I'm taking the world, you'll see\n" +
            "67 | They'll be calling me, calling me\n" +
            "70 | They'll be calling me royalty\n" +
            "82 | They'll be calling me royalty\n",
    },
    {
        name: 'Moonlight Sonata',
        src: 'assets/songs/song8.mp3',
        cover: 'assets/images/song8.jpg',
        artist: 'Dr.Viossy',
        lyrics: '',
    },
    {
        name: '512',
        src: 'assets/songs/song5.mp3',
        cover: 'assets/images/song5.jpg',
        artist: 'Lamb of God',
        lyrics: '',
    },
    {
        name: 'Tommy T',
        src: 'assets/songs/song6.mp3',
        cover: 'assets/images/song6.jpg',
        artist: 'Wiked x Tommy T',
        lyrics: '',
    },
    {
        name: "You're Nobody",
        src: 'assets/songs/song7.mp3',
        cover: 'assets/images/song7.jpg',
        artist: 'Biggie Smalls',
        lyrics: '',
    },
];
let artists = [
    {
        name: 'Queen',
        picture: 'assets/images/freddie.png',
    },
    {
        name: 'Michael Jackson',
        picture: 'assets/images/mich.jpg',
    },
    {
        name: 'Led Zeppelin',
        picture: 'assets/images/robert.jpg',
    },
    {
        name: 'Kendrick Lamar',
        picture: 'assets/images/kendrick.jpg',
    },
    {
        name: 'Ghost',
        picture: 'assets/images/ghost.jpg',
    },
    {
        name: 'Cradle of filth',
        picture: 'assets/images/cradle.jpeg',
    },
    {
        name: 'Rammstein',
        picture: 'assets/images/ramm.jpg',
    },
    {
        name: 'Judas Priest',
        picture: 'assets/images/judas.jpg',
    },
    {
        name: 'Mac Miller',
        picture: 'assets/images/mac.jpg',
    },
];
let albums = [
    {
        name: 'Master of puppets',
        picture: 'assets/images/master.jfif',
    },
    {
        name: 'Rust in peace',
        picture: 'assets/images/megadeth.jfif',
    },
    {
        name: 'Ready to die',
        picture: 'assets/images/rdie.jfif',
    },
    {
        name: 'Automatic for the People',
        picture: 'assets/images/autm.jfif',
    },
    {
        name: 'Vaughan Texas Flood',
        picture: 'assets/images/vaughan.jfif',
    },
    {
        name: 'Korn (1994)',
        picture: 'assets/images/korn.jpg',
    },
    {
        name: 'Illmatic',
        picture: 'assets/images/Illmatic.jfif',
    },
    {
        name: 'King 810',
        picture: 'assets/images/king.jpg',
    },
];
function pad(d) {
    return d < 10 ? '0' + d.toString() : d.toString();
}
$(document).ready(function () {
    songs.map(function (song, i) {
        var temp =
            '<div class="song"  data-id="' +
            i +
            '"> <img src="assets/images/equalizer.gif" alt="" class="equalizer_gif" /> <div class="song_num">' +
            pad(i + 1) +
            '</div> <img src="' +
            song.cover +
            '" class="song_img" /> <div class="song_info"> <div class="song_name">' +
            song.name +
            '</div> <div class="song_artist">' +
            song.artist +
            '</div> </div> </div>';
        $('.left_songs_list').append(temp);
    });
    artists.map(function (artist, i) {
        var temp =
            '<div class="pop"> <img class="artist_img" src="' +
            artist.picture +
            '" alt="" /> <div class="pop_text">' +
            artist.name +
            '</div> </div>';
        $('#artists_lists').append(temp);
    });
    albums.map(function (artist, i) {
        var temp =
            '<div class="pop"> <img class="album_cover" src="' +
            artist.picture +
            '" alt="" /> <div class="pop_text">' +
            artist.name +
            '</div> </div>';
        $('#albums_lists').append(temp);
    });
});

var audio = document.getElementsByTagName('audio')[0];
var audioPlayer = document.getElementsByTagName('audio')[0];

var bar_size = 500;

var updateTrack = setInterval(function () {
    var sizee = parseInt((audio.currentTime * bar_size) / audio.duration);
    var volume_size = audioPlayer.volume;
    $('.progress_bar').css('width', '' + sizee + 'px');
    var time = formatTime(audio.currentTime);
    $('.time_start').html(time);
    $('.volume_bar').css('width', '' + volume_size * 150 + 'px');
}, 500);
$(document).on('click', '#play', function () {
    audio.play();
});
canvass = document.getElementById('time_slider');

canvass.addEventListener('click', function (e) {
    if (!e) {
        e = window.event;
    } //get the latest windows event if it isn't set
    try {
        //calculate the current time based on position of mouse cursor in canvas box
        audioPlayer.currentTime =
            audioPlayer.duration * (e.offsetX / canvass.clientWidth);
    } catch (err) {
        // Fail silently but show in F12 developer tools console
        if (window.console && console.error('Error:' + err));
    }
});

vol = document.getElementById('full_height');
vol.addEventListener('click', function (e) {
    if (!e) {
        e = window.event;
    } //get the latest windows event if it isn't set
    try {
        //calculate the current time based on position of mouse cursor in canvas box
        audioPlayer.volume = e.offsetX / vol.clientWidth;
    } catch (err) {
        // Fail silently but show in F12 developer tools console
        if (window.console && console.error('Error:' + err));
    }
});

audioPlayer.onloadedmetadata = function () {
    $('.time_end').html(formatTime(audioPlayer.duration));
};
$(document).on('click', '.song', function () {
    $('.lyrics').html('');
    var id = $(this).data('id');
    var src = songs[id].src;
    audioPlayer.setAttribute('src', src);
    audioPlayer.play();
    $('.song_num').show();
    $('.song_active').removeClass('song_active');
    $(this).addClass('song_active');
    $('.bottom_equalizer_gif').show();
    $('.equalizer_gif').hide();
    $(this).find('.song_num').hide();
    $(this).find('.equalizer_gif').show();
    $('.play_player').hide();
    $('.pause_player').show();
    $('.song[selected=selected]').removeAttr('selected');
    $(this).attr('selected', 'true');
    $('.song_player').find('.song_img').attr('src', songs[id].cover);
    $('.song_player').find('.song_name').text(songs[id].name);
    $('.song_player').find('.song_artist').text(songs[id].artist);
    $('.right').css(
        'background-image',
        'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(' +
            songs[id].cover +
            ')'
    );
    $('.right').css('background-repeat', 'no-repeat');
    $('.right').css('background-size', 'cover');
    $('.right').css('background-position', '50%');
    $('.right_song_img').attr('src', '' + songs[id].cover + '');
    $('.right_song_name').text('' + songs[id].name + '');
    $('.right_song_artist').text('' + songs[id].artist + '');

    var lyrics = songs[id].lyrics;

    if (lyrics != '') {
        const lyrics_div = document.querySelector('.lyrics');
        const lines = lyrics.trim().split('\n');

        lyrics_div.style.display = 'block';
        lyrics_div.innerText = '';

        let syncData = [];

        lines.map((line, index) => {
            const [time, text] = line.trim().split('|');
            syncData.push({
                start: time.trim(),
                text: text.trim(),
            });
        });

        audioPlayer.addEventListener('timeupdate', () => {
            syncData.forEach((item) => {
                if (audioPlayer.currentTime >= item.start)
                    lyrics_div.innerText = item.text;
            });
        });
    }
});
function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
}
var canvas,
    ctx,
    source,
    context,
    analyser,
    fbc_array,
    bars,
    bar_x,
    bar_width,
    bar_height;

$(document).ready(function () {
    context = new AudioContext();
    analyser = context.createAnalyser();
    canvas = document.getElementById('analyser');
    ctx = canvas.getContext('2d');
    source = context.createMediaElementSource(audioPlayer);
    source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
});

function frameLooper() {
    window.requestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = '#238586'; // Color of the bars
    bars = 100;
    for (var i = 0; i < bars; i++) {
        bar_x = i * 3;
        bar_width = 1;
        bar_height = -(fbc_array[i] / 2);
        //  fillRect( x, y, width, height ) // Explanation of the parameters below
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
}
$(document).on('click', '.pause_player', function () {
    audioPlayer.pause();
    $(this).hide();
    $('.play_player').show();
    $('.song_num').show();
    $('.equalizer_gif').hide();
    $('.bottom_equalizer_gif').hide();
});
$(document).on('click', '.play_player', function () {
    audioPlayer.play();
    $(this).hide();
    $('.pause_player').show();
    console.log($('.song[selected=selected]'));
    $('.song[selected=selected]').find('.song_num').hide();
    $('.song[selected=selected]').find('.equalizer_gif').show();
    $('.bottom_equalizer_gif').show();
});
/*
search.addEventListener('keyup', function () {
    var searchTerm = search.value.toLowerCase();
    if (searchTerm == '') {
        container.innerHTML = '';
        initialize_songs();
    } else {
        var results = songs
            .map(function (song, i) {
                var { name, artist } = song;
                if (
                    name.toLowerCase().includes(searchTerm) == true ||
                    artist.toLowerCase().includes(searchTerm) == true
                ) {
                    return song;
                }
            })
            .filter(Boolean);

        if (results.length > 0) {
            results.map(function (song, i) {
                container.innerHTML =
                    '<div class="song" data-src=' +
                    song.src +
                    '><img class="song_img" src=' +
                    song.cover +
                    ' alt="" /><div class="col"><div class="song_name">' +
                    song.name +
                    '</div><div class="song_artist">' +
                    song.artist +
                    '</div></div></div>';
            });
            var song = document.querySelectorAll('.song');
            for (let i = 0; i < song.length; i++) {
                song[i].addEventListener('click', function (e) {
                    var img = song[i]
                        .querySelector('.song_img')
                        .getAttribute('src');
                    var src = song[i].getAttribute('data-src');
                    audioPlayer.setAttribute('src', src);
                    audioPlayer.play();
                });
            }
        }
    }
});
*/
var results = [];
$(document).on('keyup', '.song_input_search', function (e) {
    var searchTerm = $(this).val();
    if (searchTerm == '') {
        $('.left_songs_list').html('');
        songs.map(function (song, i) {
            var temp =
                '<div class="song" data-id="' +
                i +
                '"> <img src="assets/images/equalizer.gif" alt="" class="equalizer_gif" /> <div class="song_num">' +
                pad(i + 1) +
                '</div> <img src="' +
                song.cover +
                '" class="song_img" /> <div class="song_info"> <div class="song_name">' +
                song.name +
                '</div> <div class="song_artist">' +
                song.artist +
                '</div> </div> </div>';
            $('.left_songs_list').append(temp);
        });
    } else {
        results = songs.map(function (song, i) {
            var { name, artist } = song;
            if (
                name.toLowerCase().includes(searchTerm) == true ||
                artist.toLowerCase().includes(searchTerm) == true
            ) {
                return song;
            }
        });
        console.log(results.length);
        if (results.length > 0) {
            console.log(results);
            results.map(function (song, i) {
                console.log(song);
                var temp =
                    '<div class="song" data-id="' +
                    i +
                    '"> <img src="assets/images/equalizer.gif" alt="" class="equalizer_gif" /> <div class="song_num">' +
                    pad(i + 1) +
                    '</div> <img src="' +
                    song.cover +
                    '" class="song_img" /> <div class="song_info"> <div class="song_name">' +
                    song.name +
                    '</div> <div class="song_artist">' +
                    song.artist +
                    '</div> </div> </div>';
                $('.left_songs_list').html('');
                $('.left_songs_list').append(temp);
            });
        }
    }
});
