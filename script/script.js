const music = new Audio('songs/omahi.mp3');
//music.play();
const songs = [
    {
        id: 1,
        songName: `O maahi
        <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "https://i.pinimg.com/736x/f0/28/9c/f0289c9a130f39fe4614cd67316db738.jpg",
    },
    {
        id: 2,
        songName: `Arjan vailey
        <br>
        <div class="subtitle">Punjabi hits</div>`,
        poster: "https://c.saavncdn.com/685/Luka-Chuppi-Hindi-2019-20190222104001-500x500.jpg",

    },
    {
        id: 3,
        songName: `Lutt putt gaya
        <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "https://i.pinimg.com/236x/28/5e/00/285e00de5b80de27c67f74e74cdb496c.jpg",

    },
    {
        id: 4,
        songName: `Yaara
        <br>
        <div class="subtitle">Vikram Singh</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",

    },
    {
        id: 5,
        songName: `Ishq jaisa kuch
        <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "https://rukminim2.flixcart.com/image/850/1000/k58hwnk0/poster/g/c/7/large-papon-assamese-singer-wall-poster-pixa002699-original-imafnzfs8mmxgcgk.jpeg?q=90",

    },
    {
        id: 6,
        songName: `Ishq jaisa kuch
        <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "https://www.koimoi.com/wp-content/new-galleries/2023/11/dunki-drop-2-lutt-putt-gaya-song-starring-shah-rukh-khan-gets-reviewed-by-social-media-users-receives-a-big-thumbs-up-01.jpg",

    },
    {
        id: 7,
        songName: `Ishq jaisa kuch
        <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",

    },
    {
        id: 8,
        songName: `Ishq jaisa kuch
        <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",

    },
    {
        id: 9,
        songName: `Ishq jaisa kuch
        <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",

    },
    {
        id: 10,
        songName: `Ishq jaisa kuch
        <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",

    },
    {
        id: 11,
        songName: `O maahi
        <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",
    },
    {
        id: 12,
        songName: `O maahi
        <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",
    },
    {
        id: 13,
        songName: `O maahi
        <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",
    },
    {
        id: 14,
        songName: `O maahi
        <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "https://cdns-images.dzcdn.net/images/cover/deb3ad38a381b61c3aedbcb83e9783eb/264x264.jpg",
    },

];
//console.log(songs);
//let songItem = document.getElementById("songitem");
//console.log(songItem);

Array.from(document.querySelectorAll("#songitem")).forEach((e, i) => {
    e.querySelector('img').src = songs[i].poster;
})
//  songs.forEach(element => {
//     console.log(element);
//  });
//console.log(newAr);
// const songItems = document.querySelectorAll(".songitem");

// // Iterate over the selected elements
// songItems.forEach((e, i) => {
//   // Use querySelector to find the first img element inside each songitem
//   const imgElement = e.querySelector('img');

//   // Update the src attribute with the corresponding poster URL from the 'songs' array
//   if (imgElement && songs[i]) {
//     imgElement.src = songs[i].poster;
//   }
// });

let playBtn = document.getElementById("playbtn")
let wave = document.getElementById("waves");
console.log(wave);

playBtn.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        playBtn.classList.remove('bi-play')
        playBtn.classList.add('bi-pause-fill')
       

    }else{
        music.pause();
        wave.classList.remove('active1');
        playBtn.classList.add('bi-play')
        playBtn.classList.remove('bi-pause-fill')
    }
});

let index = 0;

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
     e.addEventListener('click',(el)=>{
       index = el.target.id;
        //console.log(index);
        music.src = ` songs/${index}.mp3 `;
        //console.log(music.src); 
        music.play();
     });
} )





let popSongLeft = document.getElementById("popleft");
let popSongRight = document.getElementById("popright");
let popSong = document.getElementsByClassName("popsong")[0];

let popArtist_Right = document.getElementById("popartleft");
let popArtist_Left = document.getElementById("popartright");
let item = document.getElementsByClassName("item")[0];

//console.log(popSong)
popSongRight.addEventListener('click', () => {
    popSong.scrollLeft += 330
})

popSongLeft.addEventListener('click', () => {
    popSong.scrollLeft -= 300
})

popArtist_Right.addEventListener('click', () => {
    item.scrollLeft += 300;
});

popArtist_Left.addEventListener('click', () => {
    item.scrollLeft -= 300;
})